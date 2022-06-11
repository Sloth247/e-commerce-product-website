import MenuIcon from './MenuIcon';
import CartButton from './CartButton';

import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';

import './Navbar.scss';
import { useState } from 'react';

export default function Navbar({
  cartExpanded,
  setCartExpanded,
  cartAmount,
}: {
  cartExpanded: boolean;
  setCartExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  cartAmount: number;
}) {
  const urlHome = '#';
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <nav className="nav wrapper">
        <div className="nav__logo-container">
          <MenuIcon expanded={expanded} handleClick={handleClick} />
          <a href={urlHome} className="nav__logo">
            <img src={Logo} alt="sneakers" />
          </a>
          <ul
            className={expanded ? 'nav__menu active' : 'nav__menu'}
            id="mobile-menu"
          >
            <li className="nav__menu-items">
              <a href={urlHome}>Collections</a>
            </li>
            <li className="nav__menu-items">
              <a href={urlHome}>Men</a>
            </li>
            <li className="nav__menu-items">
              <a href={urlHome}>Women</a>
            </li>
            <li className="nav__menu-items">
              <a href={urlHome}>About</a>
            </li>
            <li className="nav__menu-items">
              <a href={urlHome}>Contact</a>
            </li>
          </ul>
          {expanded && <div className="menu-overlay"></div>}
        </div>
        <div className="nav__icon-container">
          <CartButton
            cartExpanded={cartExpanded}
            setCartExpanded={setCartExpanded}
            cartAmount={cartAmount}
          />
          <div className="nav__avatar-container">
            <img src={Avatar} alt="user" />
          </div>
        </div>
      </nav>
    </div>
  );
}
