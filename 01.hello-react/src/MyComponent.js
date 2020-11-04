import React from 'react';
import propTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            children 값은 {children}입니다.
            {/* 출력: 안녕하세요, 제 이름은 기본 이름입니다. \ children 값은 리액트입니다. */}
            <br />
            제가 좋아하는 숫자는 {favoriteNumber}입니다. 
            {/* console: Warning: Failed prop Type: The prop 'favoritNumber' is marked as required in 'MyComponent', but its value is 'undefined' in MyComponent */}
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: propTypes.string,  // 1. name 값은 무조건 string 형태로 전달해야한다는 의미
    favoriteNumber: propTypes.number.isRequired //3. propTypes를 지정하지 않았을 때 경고 메시지 띄우기
};

export default MyComponent; 