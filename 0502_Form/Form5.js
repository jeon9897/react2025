import React, {useState} from 'react';

function Form5(props) {
  const [formData, setFormData] = useState({
    name:'',
    age:null
  });

  //입력변경 처리
  const nameChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]:value
    }));
  };

  //전송처리
  const dataSubmit = (e) => {
    e.preventDefault(); //새로고침 방지
    const age = formData.age;
    if(!Number(age)){
      alert('나이는 숫자로 입력해야 합니다.');
    }else{  
      //여기에 전송 로직 추가 기능
      console.log('전송데이터 :', formData);
    }
  }


  return (
    <>
      <h4>5. 데이터 전송시 유효성 검사하기</h4>
      <p>* 이름, 나이 입력시 이름은 문자, 나이는 숫자로 입력해야 하되 나이가 숫자 데이터가 아니면 오류 메세지나 나올 수 있도록 해야함.</p>
      <p>* if문을 사용하여 state값 중 나이가 숫자가 아니면 'alert 메서드'로 경고창을 띄움</p>
      <p>* 나이는 숫자 데이터이기 때문에 Number형으로 변환해야 함.</p>

      <form onSubmit={dataSubmit}>
        출력 :
        <p><strong>이름 : {formData.name}</strong></p>
        <p><strong>나이 : {formData.age}</strong></p>

        <p>이름을 입력하세요 : 
          <input type="text" name="name" onChange={nameChange} value={formData.name} />
        </p>

        <p>나이를 입력하세요 : 
          <input type="text" name="age" onChange={nameChange} value={formData.age || ''} /> 
          {/* 숫자데이터 값이 있으면 표시 혹은 없으면 공백으로 처리 */}
        </p>

        <p>
          <button type="submit">전송하기</button>
        </p>
      </form>
    </>
  );
}

export default Form5;