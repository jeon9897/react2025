import React, { useState } from 'react';

function Form4(props) {
  // const [name, setName] = useState('');
  // const [id_txt, setId] = useState('');

  const [formData, setFormData] = useState({
    name:'',
    id_txt:'',
  });

  // name 값 저장
  // const nameChange = (e) => {
  //   setName(e.target.value); // 오타 수정: taget → target
  // };

  // id_txt 값 저장
  // const id_txtChange = (e) => {
  //   setId(e.target.value);
  // };

  const nameChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prev)=>({
      ...prev, //es6 스프레드 연산자
      [name]:value
    }));
  }

  // 데이터 삭제
  const onDelete = () => {
      // setName('');
    // setId('');
    setFormData({
      name:'',
      id_txt:''
    })
  };

  return (
    <>
      <h4>4. 여러 개의 input 태그의 데이터 관리하기</h4>
      <ul>
        <li>e.target.value : 값에 접근하기</li>
        <li>e.target.name : name 속성값에 접근하기</li>
        <li>state를 사용하여 입력값 관리</li>
        <li>onChange 이벤트를 통해 상태 업데이트</li>
        <li>useState함수를 사용하여 상태 관리값을 한꺼번에 선언하고 관리 할 수 있다.</li>
      </ul>

      <form>
        <p>출력내용(이름) : </p>
        <input
          type="text"
          id="name"
          name="name"
          // value={name}
          value={formData.name}
          onChange={nameChange}
        />

        <p>출력내용(아이디) : </p>
        <input
          type="text"
          id="id"
          name="id_txt"
          // value={id_txt}
          value={formData.id_txt}
          // onChange={id_txtChange}
          onChange={nameChange}
        />

        <p>
          {/* 입력하신 이름은 '{name}'이고, 아이디는 '{id_txt}'입니다. */}
          입력하신 이름은 '{formData.name}'이고, 아이디는 '{formData.id_txt}'입니다.
        </p>

        <input type="button" value="다시쓰기" onClick={onDelete} />
      </form>
    </>
  );
}

export default Form4;