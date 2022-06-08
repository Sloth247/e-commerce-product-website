import p1t from '../assets/image-product-1-thumbnail.jpg';
import deleteIcon from '../assets/icon-delete.svg';
import './CartModal.scss';

export default function CartModal({
  cartAmount,
  setCartAmount,
}: {
  cartAmount: number;
  setCartAmount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleDelete = () => {
    setCartAmount(0);
  };
  return (
    <div className="cart-modal" id="cart">
      <h2 className="cart-modal__title">Cart</h2>
      <div className="cart-modal__container">
        {cartAmount === 0 ? (
          <p className="cart-modal__empty">Your cart is empty</p>
        ) : (
          <div className="cart-modal__checkout-container">
            <div className="cart-modal__product">
              <div className="cart-modal__product-img">
                <img src={p1t} alt="" aria-hidden="true" />
              </div>
              <div className="cart-modal__product-description">
                <h3 className="cart-modal__product-title">
                  Fall Limited Edition Sneakers
                </h3>
                <p className="cart-modal__product-price">
                  <span>$125.00 x {cartAmount}</span>
                  <span> ${(125 * cartAmount).toLocaleString('en-CA')}.00</span>
                </p>
              </div>
              <button className="delete-btn" onClick={handleDelete}>
                <img src={deleteIcon} alt="delete items" />
              </button>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
