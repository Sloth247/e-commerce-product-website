import MinusIcon from '../components/MinusIcon';
import PlusIcon from '../components/PlusIcon';
import Cart from './Cart';
import './Content.scss';

export default function Content({
  amount,
  setAmount,
  cartAmount,
  setCartAmount,
}: {
  amount: number;
  cartAmount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setCartAmount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCartAmount(cartAmount + amount);
    setAmount(0);
  };
  const handleInput = () => {
    if (amount < 1) {
      setAmount(0);
    } else {
      setAmount(amount - 1);
    }
  };
  return (
    <section className="content wrapper">
      <h2 className="content__brand">Sneaker Company</h2>
      <h1 className="content__product-name">Fall Limited Edition Sneakers</h1>
      <p className="content__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="content__price-container">
        <div className="content__current-price">
          <span>$125.00</span>
          <span>50%</span>
        </div>
        <span className="content__prev-price">$250.00</span>
      </div>
      <form className="content__form" onSubmit={handleSubmit}>
        <div className="content__input-container">
          <button type="button" className="minus-btn" onClick={handleInput}>
            <span className="sr-only" aria-labelledby="minus">
              decrease amount
            </span>
            <MinusIcon />
          </button>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            min="0"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button
            type="button"
            className="plus-btn"
            onClick={() => {
              setAmount(amount + 1);
            }}
          >
            <span className="sr-only" aria-labelledby="plus">
              increase amount
            </span>
            <PlusIcon />
          </button>
        </div>
        <button type="submit" className="cart-btn">
          <Cart />
          Add to cart
        </button>
      </form>
    </section>
  );
}
