import React from 'react';
import Child from './Child';

function Father(props){
  return (
    <>
      <h3>Father(부모) 콤포넌트</h3>
      {/* <div>{this.props.children}</div> */}

      <Child name='김철수' age='20' hobby='등산' />
      <Child name='홍길동' age='21' hobby='영화감상' />
      <Child />

      <hr />

      <ul>
        <li>children props는 부모 콤포넌트에서 내려주지 않아도 콤포넌트 자체적으로 가지고 있는 props</li>
        <li>모든 클래스 콤포넌트는 this.props.children을 사용할 수 있음.</li>
        <li>자손쪽에서 값을 받기 위해 'this.props.속성명'을 작성했지만 부모쪽에서 값을 설정하여 보내지 않은 경우는 'defaultProps'로 설정할 수 있다.</li>
        <li>개발자가 실수해서 값을 입력하지 않았을 경우</li>
        <li>추후 값을 삽입하려고 하는 경우</li>
      </ul>
      

    </>
  );
}

export default Father;
