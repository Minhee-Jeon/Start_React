import React from 'react';

const MyComponent = props => {
    return (
        <div>
            안녕하세요, 제 이름은 {props.name}입니다. <br />
            children 값은 {props.children}입니다.
            {/* 출력: 안녕하세요, 제 이름은 기본 이름입니다. \ children 값은 리액트입니다. */}
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

export default MyComponent; 