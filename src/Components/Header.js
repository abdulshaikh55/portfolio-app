import React, { useState } from "react";
import "./styles/Header.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // New state for menu

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <h1>Abdulfaiz Shaikh</h1>
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul>
          <div className="closed">
            <CloseIcon
              className="close"
              onClick={showMenu}
            ></CloseIcon>
          </div>
          <li>
            {" "}
            <AnchorLink href='#main'>
              {" "}
              <b>Home</b>{" "}
            </AnchorLink>{" "}
          </li>
          <li>
            {" "}
            <AnchorLink href="#about">
              {" "}
              <b>About</b>{" "}
            </AnchorLink>{" "}
          </li>
          <li>
            {" "}
            <AnchorLink href="#projects">
              {" "}
              <b>Projects</b>{" "}
            </AnchorLink>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">
              {" "}
              <b>Articles</b>{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/">
              {" "}
              <b>Contact</b>{" "}
            </Link>{" "}
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
