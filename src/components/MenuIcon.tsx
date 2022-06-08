import Hamburger from '../assets/icon-menu.svg';
import Close from '../assets/icon-close.svg';
import './Navbar.scss';

export default function MenuIcon({
  expanded,
  handleClick,
}: {
  expanded: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="menu-btn"
      aria-expanded={expanded}
      aria-controls="mobile-menu"
      onClick={handleClick}
    >
      <img
        src={expanded ? Close : Hamburger}
        alt="open mobile menu"
        className="menu-img"
      />
    </button>
  );
}
