import React from "react";
import './styles/Main.scss';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import anna from '../assets/anna.png'

export default function Main() {
  return (
    <div className="main" id="main">
      <div className="main-container">
        <div className="main-img">
          <img src={anna} alt="Abdulfaiz" />
        </div>

        <div className="main-content">
          <div className="text">
            <p>Hello Everyone!</p>
            <h1 className="introduction">
              I am Faiz
            </h1>
            <p classsName='text'>B. Tech CSE, Final Year</p>

            <div className="icons">
              <a href="https://www.linkedin.com/in/abdulshaikh55/" target="_blank" rel="noopener noreferrer">
                <LinkedIn className="linkedin" />
              </a>
              <a href="https://github.com/abdulshaikh55/" target="_blank" rel="noopener noreferrer">
                <GitHub className="github" />
              </a>
              <a href="https://www.instagram.com/abdul_shaikh.55/?hl=en" target="_blank" rel="noopener noreferrer">
                <Instagram className="instagram" />
              </a>

              <a href="mailto:abdulfaizshaikh55@gmail.com" rel="noopener noreferrer">
                <AlternateEmailIcon className="email" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}