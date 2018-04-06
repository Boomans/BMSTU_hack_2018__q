import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../../components/Landing/Landing.jsx'
import StarsContainer from '../../components/StarsContainer/StarsContainer.jsx';
import Member from '../../components/Member/Member.jsx';
import $ from 'jquery';

import './main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this._nextContainerClickHandler = this._nextContainerClickHandler.bind(this);
        this._prevContainerClickHandler = this._prevContainerClickHandler.bind(this);
        this._onWheel = this._onWheel.bind(this);
        this._renderLanding = this._renderLanding.bind(this);
        this._renderMember = this._renderMember.bind(this);

        this._windowSize = $(window).height();
        this._isFirstRun = true;

        this._scrollData = {
            prevNum: -1,
            num: 1,
            scrolling: false
        };

        this._membersData = {
            Artem: {
                lastName: 'Белков',
                firstName: 'Артем',
                patronymic: 'Дмитриевич',
                aboutMe: [
                    'Учусь в МГТУ на ИУ5',
                    'Работаю в Mail.ru Group',
                    'Люблю Swift & iOS'
                ],
                skills: [
                    {
                        icon: 'taekwondo',
                        color: '#377ab3',
                        text: 'UI/UX design'
                    },
                    {
                        icon: 'judo',
                        color: '#8f2054',
                        text: 'SWIFT / Objective-C'
                    },
                    {
                        icon: 'kitesurfing',
                        color: '#508f95',
                        text: 'Python'
                    }
                ]
            },
            Denis: {
                lastName: 'Степанов',
                firstName: 'Денис',
                patronymic: 'Геннадьевич'
            },
            Vladimir: {
                lastName: 'Атаманов',
                firstName: 'Владимир',
                patronymic: 'Витальевич'
            },
            Ilnur: {
                lastName: 'Гатаулин',
                firstName: 'Ильнур',
                patronymic: 'Ильшатович'
            }
        };

        this._contentContainer = undefined;
    }

    componentDidMount() {
        this._contentContainer = document.getElementById('content-container');
        this._renderLanding();
    }

    render() {
        return (
            <div className='main-container' onWheel={this._onWheel}>
                <StarsContainer/>
                <div id='content-container' className='main-container__content'>
                    {/*<Landing chooseMember={this._chooseMember}/>*/}

                </div>
            </div>
        );
    }

    _nextContainerClickHandler() {
        this._onWheel({
            deltaY: 1
        });
    }

    _prevContainerClickHandler() {
        this._onWheel({
            deltaY: -1
        });
    }

    static _getScrollOffset() {
        return document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop;
    }

    _onWheel(e) {
        if (this._isFirstRun) {
            const scrollOffset = Main._getScrollOffset();
            if (scrollOffset < this._windowSize) {
                this._scrollData.num = 1;
            } else if (scrollOffset >= this._windowSize && scrollOffset < this._windowSize * 2) {
                this._scrollData.num = 2;
            } else {
                this._scrollData.num = 3;
            }
            this._isFirstRun = false;
        }
        e.preventDefault && e.preventDefault();
        const deltaY = e.deltaY;
        if (this._scrollData.scrolling) {
            return;
        }

        this._scrollData.scrolling = true;

        this._scrollData.prevNum = this._scrollData.num;
        if (deltaY > 0) {
            this._scrollData.num++;
            this._scrollData.num = this._scrollData.num > 3 ? 3 : this._scrollData.num;
        } else {
            this._scrollData.num--;
            this._scrollData.num = this._scrollData.num < 1 ? 1 : this._scrollData.num;
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

    _renderMember(name) {
        if (this._contentContainer !== undefined) {
            this._scrollData.num = 1;
            ReactDOM.unmountComponentAtNode(this._contentContainer);
            ReactDOM.render(
                <Member
                    turnToLanding={this._renderLanding}
                    img={`/build/res/img/avatars/fade/${name}.jpg`}
                    imgSize={[this._cardImgSize, this._cardImgSize]}
                    name={name}
                    data={this._membersData[name]}
                />,
                this._contentContainer
            );
        }
    }

    _renderLanding() {
        if (this._contentContainer !== undefined) {
            ReactDOM.unmountComponentAtNode(this._contentContainer);
            ReactDOM.render(
                <Landing turnToMember={this._renderMember}/>,
                this._contentContainer
            );
        }
    }
}