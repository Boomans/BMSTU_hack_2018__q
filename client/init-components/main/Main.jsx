import React from 'react';
import Label from '../../components/Label/Label.jsx';
import StarsContainer from '../../components/StarsContainer/StarsContainer.jsx';

import './main.scss';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}