import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
    }

    // 임의 메서드 만들기 : 기본 방식
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     });
    // }

    // handleClick(e) {
    //     alert(this.set.message);
    //     this.setState({
    //         message: ''
    //     });
    // }

    // 임의 메서드 만들기 : 바벨의 transform-class-properties 문법.
    //                  새 메서드를 만들 때마다 constructor를 수정하지 않아도 OK
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        alert(this.set.message);
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;