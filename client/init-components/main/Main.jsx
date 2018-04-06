import React from 'react';
import Label from '../../components/Label/Label.jsx';
import Title from '../../components/Title/Title.jsx';
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import StarsContainer from '../../components/StarsContainer/StarsContainer.jsx';
import $ from 'jquery';

import './main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this._nextContainerClickHandler = this._nextContainerClickHandler.bind(this);
        this._prevContainerClickHandler = this._prevContainerClickHandler.bind(this);
        this._onCardClickHandler = this._onCardClickHandler.bind(this);
        this._onWheel = this._onWheel.bind(this);

        this._buttonFontSize = 25;
        this._titleMarginTop = 35;
        this._cardImgSize = 200;

        this._windowSize = $(window).height();
        this._isFirstRun = true;

        this._scrollData = {
            prevNum: -1,
            num: 1,
            scrolling: false
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='main-container' onWheel={this._onWheel}>
                <div className='main-container__content'>
                    <StarsContainer/>
                    <div className='head-container container-1'>
                        <div className='head-container__content'>
                            <div className='text-container'>
                                <Label text='boomans' type='header center' isBlink={true}/>
                            </div>
                            <div className='triangle-container'>
                                <img src='/build/res/img/triangle.png'/>
                            </div>
                            <div className='button-next-container'>
                                <div className='button-next-container__content'>
                                    <Button text='more' type='uppercase' textStyle={{
                                        fontSize: this._buttonFontSize
                                    }} onClick={this._nextContainerClickHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='principles-container container-2'>
                        <div className='principles-container__content'>
                            <Title text='our principles' type='center' containerStyle={{
                                marginTop: this._titleMarginTop
                            }}/>

                            {
                                ['we are using space technologies', 'smth', 'smth', 'smth'].map((text, i) => {
                                    return (<Label key={`principles-text-${i}`} text={text} type='midd-text center'
                                                   containerStyle={{
                                                       marginTop: i === 0 ? 100 : 10
                                                   }}/>);
                                })
                            }

                            <div className='button-next-container'>
                                <div className='button-next-container__content'>
                                    <Button text='more' type='uppercase' textStyle={{
                                        fontSize: this._buttonFontSize
                                    }} onClick={this._nextContainerClickHandler}/>
                                </div>
                            </div>
                            <div className='button-prev-container'>
                                <div className='button-prev-container__content'>
                                    <Button img='/build/res/img/up-arrow.png' imgSize={[30, 30]}
                                            onClick={this._prevContainerClickHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='team-container container-3'>
                        <div className='team-container__content'>
                            <Title text='team' type='center' containerStyle={{
                                marginTop: this._titleMarginTop
                            }}/>

                            <div className='team-container__cards'>
                                {
                                    ['Artem', 'Denis', 'Vladimir', 'Ilnur'].map((name, i) => {
                                        return (<Card onClick={this._onCardClickHandler}
                                                      key={`key-team-card-${i}`}
                                                      img={`/build/res/img/avatars/fade/${name}.jpg`}
                                                      imgSize={[this._cardImgSize, this._cardImgSize]}
                                                      content={<Label text={name}
                                                                      type='uppercase midd-text center margin-top-10'/>}/>);
                                    })
                                }
                            </div>

                            <div className='button-prev-container'>
                                <div className='button-prev-container__content'>
                                    <Button img='/build/res/img/up-arrow.png' imgSize={[30, 30]}
                                            onClick={this._prevContainerClickHandler}/>
                                </div>
                            </div>

                            <div className='frame-container'>
                                <div className='frame-container__content'>
                                    <img src='/build/res/img/frame.png'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _onCardClickHandler(e) {
        console.log(e);
    }

    _nextContainerClickHandler() {
        this._onWheel({
            deltaY: 1
        });
    }

    _prevContainerClickHandler() {
        this._onWheel({
            deltaY: -1
        });
    }

    static _getScrollOffset() {
        return document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop;
    }

    _onWheel(e) {
        if (this._isFirstRun) {
            const scrollOffset = Main._getScrollOffset();
            if (scrollOffset < this._windowSize) {
                this._scrollData.num = 1;
            } else if (scrollOffset >= this._windowSize && scrollOffset < this._windowSize * 2) {
                this._scrollData.num = 2;
            } else {
                this._scrollData.num = 3;
            }
            this._isFirstRun = false;
        }
        e.preventDefault && e.preventDefault();
        const deltaY = e.deltaY;
        if (this._scrollData.scrolling) {
            return;
        }

        this._scrollData.scrolling = true;

        this._scrollData.prevNum = this._scrollData.num;
        if (deltaY > 0) {
            this._scrollData.num++;
            this._scrollData.num = this._scrollData.num > 3 ? 3 : this._scrollData.num;
        } else {
            this._scrollData.num--;
            this._scrollData.num = this._scrollData.num < 1 ? 1 : this._scrollData.num;
        }

        if (this._scrollData.prevNum === this._scrollData.num) {
            this._scrollData.scrolling = false;
            return;
        }

        this._scroll(500);
    }

    _scroll(time) {
        $('html, body').animate({
            scrollTop: $('.container-' + this._scrollData.num).offset().top
        }, time, 'linear', () => {
            setTimeout(() => {
                this._scrollData.scrolling = false;
            }, 500);
        });
    }
}