import React from 'react'; 
import './App.css';

function App() { 
  const name = undefined;
  // return name;
  // Error: App(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
  
  return name || '값이 undefined입니다.'; 
  // 어떤 값이 undefined일 수도 있으면 이렇게 오류를 방자할 수 있어요.

  return <div>name</div>;
  // JSX 내부에서 undefined를 렌더링하는 것은 괜찮아요.

  return <div>{name || '리액트'}</div>;
  // name 값이 undefined일 때 보여주고 싶은 문구가 있으면 이렇게
}

export default App;
