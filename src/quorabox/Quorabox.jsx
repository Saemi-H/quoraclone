import React from 'react';
import './Quorabox.css'
import { Button, Avatar } from '@material-ui/core';

const Quorabox = () => {
    return (
        <div className="quorabox">
            <div className="quorabox-info">
                <Avatar />
                <h5>리액트 깍는 배수</h5>
            </div>
            <div className="quorabox-quora">
                <p>무엇이 궁금하신가요?</p>
            </div>
        </div>
    );
};

export default Quorabox;