import React, { Component } from 'react';

class App extends Component() { 
  render(){
    const name = '리액트';
    return (
      <>
        {/* 주석은 이렇게 작성해요. */}
        <div className="react" // 시작 태그를 여러 줄로 작성하게 되면 여기에 주석을 작성할 수 있어요.
        >
          {name}
        </div>
        <input />
      </>
    );
  }
}

export default App;
