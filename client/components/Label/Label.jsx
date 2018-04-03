import React from 'react';
import './label.scss';

export default class Label extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='label-container'>
                <div className='label-container__content'>
                    <div className={`label-container__content__text ${Label._getClassName(this.props.type)}`}
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

    static _getClassName(type) {
        const args = type.split(' ');
        const styles = {
            'header': 'text-header',
            'center': 'text-center',
            'undefined': ''
        };

        return args.reduce((res, curr) => {
            res += `${styles[curr]} `;
            return res;
        }, '');
    }
}