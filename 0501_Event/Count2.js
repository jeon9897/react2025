import React, { useState } from 'react';

// function Count2(props) {
  const Count2=(props)=>{

    //변수 초기값 지정
    const [num, setNum] = useState(1);

    //1씩 더하기 함수
    const onPlus1=()=>{
      setNum(num+1);
    }
/*
    == : 변수값이 일치하는지 여부
    === : 변수값, 데이터형식이 일치하는지 여부
*/ 
    //1씩 감소하는 함수
    const onMinus1=()=>{
      if(num===1){
        setNum(1);
      }else{
        setNum(num-1);
      }
    }
  return (
    <>
      <p>+, - 버튼을 클릭하면 숫자증가, 숫자 감소하는 state값을 작성하기</p>

      <div>숫자 출력 : <span className="num">{num}</span></div>
      <input type="button" value="+" onClick={onPlus1} className="btn" />
      <input type="button" value="-" onClick={onMinus1} className="btn" />
    </>
  );
}

export default Count2;