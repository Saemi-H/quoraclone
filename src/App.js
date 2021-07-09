import React, { useEffect } from 'react';
import './App.css';
import Quora from './quora/Quora';
import {useDispatch, useSelector} from 'react-redux'
// redux의 상태 값 조회위한 hook 
import {login, logout, selectUser} from './features/userSlice'
// userSlice.js -> state=>state.user.user;를 가져오므로
// 현재 state에 createSlice action에 따른 user의 상태 값을 넣어주는 것
import Login from './login/Login';
import { auth } from './firebase';
import { Photo } from '@material-ui/icons';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid:authUser.uid,
          Photo:authUser.photoURL,
          displayName:authUser.displayName,
          email: authUser.email,
        }))
        console.log(authUser)
      }else{
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
 
    <div className="App">
      {
        user ? (<Quora />) : (<Login/>)
      }
    </div>
   
  );
}

export default App;

