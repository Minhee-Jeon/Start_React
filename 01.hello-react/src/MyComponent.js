import React from 'react';
import propTypes from 'prop-types';

class MyComponent extends Component {
    // 클래스형 컴포넌트에서 defaultProps와 propTypes를 설정할 때 class 내부에서 지정하는 방법도 있다.
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: propTypes.string,
        favoriteNumber: propTypes.number.isRequired
    }
    render() {
        const { name, favoriteNumber, children } = this.props;  // 비구조화 할당
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
    }

MyComponent.defaultProps = {
    name: '기본 이름'
};

MyComponent.propTypes = {
    name: propTypes.string,  
    favoriteNumber: propTypes.number.isRequired 
};

export default MyComponent; 