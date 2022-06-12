import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import '@splidejs/react-splide/css';

import p1 from '../assets/image-product-1.jpg';
import p2 from '../assets/image-product-2.jpg';
import p3 from '../assets/image-product-3.jpg';
import p4 from '../assets/image-product-4.jpg';

import './HeroModal.scss';
import './Hero.scss';

import { useState } from 'react';
import CloseIcon from './CloseIcon';

export default function HeroModal({
  modalRef,
}: {
  modalRef: React.RefObject<Splide>;
}) {
  const modalOptions: Options = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: 0,
    autoWidth: false,
    pagination: false,
  };
  const thumbsImages = [
    require('../assets/image-product-1-thumbnail.jpg'),
    require('../assets/image-product-2-thumbnail.jpg'),
    require('../assets/image-product-3-thumbnail.jpg'),
    require('../assets/image-product-4-thumbnail.jpg'),
  ];

  const [clickedThumb, setClickedThumb] = useState<number>();

  const handleThumbs = (id: number) => {
    if (modalRef.current) {
      modalRef.current.go(id);
    }
    setClickedThumb(id);
  };

  return (
    <div className="hero-modal" id="hero-modal">
      <button className="close-btn">
        <CloseIcon />
      </button>
      <div className="hero-modal__slide-container">
        <Splide options={modalOptions} ref={modalRef}>
          <SplideSlide>
            <img src={p1} alt="product image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={p2} alt="product image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={p3} alt="product image 3" />
          </SplideSlide>
          <SplideSlide>
            <img src={p4} alt="product image 4" />
          </SplideSlide>
        </Splide>

        <ul className="thumbnails">
          {thumbsImages.map((thumbnail, index) => (
            <li key={index}>
              <button
                onClick={() => handleThumbs(index)}
                className={
                  clickedThumb === index
                    ? `thumbnails-btn active btn-${index}`
                    : `thumbnails-btn btn-${index}`
                }
              >
                <img src={thumbnail} alt="product thumbnail" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
