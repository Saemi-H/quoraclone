import React, {useEffect, useState} from 'react';
import './Post.css'
import {  Avatar, Input } from '@material-ui/core';
import {  ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined, Link, PeopleAltOutlined,
    } from '@material-ui/icons';
import Modal from 'react-modal'
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import {selectQuestionId, selectQuestionName, setQuestionInfo} from '../features/questionSlice'
import firebase from 'firebase';
import db from "../firebase";
Modal.setAppElement("#root");

const Post = ({key, Id, image, question, timestamp, quoraUser}) => {
    const user = useSelector(selectUser);
    const questionId = useSelector(selectQuestionId);
    const questionName = useSelector(selectQuestionName)
    const [answer, setAnswer] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const dispatch=useDispatch()
   
    const [getAnswer, setGetAnswer] = useState([])
    

    const handleAnswer = (e) => {
        e.preventDefault();
      if(questionId){
          db.collection('questions').doc(questionId).collection('answer')
          .add({
              questionId:questionId,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              answer: answer,
              user:user,
          })
          console.log(questionId,'-', questionName)
          setAnswer('')
          setOpenModal(false)
      }
    }

    useEffect(()=>
      {  if(questionId){
            db.collection('questions').doc(questionId).collection('answer').orderBy('timestamp', 'desc')
            .onSnapshot((snapshot => 
                setGetAnswer(snapshot.docs.map(doc=>
                    ({id:doc.id, answers:doc.data()})))
                ))
        }},[questionId]
    )

    return (
        <div className="post"
            onClick={()=>dispatch(setQuestionInfo({
                questionId: Id,
                questionName: question,
            }))}
        >
             <div className="post-info">
             <Avatar src={quoraUser.photo}/>
                <h5>{quoraUser.displayName?quoraUser.displayName : quoraUser.email}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            <div className="post-body">
                <div className="post-question">
                    <p>{question}</p>

                    <button className="post-btnAnswer" onClick={() => setOpenModal(true)}>
                        답변하기
                    </button>
                    <Modal isOpen={openModal} onRequestClose={() => setOpenModal(false)}
                       shouldCloseOnOverlayClick={false}
                       style={{
                           overlay: {
                               width: 700,
                               height: 600,
                               backgroundColor: "rgba(0,0,0,0.8)",
                               zIndex: "1000",
                               top: "50%",
                               left: "50%",
                               marginTop: "-300px",
                               marginLeft: "-350px",
                           }
                       }}>
                    <div className="modal-question">
                        <h1>{question}</h1>
                        <p>
                            <span className="name">
                            {user.displayName ? user.displayName : user.email}
                            </span>로 부터의 질문
                        </p>
                    </div>
                    <div className="modal-answer">
                       <textarea placeholder='답변을 작성해 주세요' type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)}/>

                    </div>

                    <div className="modal-Field">
                        <Input type="text" placeholder="6하 원칙으로 질문을 작성하세요" required value={input} onChange={(e) => setInput(e.target.value)}/>

                        <div className="modal-fieldLink">
                            <Link/>
                            <Input type="text" placeholder="url 링크만을 작성해 주세요" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)}/>

                        </div>


                    </div>

                    <div className="modal-buttons">
                        <button type="text" className="add" onClick={handleAnswer}> 답변달기 </button>

                        <button onClick={() => setOpenModal(false)}  className="can" >닫기</button>
                    </div>

                </Modal>
                </div>
                <div className="post-answer">
                    <p>
                        {
                           getAnswer.map(
                               ({id, answers})=>
                               (
                                   <p key={id} style={{position:'relative', paddingBottom: '5px'}}>
                                       {answers.answer}
                                       {id === answers.questionId && (<span>{answers.answer}<span style={{ position: "absolute",
                                            color: "yellowgreen",
                                            fontSize: "small",
                                            display: "flex",
                                            right: "0px"}}><span style={{color: "#b92b27"}}> {answers.user.displayName ? answers.user.displayName : answers.user.email}</span>{" "} {new Date(answers.timestamp?.toDate()).toLocaleString()} 에 작성됨에 작성됨</span></span>)}
                                   </p>
                               )
                           )
                        }
                    </p>
                </div>
                <img src={image} alt="라이언" />
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