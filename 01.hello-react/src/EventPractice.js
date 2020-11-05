import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: ''
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
                    onChange={
                     (e) => {
                         // console.log(e.target.value); //비동기적으로 이벤트 객체 참조 시 e.persist()
                         this.setState({
                             message: e.target.value
                         })
                     }   
                    }
                />
            </div>
        );
    }
}

export default EventPractice;