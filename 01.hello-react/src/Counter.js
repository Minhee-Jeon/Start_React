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
                    // this.setState({ number: number + 1 });
                    // this.setState({ number: this.state.number + 1}); // this.setState를 두번 사용해도 버튼 클릭마다 숫자가 1씩만 더해져요.
                        this.setState(prevState => { // 화살표 함수에서 값을 반환하고 싶으면 { }를 생략하면 돼요.
                            return {
                                number: prevState.number + 1
                            };
                        });
                        // 위 코드와 아래 코드는 완전히 똑같은 기능을 해요. 함수에서 바로 객체를 반환한다는 의미예요.
                        this.setState(prevState => ({
                                number: prevState.number + 1
                            }));
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;