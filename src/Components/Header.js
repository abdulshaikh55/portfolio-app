import React, { useState } from "react";
import "./styles/Header.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [scrolling, setScrolling] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 75) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={scrolling ? 'header active' : 'header'}>
      <div className="header-logo">
        <h1 className={isOpen ? 'is-open' : ''}>Abdulfaiz Shaikh</h1>
      </div>

      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <div className="closed">
            <CloseIcon
              className="close"
              onClick={toggleNavbar}
            ></CloseIcon>
          </div>
          <li>
            <AnchorLink href='#main'><b>Home</b></AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about"><b>About</b></AnchorLink>
          </li>
          <li>
            <AnchorLink href="#projects"><b>Projects</b></AnchorLink>
          </li>
          <li>
            <AnchorLink href="#miscellaneous"><b>Miscellaneous</b></AnchorLink>
          </li>
          <li>
            <Link to="#main"><b>Contact</b></Link>
          </li>
        </ul>
      </nav>

      <div className={isOpen ? "is-open" : 'changer'}>
        <MenuIcon className="menu" onClick={toggleNavbar} />
      </div>
    </div>
  );
};

export default Header;
