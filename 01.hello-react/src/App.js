import React from 'react'; //node_modules에 설치된 모듈을 import 구문으로 불러와 사용할 수 있다. Node.js에서는 import(X) require(O)로 패키지를 불러온다.
import logo from './logo.svg';
import './App.css';

function App() { //함수형 컴포넌트: App이라는 컴포넌트를 만들어 준다. 프로젝트에서 컴포넌트를 렌더링하면 함수에서 반환하는 내용을 나타낸다.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
