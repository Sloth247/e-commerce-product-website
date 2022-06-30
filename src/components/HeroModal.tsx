import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import '@splidejs/react-splide/css';

import './HeroModal.scss';

import CloseIcon from './CloseIcon';

export default function HeroModal({
  modalRef,
  modalExpanded,
  setModalExpanded,
  clickedModalThumb,
  setClickedModalThumb,
  setClickedThumb,
}: {
  modalRef: React.RefObject<Splide>;
  modalExpanded: boolean;
  setModalExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  clickedModalThumb: number | undefined;
  setClickedModalThumb: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  setClickedThumb: React.Dispatch<React.SetStateAction<number>>;
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

  const handleModalThumbs = (id: number) => {
    if (modalRef.current) {
      modalRef.current.go(id);
    }
    setClickedThumb(id);
    // setClickedModalThumb(id);
  };
  const handleModalClose = () => {
    setModalExpanded(false);
  };

  const handleMove = () => {
    if (modalRef.current && modalRef.current.splide) {
      setClickedModalThumb(modalRef.current.splide.index);
      setClickedThumb(modalRef.current.splide.index);
    }
  };

  return (
    <div
      className={modalExpanded ? 'hero-modal active' : 'hero-modal'}
      id="hero-modal"
    >
      <div className="hero-modal__inner">
        <button className="close-btn" onClick={handleModalClose}>
          <CloseIcon />
        </button>
        <div className="hero-modal__slide-container">
          <Splide options={modalOptions} ref={modalRef} onMove={handleMove}>
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
                  onClick={() => handleModalThumbs(index)}
                  className={
                    clickedModalThumb === index
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
