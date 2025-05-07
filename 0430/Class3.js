import React from 'react';

function Class3(props) {
  return (
    <>
      <h3 className="title3">01_리액트 배포방법</h3>
      <p>완성된 리액트 프로젝트의 배포 방법에 대해 이해하고 각각 실습하기</p>
      <p>xampp환경에서는 Apache서버를 실행 후 브라우저에서 localhost or 127.0.0.1을 입력하면 html, php문서를 볼 수 있다. 하지만 리액트 환경에서는 build라는 컴파일 과정을 거쳐 앱을 배포한다.</p>

      <br></br>
      
      <dl>
        <dt>* 웹서버 종류</dt>
        <dd>1. 로컬컴퓨터 http://localhost:3000/react2025</dd>
        <dd>2. 닷홈 서버</dd>
        <dd>3. 깃허브 레포지토리</dd>
      </dl>

      <br />

      <h4>1. 로컬에서 실행(React 프로젝트 환경)</h4>
      <p>vs code에서 'npm run build'하면 build폴더가 생성되면서 파일이 생성됨.</p>
      <p>브라우저 주소창에 localhost:3000 or 127.0.0.1</p>

      <h4>2. 닷홈 서버에 업로드하여 프로젝트 보기</h4>
      <p>아래 소스코드를 package.json에 'homepage":"./"을 추가하고 'npm run build'를 실행한 다음 ftp에 업로드 하여 확인한다.</p>
      <br />
      <pre>
        "development": [
              "last 1 chrome version",
              "last 1 firefox version",
              "last 1 safari version"
            ]
          ,
          "homepage": "./"
      </pre>

      <h4>3. github에 업로드하여 배포하기</h4>
      <p>github에 접속하여 레포지토리를 생성하여 아래와 같이 배포한다.</p>
      <ul>
        <li>레포지토리명 : react2025</li>
        <li>상세설명 : 리액트 학습목차</li>
        <li>ass a readme file체크함.</li>
        <li>git 레포지토리 주소 복사한다.</li>
        <li>https://github.com/jeon9897/react2025.git</li>
        <li>vs code 터미널에서 'npm run build'실행하면 'build'폴더가 생성됨.</li>
        <li>'build'폴더에서 마우스 오른쪽 메뉴 'git bash'실행</li>
        <li>git init(초기화)</li>
        <li>git status(상태확인)</li>
        <li>빨강색 글자 : 아직 파일, 폴더 추적전이라는 뜻으로 상태 관리 전을 뜻함.</li>
        <li>git add .  : 초록색 글자로 변경된것을 확인(상태관리 시작)</li>
        <li>git commit -m '메세지'</li>
        <li>git remote add origin '레포지토리 주소'</li>
        <li>git branch -m master main : 브런치명 변경</li>
        <li>git push origin +main : 메인 브런치에 업로드 실행</li>
      </ul>
      <p>* 업로드시 화면이 안나오면 아래 방법을 통해 해결해야 한다.</p>
      <p>* package.json파일을 열어서 추가 수정 -   "homepage": "https://레포지토리명/",</p>
      <p>* 파일 수정후에 다시 'npm run build' 실행하여 github에 업로드 해야 함.</p>
      
      <h3 className="title3">일반 DOM, 가상 DOM 차이 이해하기</h3>
      <p>html문서 참고</p>

      <h3 className="title3">콤포넌트의 개념과 이해</h3>
      <p>2일차 문서 참고</p>

    </>
  );
}

export default Class3;