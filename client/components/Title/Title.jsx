import React from 'react';
import getClassName from '../../utils/getClassName.js';

import './title.scss';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this._styles = {
            'center': 'title-center',
            'left': 'title-left'
        };
    }

    render() {
        return (
            <div className='title-container' style={this.props.containerStyle}>
                <div className='title-container__content'>
                    <div className={`title-container__content__text ${getClassName(this.props.type, this._styles)}`}
                         style={this.props.textStyle}>
                        {this.props.text}
                        <div className={'title-container__border-1 anim-rotate-container-drag__border-1'}>{this.props.text}</div>
                        <div className={'title-container__border-2 anim-rotate-container-drag__border-2'}>{this.props.text}</div>
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