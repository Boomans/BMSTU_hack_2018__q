import React from 'react';
import getClassName from '../../utils/getClassName.js';

import './button.scss';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this._styles = {
            'uppercase': 'text-uppercase'
        }
    }

    render() {
        return (
            <div className='button-container' onClick={this.props.onClick}>
                <div className={`${this.props.img ? 'button-container__content-img' : 'button-container__content blink-container'}`}>
                    <div className={`button-container__content__text ${getClassName(this.props.type, this._styles)}`}
                         style={this.props.textStyle}>
                        {this.props.img ? (<img src={this.props.img} width={this.props.imgSize[0]}
                                                height={this.props.imgSize[1]}/>) : this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}