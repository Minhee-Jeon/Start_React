import React, { Component } from 'react';

class Counter extends Component {
    //이렇게 하면 constructor() 선언 없이 state 초깃값을 설정할 수 있어요.
    state = {
        number: 0,
        fixedNumber: 0
    };
    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 때에는 this.state로
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={() => {
                     this.setState(
                         { number: number + 1 },
                            //setState로 값 업데이트 후 특정 작업을 하고 싶으면 두번째 인자로 콜백함수를 등록해 작업을 처리할 수 있어요.
                            () => {
                                console.log('방금 setState가 호출되었습니다');
                                console.log(this.state);
                            }
                         );
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;