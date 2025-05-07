import React, { Component } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Scrollbar, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

class Kullyp extends Component {
  render() {
    return (
      <>
        <main>
          <article className='slide'>
            <h2>이미지 슬라이드</h2>
            <Swiper 
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              autoplay={{delay:3000}}
              pagination={{clickable:true}}
              scrollbar={{draggable:true}}
              className="mslide"
            >
              <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide1.jpg`} alt="배너1" /></SwiperSlide>
              <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide2.jpg`} alt="배너2" /></SwiperSlide>
              <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide3.jpg`} alt="배너3" /></SwiperSlide>
              <SwiperSlide className="slide"><img src={`${process.env.PUBLIC_URL}/images/slide4.jpg`} alt="배너4" /></SwiperSlide>
            </Swiper>
          </article>

          <article>
            {this.props.children}
          </article>

        </main>
        
      </>
    );
  }
}

export default Kullyp;