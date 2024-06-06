import React from 'react';
import './styles/Projects.scss';
import task_manager from '../assets/task_manager.png';
import personal_finance from '../assets/personal_finance.jpg';

export default function Projects() {
  return (<div className='projects' id='projects'>
    <div className='project-header'>
      <h2>Projects</h2>
    </div>

    <div className='projects-container'>

      <section className="project">
        <h3>Task Manager</h3>
        <a href='https://github.com/abdulshaikh55/task_manager'>
          <img src={task_manager} alt='Screenshot of Task Manager TUI' />
        </a>
        <p className='description'>This command line application is built with Rust and features a Terminal User Interface (TUI). It empowers users to efficiently manager their tasks in a fun and interactive way.</p>

        <div className='info'>
          The goal of this project was to learn a novel idea (Terminal User Interface) in a set amount of time. Not only did I learn how to make a TUI, but I also learned:
          <li>how to program layout and controls using ratatui</li>
          <li>how to connect the application to the terminal using crossterm</li>
          <li>how to efficiently develop a software</li>
          <li>how to set goals</li>
          <li>how to manage a project</li>
          <li>how to research tech from their documentations</li>
          <li>how to document a project</li>
          and most importantly, <span>I learned how to learn.</span>
        </div>

        <ul>
          <li>Rust</li>
          <li>crossterm</li>
          <li>ratatui</li>
          <li>Project Management</li>
          <li>Research</li>
          <li>Documentation</li>
          <li>Unit Testing</li>
        </ul>
      </section>

      <section className="project">
        <h3>Personal Finance Management Dashboard</h3>
        <a href='https://github.com/abdulshaikh55/Personal-Finance-Management'>
          <img src={personal_finance} alt='Screenshot of PFMD Webapp' />
        </a>
        <p className='description'>This project contributes to the development of innovative personal finance tools, potentially impacting personal financial literacy and fostering responsible decisions among users.</p>

        <div className='info'>
          The goal of this project was to learn the Web Development in a collaborative environment. Not only did I learn how to apply the Software Engineering Cycle, but I also learned:
          <li>how to work collaboratively with a team</li>
          <li>how to gather and analyze requirements</li>
          <li>how to design and develop a viable product</li>
          <li>how to efficiently manage a team project</li>
          <li>how to research and implement new technologies</li>
          and I also <span>learned how to work with others.</span>
        </div>

        <ul>
          <li>Collaboration</li>
          <li>Requirement Analysis</li>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </ul>

      </section>
    </div>
  </div>
  )
}
