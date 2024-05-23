import React from "react";
import './styles/Section.css';
import rick from '../assets/rick_sanchez.jpg';

const Section = () => {
    return (
        <div className="sections">
            <div className="sections-container">
                <div className="section-image">
                    <img src={rick} alt="Rick Sanchez"/>
                </div>

                <div className="section-content">
                    <h2>About Me</h2>
                    <p>Web development</p>
                    <p>Rust</p>
                    <p>C++</p>
                    <p>C</p>
                    <p>Python</p>
                    <p>Java</p>
                    <p>Techincal Writing</p>
                </div>
            </div>
            Sanam
        </div>
    )
}

export default Section