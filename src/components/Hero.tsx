import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';

import '@splidejs/react-splide/css';

import './Hero.scss';

import { useEffect, useRef, useState } from 'react';
import HeroModal from './HeroModal';

export default function Hero() {
  const MainImages = [
    require('../assets/image-product-1.jpg'),
    require('../assets/image-product-2.jpg'),
    require('../assets/image-product-3.jpg'),
    require('../assets/image-product-4.jpg'),
  ];
  const thumbsImages = [
    require('../assets/image-product-1-thumbnail.jpg'),
    require('../assets/image-product-2-thumbnail.jpg'),
    require('../assets/image-product-3-thumbnail.jpg'),
    require('../assets/image-product-4-thumbnail.jpg'),
  ];

  const mainOptions: Options = {
    type: 'slide',
    perPage: 1,
    perMove: 1,
    gap: 0,
    autoWidth: false,
    pagination: false,
    isNavigation: true,
  };

  const mainRef = useRef<Splide>(null);
  const modalRef = useRef<Splide>(null);

  const [clickedThumb, setClickedThumb] = useState<number>();
  const [modalExpanded, setModalExpanded] = useState<boolean>(false);

  const handleThumbs = (id: number) => {
    if (mainRef.current) {
      mainRef.current.go(id);
    }
    setClickedThumb(id);
  };

  useEffect(() => {
    if (mainRef.current && modalRef.current && mainRef.current.splide) {
      modalRef.current.sync(mainRef.current.splide);
    }
  }, [mainRef.current]);

  const handleSlideClick = () => {
    setModalExpanded(true);
  };

  return (
    <>
      <section className="hero-container">
        <Splide
          options={mainOptions}
          ref={mainRef}
          onClick={handleSlideClick}
          aria-expanded={modalExpanded}
          aria-controls="hero-modal"
        >
          {MainImages.map((image, index) => (
            <SplideSlide key={index}>
              <img src={image} alt={`product image ${index}`} />
            </SplideSlide>
          ))}
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
      </section>
      {modalExpanded && (
        <HeroModal modalRef={modalRef} setModalExpanded={setModalExpanded} />
      )}
    </>
  );
}
