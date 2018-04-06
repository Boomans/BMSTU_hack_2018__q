import React from 'react';
import Label from '../../components/Label/Label.jsx';
import Title from '../../components/Title/Title.jsx';
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card.jsx';
import $ from 'jquery';

import './landing.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        // this._onCardClickHandler = this._onCardClickHandler.bind(this);

        this._buttonFontSize = 25;
        this._titleMarginTop = 35;
        this._cardImgSize = 200;
    }

    render() {
        return (
            <div className="landing-container">
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
                                    return (<Card onClick={()=>{this.props.turnToMember(name)}}
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
        );
    }

    // _onCardClickHandler(e) {
    //     console.log(e);
    // }
}