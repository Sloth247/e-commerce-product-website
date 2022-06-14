import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import '@splidejs/react-splide/css';

import './HeroModal.scss';

import { useState } from 'react';
import CloseIcon from './CloseIcon';

export default function HeroModal({
  modalRef,
  setModalExpanded,
}: {
  modalRef: React.RefObject<Splide>;
  setModalExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const modalOptions: Options = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    gap: 0,
    autoWidth: false,
    pagination: false,
  };
  const ModalImages = [
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

  const [clickedThumb, setClickedThumb] = useState<number>();

  const handleThumbs = (id: number) => {
    if (modalRef.current) {
      modalRef.current.go(id);
    }
    setClickedThumb(id);
  };
  const handleModalClose = () => {
    setModalExpanded(false);
  };

  return (
    <div className="hero-modal" id="hero-modal">
      <div className="hero-modal__inner">
        <button className="close-btn" onClick={handleModalClose}>
          <CloseIcon />
        </button>
        <div className="hero-modal__slide-container">
          <Splide options={modalOptions} ref={modalRef}>
            {ModalImages.map((image, index) => (
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
        </div>
      </div>
    </div>
  );
}
