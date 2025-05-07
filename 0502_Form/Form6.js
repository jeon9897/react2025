import React, {useState} from 'react';

function Form6(props) {
  const [description, setDescription] = useState('리엑트에서 textarea박스에 기본값 설정하기');

  //상태변경 값 설정하기
  const [menu, setMenu] = useState('');

  //사용자가 선택목록에 메뉴를 선택하면 실행되는 함수
  const menuChange=(e)=>{
    setMenu(e.target.value);
    // console.log(menu);
    console.log(e.target.value);
  }
  
  //textarea변경 핸들러
  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <h4>6. textarea, select태그 사용하기</h4>
      <p>html태그에서는 textarea를 작성하고 안에 내용을 적지만 React jsx문법에서는 textarea value='함수명'으로 작성해야 한다.</p>

      <pre>
          *html문법    <textarea>내용적기</textarea>
          *jsx문법       textarea value=내용적기
      </pre>

      <textarea 
        name="content" id="content" cols="30" rows="10"
        value={description}
        onChange={handleChange}
      />

      <p>textarea에 입력한 내용을 출력하기 : {description} </p>

      <p>select 옵션 태그</p>
      <pre>
        *태그문법
        <select>
          <option value="">옵션선택</option>
          <option value="">옵션값1</option>
          <option value="">옵션값2</option>
          <option value="">옵션값3</option>
        </select>

        *jsx문법
        <select value="변수">
          <option value="">옵션선택</option>
          <option value="">옵션값1</option>
          <option value="">옵션값2</option>
          <option value="">옵션값3</option>
        </select>
        * select태그에 작성한 value속성에 작성한 값이 선택 됨.
      </pre>
      
      <h4>맛있는 점심메뉴를 선택하세요.</h4>
      <select value={menu} onChange={menuChange}>
        <option value="">메뉴선택</option>
        <option value="햄버거(맥도날드)">햄버거(맥도날드)</option>
        <option value="제육볶음">제육볶음</option>
        <option value="김치찌개">김치찌개</option>
        <option value="라볶이">라볶이</option>
        <option value="짜장명">짜장면</option>
        <option value="우동">우동</option>
        <option value="오므라이스">오므라이스</option>
        <option value="김밥">김밥</option>
      </select>

      <p>내가 선택한 오늘의 점심 메뉴는 '{menu}' 입니다.</p>

      <ul>
        <li>console.log(menu) - useState상태 업데이트가 비동기적으로 처리되기 때문에 이전 값이 출력됨.</li>
        <li>수정할 부분 : setMenu(e.target.value); console.log(menu)</li>
        <li>개선된 방법1 : console.log(e.target.value)</li>
        <li>개선된 방법2 : useEffect함수를 사용<br />
          {/* 1번줄 : import { useEffect } from 'react';
          중간코드에
          useEffect(()=>{
            console.log('선택한 메뉴:', menu);
          },[menu]); //사용자가 선택할 때 즉시 값 변경됨 */}
        </li>
      </ul>
    </>
  );
}

export default Form6;