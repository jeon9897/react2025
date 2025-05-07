import React, { Component } from 'react';
import Kullyp from './Kullyp';
import Kullyc from './Kullyc';

class Main extends Component {
  render() {
    return (
      <>
      {/* 1. 메인 슬라이드 콤포넌트 */}
        <Kullyp />

      {/* 2. 이 상품 어때요? 콤포넌트 */}
        <Kullyc />

        <div>
          <h4>Swiper Slide 설치 방법</h4>
          <ol className="list1">
            <li>프로젝트 실행전  swiper설치하기
              <p>npm i swiper</p>  </li>
            <li>슬라이드 삽입하고자 하는 콤포넌트 문서 상단에 import
              <p>'swiper/modules';</p>
              <p>import 'swiper/css';</p>
              <p>import 'swiper/css/navigation';</p>
              <p>import 'swiper/css/pagination';</p>
              <p>import 'swiper/css/scrollbar';</p>
            </li>
            <li>삽입하고자 하는 콤포넌트 영역에 아래 옵션과 슬라이드 이미지 태그 추가 작성하여 완료함. (옵션은 각자 상황에 맞게 선택함)</li>
            <li>Swiper<br />
                  spaceBetween={50}<br />
                  slidesPerView={3}<br />
                  onSlideChange={() => console.log('slide change')}<br />
                  onSwiper={(swiper) => console.log(swiper)}<br />
                  <br />
                  SwiperSlideSlide 1/SwiperSlide<br />
                  SwiperSlideSlide 2/SwiperSlide<br />
                  SwiperSlideSlide 3/SwiperSlide<br />
                  SwiperSlideSlide 4/SwiperSlide<br />
                  ...
                /Swiper
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ol>

          <h4>Fontawesone 설치 방법</h4>
          <ol className="list1">
            <li>svg코어 추가 : 핵심패키지 설치
              <p>npm i --save @fortawesome/fontawesome-svg-core</p>
            </li>
            <li>사용하고 싶은 아이콘 패키지 추가
              <p>npm i --save @fortawesome/free-solid-svg-icons</p>
              <p>npm i --save @fortawesome/free-regular-svg-icons</p>
              <p>npm i --save @fortawesome/free-brands-svg-icons</p>
            </li>
            <li>react컴포넌트에 추가작성(react 구성요소)
              <p>npm i --save @fortawesome/react-fontawesome@latest</p>
            </li>
            <li>아이콘 추가
              <p>import ReactDOM from 'react-dom'</p>
              <p> FontAwesomeIcon  from '@fortawesome/react-fontawesome'</p>
              <p>import  byPrefixAndName  from '@awesome.me/kit-KIT_CODE/icons'</p>
              <p>import  faHouse  from '@awesome.me/kit-KIT_CODE/icons/classic/solid'</p>
            </li>
            <li>FontAwesomeIcon icon=faHouse </li>
            <li>FontAwesomeIcon icon=byPrefixAndName.fas['house']</li>
          </ol>
        </div>
      </>
    );
  }
}

export default Main;