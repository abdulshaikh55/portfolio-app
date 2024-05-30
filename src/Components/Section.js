import React from "react";
import './styles/Section.scss';

const Section = () => {
    return (
        <div className="sections">
            <div className="sections-container">
                <section className="about-me">
                    <h2>About Me</h2>
                    <p>
                        I am a Final Year Computer Science and Engineering student studying in Dr. J. J. Magdum College of Engineering. My day is spent learning web development and applying those learning into making projects. I am also doing an internship in XYZ company. that internship is also about web development.
                    </p>
                </section>
                <section className="skills">
                    <h2>My Skills</h2>
                    <p>Web development</p>
                    <p>Rust</p>
                    <p>C++</p>
                    <p>C</p>
                    <p>Python</p>
                    <p>Java</p>
                    <p>Techincal Writing</p>
                </section>
            </div>
        </div>
    )
}

export default Section