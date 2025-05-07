import React from 'react';
import Main from './Main';

function Array1(props) {
  //1차원 배열
  //const names = ['홍길동','이순신','강감찬','유관순'];

  //2차원 배열
  const students = [
    {id:1, name:'홍길동'},
    {id:2, name:'이순신'},
    {id:3, name:'강감찬'},
    {id:4, name:'유관순'}
  ]

  //map함수로 기존 배열을 복사하여 새로운 배열로 출력한다.
  const studentList = students.map((student)=>(<Main key={student.id} id={student.id} name={student.name} />));

  return (
    <>
      <h3>반복 출력을 위한 배열 데이터 다루기</h3>
      <p>반복문의 종류, 문법을 익히고 데이터를 출력해 본다.</p>
      <ul>
        <li>for문</li>
        <li>while문</li>
        <li>do while문</li>
      </ul>
      <ol>
        <li>for문을 활용하여 데이터 반복출력 : for(초기값;조건식;증감식) 출력할 내용;</li>
        <li>map함수 - 배열을 순회해서 각 요소를 콜백함수로 적용하여 처리해 모은 새로운 배열을 반환하기 위한 함수. map함수에 전달되는 콜백함수는 '각 요소를 변환하여 새로운 배열로 매핑하는 역할을 한다. 매핑된 결과를 새로운 배열로 반환하기 때문에 이 함수의 이름이 'map'이다. 원본 배열은 변경하지 않으면서 해당 배열 요소에 대한 규칙적인 새로운 배열을 생성하고자 할 때 사용한다.</li>
        <li>배열 데이터 출력하기 - 배열 데이터를 가지고 다양한 방법으로 출력해보기</li>
      </ol>
      <p>문법: array.reduce(callback(accumulator, currentValue, index, array), initialValue)</p>

      <h4>* 부모 콤포넌트인 Main콤포넌트로 부터 내려받은 props값 출력하기</h4>
      
      {studentList}

      <ul>
        <li>map함수 사용시 key값을 설정해야 한다.</li>
        <li>이유는 요소의 리스트를 만들때, React에서는 콤포넌트를 렌더링 할 때 어떤 아이템이 변경되었는지 빠르게 감지하기 위해 사용한다.(변경, 추가, 삭제 등)</li>
        <li>만약 key가 설정되지 않는다면 가상 DOM을 순차적으로 비교하면서 감지를 하기 때문에 key가 없을 때보다 페이지 로딩속도가 느리다.</li>
        <li>map함수 인자로 전달되는 함수 내부의 콤포넌트 pops를 설정하는 것과 같이 작성한다.</li>
        <li>key값은 요소의 고유한 값이어야 한다. 배열 요소의 고유한 값을 사용하거나 index로 사용한다.(단, index는 배열 순서가 변경되면 index도 바뀌기 때문에 권장하지는 않는다.)</li>
      </ul>

    </>
  );
}

export default Array1;