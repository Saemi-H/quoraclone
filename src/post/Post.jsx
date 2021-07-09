import React from 'react';
import './Post.css'
import {  Avatar } from '@material-ui/core';
import {  ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons';

const Post = () => {
    return (
        <div className="post">
             <div className="post-info">
                <Avatar />
                <h5>유저 아이디</h5>
                <small>작성시간</small>
            </div>
            <div className="post-body">
                <div className="post-question">
                    <p>질문 내용입니다</p>

                    <button className="post-btnAnswer">
                        답변하기
                    </button>
                </div>
                <div className="post-answer">
                    <p>답변입니다.</p>
                </div>
                <img src="https://blog.kakaocdn.net/dn/bezjux/btqCX8fuOPX/6uq138en4osoKRq9rtbEG0/img.jpg" alt="라이언" />
            </div>

            <div className="post-footer">
                <div className="post-footerAction">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOneOutlined />
                <ChatBubbleOutlined />
                <div className="post-footerRight">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>
    );
};

export default Post;