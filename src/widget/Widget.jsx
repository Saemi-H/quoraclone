import React from 'react';
import WidgetOptions from '../widgetoptions/WidgetOptions';
import './Widget.css'

const Widget = () => {
    return (
        <div className="widget">
            <div className="widget-header">
                <h5>광고입니다</h5>
            </div>
            <div className="widget-contents">
                <WidgetOptions />
            </div>
        </div>
    );
};

export default Widget;