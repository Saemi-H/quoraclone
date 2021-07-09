import React from 'react';
import './Quorabox.css'
import { Button, Avatar } from '@material-ui/core';
import {useSelector} from 'react-redux'
import {selectUser} from '../features/userSlice'

const Quorabox = () => {
    const user=useSelector(selectUser)
    return (
        <div className="quorabox">
            <div className="quorabox-info">
                <Avatar src={user.photo}/>
                <h5>{user.displayName}</h5>
            </div>
            <div className="quorabox-quora">
                <p>무엇이 궁금하신가요?</p>
            </div>
        </div>
    );
};

export default Quorabox;