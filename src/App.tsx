import { useState } from 'react';
import './App.scss';
import CartModal from './components/CartModal';
import Content from './components/Content';
import Hero from './components/Hero';

import Navbar from './components/Navbar';

function App() {
  const [amount, setAmount] = useState<number>(0);
  // console.log(amount);
  const [cartAmount, setCartAmount] = useState<number>(0);
  const [cartExpanded, setCartExpanded] = useState<boolean>(false);
  return (
    <div className="App">
      <header className="header">
        <Navbar
          cartExpanded={cartExpanded}
          setCartExpanded={setCartExpanded}
          cartAmount={cartAmount}
        />
      </header>
      <main className="main">
        <Hero />
        <Content
          amount={amount}
          setAmount={setAmount}
          cartAmount={cartAmount}
          setCartAmount={setCartAmount}
        />
        {cartExpanded ? (
          <CartModal cartAmount={cartAmount} setCartAmount={setCartAmount} />
        ) : (
          ''
        )}
      </main>
      <footer className="footer">
        <div className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="https://www.frontendmentor.io/profile/Sloth247">
            Yuko Horita
          </a>
          .
        </div>
      </footer>
    </div>
  );
}

export default App;
