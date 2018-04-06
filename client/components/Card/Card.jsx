import React from 'react';

import './card.scss';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='card-container' style={this.props.containerStyle}>
                <div className={`card-container__content ${this.props.onClick ? 'clickable' : ''}`} onClick={this.props.onClick}>
                    <img src={this.props.img} width={this.props.imgSize[0]} height={this.props.imgSize[1]} />
                    {
                        this.props.content
                    }
                </div>
            </div>
        );
    }
}