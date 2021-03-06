import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
  //컴포넌트를 페이지에 렌더링. react-dom 모듈을 불러와 사용 가능.
  //첫 번째 파라미터: 페이지에 렌더링할 내용을 JSX 형태로 작성한다.
  //두 번째 파라미터: 해당 JSX를 렌더링할 document 내부 요소를 설정한다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
