import React from "react";
import './styles/Main.css';
import {GitHub, LinkedIn} from '@mui/icons-material'
import anna from '../assets/anna.jpg'
const Main = () => {
    return (
        <div className="main">
            <div className="main-container">
                <div className="main-content">
                    <div className="text">
                        <p>Hello Everyone!</p>
                        <h1>
                            I am Abdulfaiz
                        </h1>
                        <p>B. Tech CSE, Final Year</p>

                        <div className="icons">
                            <LinkedIn className="linkedin"></LinkedIn>
                            <GitHub className="github"></GitHub>
                        </div>

                        <div className="buttons">
                            <button>See Me</button>
                            <button>Hire me</button>
                        </div>
                        
                    </div>

                </div>
                <div className="main-img">
                    <img src={anna} alt="Abdulfaiz Candid pic by Aryan Shinde"/>
                </div>
            </div>
        
        </div>
    )
}

export default Main