import React from 'react';

// 비구조화 할당(destructuring assignment): 객체에서 값을 추출하는 문법. 함수의 파라미터 부분에서도 사용 가능하다.
//const MyComponent = props => {
//    const { name, children } = props;
const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children 값은 {children}입니다.
            {/* 출력: 안녕하세요, 제 이름은 기본 이름입니다. \ children 값은 리액트입니다. */}
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent; 