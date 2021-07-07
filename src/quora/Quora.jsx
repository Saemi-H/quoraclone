import React from 'react';
import './Quora.css'
import Nav from '../navbar/Nav';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/Feed';
import Widget from '../widget/Widget';

const Quora = () => {
    return (
        <div className="quora">
            <Nav />
            <div className="quora-content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    );
};

export default Quora;