import React from 'react';

// function Child({name, age, hobby}){
const Child=({name, age, hobby})=>{
  return (
    <>
      {/* <h3>Child(자손) 콤포넌트</h3>
      <p>child 내용입니다.</p> */}
      <div>
        <ul>
          <li>이름 : {name}</li>
          <li>나이 : {age}</li>
          <li>취미 : {hobby}</li>
        </ul>
      </div>
    </> 
  );
}

//부모로 부터 전달받지 못한 콤포넌트는 기본값을 지정할 수 있다.
Child.defaultProps = {
  name:'000',
  age:'00',
  hobby:'000'
}

export default Child;