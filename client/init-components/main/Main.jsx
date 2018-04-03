import React from 'react';
import Label from '../../components/Label/Label.jsx';
import Button from '../../components/Button/Button.jsx';
import StarsContainer from '../../components/StarsContainer/StarsContainer.jsx';

import './main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this._nextContainerClickHandler = this._nextContainerClickHandler.bind(this);
    }

    render() {
        return (
            <div className='main-container'>
                <div className='main-container__content'>
                    <StarsContainer />
                    <div className='head-container'>
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
                </div>
            </div>
        );
    }

    _nextContainerClickHandler() {

    }
}