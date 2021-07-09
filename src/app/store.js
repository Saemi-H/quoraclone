import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import questionReducer from '../features/questionSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    question: questionReducer,
  },
});

// Store ?
// state 값들을 저장하는 장소
// reducer에서 전달받은 action을 redux의 dispatch 함수를 사용해 store로 전달
// store createStore를 통해서 만들 수 있고
// createStore 안에 reducer 역할하는 함수가 들어가야한다 
