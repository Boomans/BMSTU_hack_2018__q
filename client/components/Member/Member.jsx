import React from 'react';
import Title from '../../components/Title/Title.jsx';
import Label from '../../components/Label/Label.jsx';
import Card from '../../components/Card/Card.jsx';

import './member.scss';

export default class Member extends React.Component {
    constructor(props) {
        super(props);
        this._imgWidth = 200;
        this._imgHeight = 200;

        this._iconSize = 36;

        this.__iconSRC = '../../'
    }

    render() {
        return (
            <div className='member-container' style={this.props.containerStyle}>
                <div className='member-container__content'>
                    <div className='profile-container container-1'>
                        <div className='profile-container__card'>
                            <Card
                                img={this.props.img}
                                imgSize={[this._imgWidth, this._imgHeight]}
                                content={<Label text={this.props.name} type='uppercase big-text center margin-top-20'/>}/>
                        </div>
                        <div className='profile-container__data'>
                            <div className='profile-container__data__last-name'>
                                <Label text={this.props.data.lastName} type='midd-text center margin-top-10'/>
                            </div>
                            <div className='profile-container__data__last-name'>
                                <Label text={this.props.data.firstName} type='midd-text center margin-top-10'/>
                            </div>
                            <div className='profile-container__data__last-name'>
                                <Label text={this.props.data.patronymic} type='midd-text center margin-top-10'/>
                            </div>
                        </div>
                    </div>
                    <div className='about-me-container container-2'>
                        <div className='about-me-container__content'>
                            <Title text='about me' type='center' containerStyle={{
                                marginTop: this._titleMarginTop
                            }}/>
                            {
                                this.props.data.aboutMe.map((text, i) => {
                                    return (<Label key={`principles-text-${i}`} text={text} type='midd-text center'
                                                   containerStyle={{
                                                       marginTop: i === 0 ? 100 : 10
                                                   }}/>);
                                })
                            }
                        </div>
                    </div>
                    <div className='skills-container container-3'>
                        <div className='skills-container__content'>
                            <Title text='skills' type='center' containerStyle={{
                                marginTop: this._titleMarginTop
                            }}/>
                            <div className='skill-list'>
                                <div className='skill-list__content'>
                                    {
                                        this.props.data.skills.map((skill, i) => {
                                            return (
                                                <div className='skill' key={`skill-${i}`}>
                                                    <img
                                                        src={`/build/res/img/skills-icons/white/icons8-${skill.icon}.png`}
                                                        alt=""
                                                        style={{backgroundColor: skill.color}}
                                                        width={this._iconSize}
                                                        height={this._iconSize}
                                                    />
                                                    <div className='skill__text'>
                                                        <Label text={skill.text} type='midd-text'/>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}