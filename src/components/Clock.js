import React from 'react';
import Clock from 'react-live-clock';

const ClockDemo = () => {
   
    const date = new Date();

    return (
        <div className='container'>
            <div class='row' className='hdr'>
                <div class='col-sm-12'>
                    <h3>Connected</h3>
                </div>
                <div className='clk'>
                <Clock value={date} />
                </div>
            </div>
        </div>
    )
}

export default ClockDemo