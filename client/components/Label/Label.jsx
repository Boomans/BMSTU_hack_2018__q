import React from 'react';
import getClassName from '../../utils/getClassName.js';

import './label.scss';

export default class Label extends React.Component {
    constructor(props) {
        super(props);
        this._styles = {
            'header': 'text-header',
            'small-text': 'text-small',
            'midd-text': 'text-middle',
            'center': 'text-center',
            'margin-top-10': 'text-margin-top-10',
            'uppercase': 'text-uppercase'
        };
    }

    render() {
        return (
            <div className='label-container' style={this.props.containerStyle}>
                <div className='label-container__content'>
                    <div className={`label-container__content__text ${getClassName(this.props.type, this._styles)}`}
                         style={this.props.textStyle}
                         dangerouslySetInnerHTML={{__html: this.props.isBlink ? Label._formBlinkingText(this.props.text) : this.props.text}}>
                    </div>
                </div>
            </div>
        );
    }

    static _formBlinkingText(text) {
        const split = text.split('');
        const min = 0;
        const max = split.length - 1;
        const rand = Math.round(min + Math.random() * (max - min));

        split[rand] = `<o class='blink-container'>${split[rand]}</o>`;
        return split.join('');
    }
}