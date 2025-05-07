import './App.css';
import './Main.css';
import Class0 from './0428/Class0'; //node.js설치와 react프로젝트 생성, 삭제, 실행, 종료방법
import Class1 from './0429/Class1'; //jsx문법
import Class2 from './0429/Class2'; //클래스형, 함수형 콤포넌트 작성법
import Class3 from './0430/Class3'; //리액트 배포방법
import Class4 from './0430/Class4'; //리액트 이미지 삽입방법
import KullyIndex from './exec_kully/KullyIndex'; //컬리실습
import Class5 from './0501_Event/Class5'; //props
import Class6 from './0501_Event/Class6'; //State
import Event from './0501_Event/Event'; //Event
import Form from './0502_Form/Form'; //폼태그
import Array1 from './0507_Array/Array1'; //배열데이터, json
import Yellow from './0507_Array/Yellow'; //노랑풍선 상품목록 출력하기


function App() {
  return (
    <>
      <header className="App">
        <h1 className="">리액트 학습하기</h1>
      </header>

      <main>
        <h2 className="title2">1일차 학습 0428 - 리액트 설치와 프로젝트 설치, 실행 방법</h2>
        <Class0 />

        <h2 className="title2">2일차 학습 0429 - 리액트 문법, 콤포넌트 개념, css적용방법</h2>
        <Class1 />
        <Class2 />

        <h2 className="title2">3일차 학습 0430 - 리액트 배포방법, 가상돔의 이해, 이미지 삽입 방법, 실습예제(마켓컬리)</h2>
        <Class3 />
        <Class4 />
        <KullyIndex />
        
        <h2 className="title2">4일차 학습 0501 - 콤포넌트(class, function) 2가지 작성법 이해, PROPS, EVENT, 실습예제(로그인폼)</h2>
        <Class5 />
        <Class6 />
        <Event />

        <h2 className="title2">5일차 학습 0502 - 폼태그와 값출력, 유효성검사, 실습예제</h2>
        <Form />

        <h2 className="title2">6일차 학습 0507 - 배열 데이터 다루기</h2>
        <Array1 />
        <hr />
        <Yellow />

        <p>실습예제 - 마켓컬리 메인콤포넌트에 '간편하게 준비하는 가족 밥상', 가정의달 선물 베스트셀러', '실시간 인기 랭킹' 콤포넌트 map함수로 구현하기</p>

        <h2 className="title2">7일차 학습 0508 - 배열데이터 복습</h2>
        {/* <Array />/  건너뛰기 */}
        {/* <Array2 /> */}
        {/* useRef()학습 */}
        {/* Student, StudentInput, StudentLIst,  배열데이터 입력, 출력, 삭제 */}

      </main>

      <footer className="footer">
        <p>하단 푸터영역</p>
        <address>
          Copyright&copy;2025 OOOO allrights reserved.
        </address>
      </footer>
    </>
  );
}

export default App;
