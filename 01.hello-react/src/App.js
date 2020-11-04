import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
  //return <MyComponent name={3}>리액트</MyComponent>; // 2. Console: Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `MyComponent`, expected `string`.
}

export default App;
