import React from 'react'; 

function App() { 
  //<div>나 <Fragment>나 <>로 감싸줘야 한다!
  // Virtual DOM에서 컴포넌트 변화를 감지할 때 효율성을 위해 컴포넌트 내부는 하나의 DOM트리 구조로 이뤄져야 한다는 규칙이 있다.
  // Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
  return (
    <> 
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
