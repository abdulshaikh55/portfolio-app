import React, { useState } from "react";
import "./styles/Header.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // change nav color when scrolling
  const [scrolling, setScrolling] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 75) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={scrolling ? 'header active' : 'header'}>
      <div className="header-logo">
        <h1>Abdulfaiz Shaikh</h1>
      </div>

      <nav className='navbar'>
        <ul>
          <div className="closed">
            <CloseIcon
              className="close"
              onClick={showMenu}
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
            <AnchorLink href="#articles"><b>Articles</b></AnchorLink>
          </li>
          <li>
            <Link to="#main"><b>Contact</b></Link>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuBookOutlinedIcon className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
