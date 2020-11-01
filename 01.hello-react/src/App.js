import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name="React" />; //출력: 안녕하세요, 제 이름은 React입니다.
  //return <MyComponent />;   //출력: 안녕하세요, 제 이름은 입니다.
}

export default App;
