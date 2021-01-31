import React from 'react'
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import Moment from 'moment';
import { render } from 'react-dom';

const Time = () => {

    return (
        <div>
          <Clock format={'h:mm:ss a'} ticking={true} timezone={'US/Central'} />
        </div>
    )
}

export default Time
