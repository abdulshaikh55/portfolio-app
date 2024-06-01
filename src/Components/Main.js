import React from "react";
import './styles/Main.scss';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material'
import anna from '../assets/anna.jpg'

export default function Main() {
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-img">
                    <img src={anna} alt="Abdulfaiz Candid pic by Aryan Shinde" />
                </div>
                <div className="main-content">
                    <div className="text">
                        <p>Hello Everyone!</p>
                        <h1 className="introduction">
                            I am Faiz
                        </h1>
                        <p>B. Tech CSE, Final Year</p>

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
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}