import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
    constructor(props) { // 컴포넌트의 생성자 메서드: 컴포넌트에 state를 설정
        super(props); // 필수! 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출
        
        this.state = { // state의 초깃값 설정하기. 컴포넌트의 state는 객체 형식이어야 한다.
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number } = this.state; // state를 조회할 때에는 this.state로
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정해요.
                    onClick={() => {
                    // this.setState를 사용해 state에 새로운 값을 넣을 수 있어요.
                    this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;