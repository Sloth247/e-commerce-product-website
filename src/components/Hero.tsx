import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Hero.scss';

import { FreeMode, Navigation, Thumbs } from 'swiper';

import p1 from '../assets/image-product-1.jpg';
import p2 from '../assets/image-product-2.jpg';
import p3 from '../assets/image-product-3.jpg';
import p4 from '../assets/image-product-4.jpg';
import p1T from '../assets/image-product-1-thumbnail.jpg';
import p2T from '../assets/image-product-2-thumbnail.jpg';
import p3T from '../assets/image-product-3-thumbnail.jpg';
import p4T from '../assets/image-product-4-thumbnail.jpg';

import { useState } from 'react';

export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
  return (
    <>
      <Swiper
        loop={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-hero"
      >
        <SwiperSlide>
          <img src={p1} alt="product image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2} alt="product image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3} alt="product image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p4} alt="product image 4" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-thumbs"
      >
        <SwiperSlide>
          <img src={p1T} alt="product thumbnail 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p2T} alt="product thumbnail 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p3T} alt="product thumbnail 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={p4T} alt="product thumbnail 4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
