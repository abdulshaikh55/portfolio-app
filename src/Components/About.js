import React from "react";
import "./styles/About.scss";
import portfolio_main from '../assets/portfolio_main.jpg'

export default function About() {
  return (
    <div className="sections" id="about">
      <div className="sections-container">
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            I am a Final Year Computer Science and Engineering student studying
            in Dr. J. J. Magdum College of Engineering.
            <br />
            <br />
            My day is spent learning Programming & Software Engineering and
            applying those learning into making projects. My favorite
            programming language is Rust. I have done numerous small projects in
            Rust and a{" "}
            <a href="https://www.github.com/abdulshaikh55/task_manager/">
              Major project
            </a>{" "}
            also that I'm very proud of and handle on GitHub.
            <br />
            <br /> I also contribute to open source projects, mostly on my own
            and various Rust related repos. I think contributing to open source
            has taught me alot about the field of Software Engineering, as the
            maintainers of these repos are experienced and you get to learn a
            breadth of skills deeply, atleast in my experience.
            <br />
            <br /> I am also doing an internship in XYZ company. That internship
            is about web development. I like working in a small organization as the environment is intimate and friendly, and the work being done is fast and high quality.
          </p>
        </section>
        <section className="image">
          <img src={portfolio_main} alt="Abdulfaiz's pic by his brother" />
        </section>
      </div>
    </div>
  );
};

