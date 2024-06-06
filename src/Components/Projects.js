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
        <a href='https://github.com/abdulshaikh55/task_manager'>
          <h3>Task Manager</h3>
          <img src={task_manager} alt='Screenshot of Task Manager TUI' />
          <p className='description'>This command line application is built with Rust and features a Terminal User Inteface (TUI). It empowers users to efficiently manager their tasks in a fun and interactive way.</p>
        </a>
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
        <a href='https://github.com/abdulshaikh55/Personal-Finance-Management'>
          <h3>Personal Finance Management Dashboard</h3>
          <img src={personal_finance} alt='Screenshot of PFMD Webapp' />
          <p className='description'>This project contributes to the development of innovative personal finance tools, potentially impacting personal financial literacy and fostering responsible decisions among users.</p>
        </a>
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
