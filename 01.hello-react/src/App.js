import React from 'react'; 

function App() { 
  const name = '리액트';
  const style = {
    //Camel Case로 표기
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16 //단위 생략 시 px로 지정돼요.
  };
  return <div style={style}>{name}</div>;

  //미리 style객체를 선언하지 않고 바로 값을 지정하고 싶다면 {}; 안의 내용을 {style}에 위치시켜요.
}

export default App;
