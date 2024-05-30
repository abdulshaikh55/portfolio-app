import React, { useState, useEffect } from "react";
import './styles/Header.scss';
import CloseIcon from '@mui/icons-material/Close';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Link } from "react-router-dom";
import Main from "./Main";

const Header = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // New state for menu

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const changeBackground = () => {
    if (window.scrollY > 0) { // Set scrolled to true if scrolled even a bit
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

    return (
        <div className={scrolled ? 'header active' : 'header'}>
            <div className="header-logo">
                <h1>Abdulfaiz Shaikh</h1>
            </div>

            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <div className="closed">
                        <CloseIcon className={active ? 'close active' : 'close'} onClick={showMenu}>
                        </CloseIcon>
                    </div>
                    <li> <Link to={Main}> <b>Home</b> </Link> </li>
                    <li> <Link to='/'> <b>About</b> </Link> </li>
                    <li> <Link to='/'> <b>Portfolio</b> </Link> </li>
                    <li> <Link to='/'> <b>Articles</b> </Link> </li>
                    <li> <Link to='/'> <b>Contact</b> </Link> </li>
                </ul>
            </nav>

            <div className="changer">
              <MenuBookOutlinedIcon className="menu" onClick={showMenu} />
            </div>
        </div>
    )
}

export default Header