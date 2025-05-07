import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <>
        {/* <h3>Child(자손) 콤포넌트</h3>
        <p>child 내용입니다.</p> */}
        <div>
          <ul>
            <li>이름 : {this.props.name}</li>
            <li>나이 : {this.props.age}</li>
            <li>취미 : {this.props.hobby}</li>
          </ul>
        </div>
      </> 
    );
  }
}

Child.defaultProps = {
  name:'000',
  age:'00',
  hobby:'000'
}

export default Child;