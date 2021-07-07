import React from 'react';
import './Nav.css';
import {AssignmentIndOutlined, BorderAllRounded, Home, Language, NotificationsOutlined, PeopleAltOutlined, Search} from '@material-ui/icons'
import { Button, Avatar } from '@material-ui/core';

const Nav = () => {
    return (
        <div className="nav">
            <div className="qheader-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Quora_logo_2015.svg" alt="logo" />
            </div>

            <div className="qheader-icons">
                <div className="qheader-icon">
                    <Home />
                </div>
                <div className="qheader-icon">
                    <BorderAllRounded />
                </div>
                <div className="qheader-icon">
                    <AssignmentIndOutlined />
                </div>
                <div className="qheader-icon">
                    <PeopleAltOutlined />
                </div>
                <div className="qheader-icon">
                    <NotificationsOutlined />
                </div>
            </div>

            <div className="qheader-input">
                <input type="text" placeholder="Search"/>
                <Search />
            </div>

            <div className="qheader-Rem">
                <div className="qheader-avatar">
                    <Avatar />
                </div>
                <Language />
                <Button>질문하기</Button>
            </div>
        </div>
    );
};

export default Nav;