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
            <div className='button-container'>
                <div className='button-container__content'>
                    <div className={`button-container__content__text ${getClassName(this.props.type, this._styles)}`}
                         style={this.props.textStyle} onClick={this.props.onClick}>
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }
}