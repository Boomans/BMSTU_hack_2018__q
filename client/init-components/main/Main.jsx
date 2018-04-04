import React from 'react';
import Label from '../../components/Label/Label.jsx';
import Button from '../../components/Button/Button.jsx';
import StarsContainer from '../../components/StarsContainer/StarsContainer.jsx';
import $ from 'jquery';

import './main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this._nextContainerClickHandler = this._nextContainerClickHandler.bind(this);
        this._onWheel = this._onWheel.bind(this);

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
                    <StarsContainer />
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
                                        fontSize: 30
                                    }} onClick={this._nextContainerClickHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='principles-container container-2'>
                        <div className='principles-container__content'>

                        </div>
                    </div>
                    <div className='team-container container-3'>
                        <div className='team-container__content'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _nextContainerClickHandler() {
        this._onWheel({
           deltaY: 1
        });
    }

    _onWheel(e) {
        e.preventDefault && e.preventDefault();
        const deltaY = e.deltaY;
        if (this._scrollData.scrolling) {
            return;
        }

        this._scrollData.scrolling = true;

        this._scrollData.prevNum = this._scrollData.num;
        if (deltaY > 0) {
            this._scrollData.num++;
            this._scrollData.num =  this._scrollData.num > 3 ? 3 : this._scrollData.num;
        } else {
            this._scrollData.num--;
            this._scrollData.num =  this._scrollData.num < 1 ? 1 : this._scrollData.num;
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