import CartIcon from '../assets/icon-cart.svg';
import Cart from './Cart';

export default function CartButton({
  cartExpanded,
  setCartExpanded,
  cartAmount,
}: {
  cartExpanded: boolean;
  setCartExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  cartAmount: number;
}) {
  const handleCartButton = () => {
    setCartExpanded(!cartExpanded);
  };
  return (
    <button
      className="cart-icon"
      aria-expanded={cartExpanded}
      aria-controls="cart"
      onClick={handleCartButton}
    >
      <Cart />
      {cartAmount ? (
        <div className="cart-notification">
          <span>{cartAmount}</span>
        </div>
      ) : (
        ''
      )}
    </button>
  );
}
