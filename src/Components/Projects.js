import React from 'react';
import './styles/Projects.scss';
import task_manager from '../assets/task_manager.png';
import personal_finance from '../assets/personal_finance.jpg';
import chicken_fried from '../assets/chicken-fried.jpg';
import coming_soon from '../assets/coming_soon.jpg';
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

        <ul>
          <li>Collaboration</li>
          <li>Requirement Analysis</li>
          <li>MongoDB</li>
          <li>ExpressJS</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </ul>

      </section>

      <section className="project">
        <h3>Shanu Shahi</h3>
        <a href='https://shanu-kabab.vercel.app'>
          <img src={chicken_fried} alt='fried chicken' />
        </a>
        <p className='description'>This website showcases the information about Shanu Shahi restaurant. It is my first real world project.</p>

        <ul>
          <li>Requirement Analysis</li>
          <li>Bootstrap</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </ul>

      </section>

      <section className="project">
        <h3>Coming Soon</h3>
        <a href=''>
          <img src={coming_soon} alt='fried chicken' />
        </a>
        <p className='description'>A full stack app.</p>

        <ul>
          <li>MongoDB</li>
          <li>APIs</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </ul>

      </section>
    </div>
  </div>
  )
}
