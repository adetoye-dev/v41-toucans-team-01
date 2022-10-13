import { useState } from "react";
import "./PrimaryNav.css";
import searchIcon from "../../assets/search-icon.png";
const PrimaryNav = () => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState((prevNavState) => !prevNavState);
  };

  return (
    <header className="header">
      <div
        className="nav-menu"
        aria-controls="primary-nav"
        aria-expanded={navState}
        onClick={toggleNav}
      ></div>
      <nav className="primary-nav" id="primary-nav">
        <ul className="nav-list" data-visible={navState}>
          <li className="nav-list-item">
            <a href="">Lookbook</a>
          </li>
          <li className="nav-list-item">
            <a href="">Weather</a>
          </li>
          <li className="nav-list-item">
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>
      <div className="logo">Dress / Book</div>
      <div className="nav-search">
        <img src={searchIcon} />
      </div>
    </header>
  );
};

export default PrimaryNav;
