import React from 'react';
import './styles/Projects.scss';
export default function Projects() {
  return (<div className='projects' id='projects'>
    <div className='project-header'>
      <h2>Projects</h2>
    </div>

    <div className='projects-container'>

      <section className="project">
        <a href='https://github.com/abdulshaikh55/task_manager'> <h3>Task Manager</h3>
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
        <a href='https://github.com/abdulshaikh55/Personal-Finance-Management'>
          <h3>Personal Finance Management Dashboard</h3>
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
        <a href='https://shanu-kabab.vercel.app'>
          <h3>Shanu Shahi</h3>
        </a>
        <p className='description'>This website showcases the information about Shanu Shahi restaurant. It is my first real world project.</p>

        <ul>
          <li>Requirement Analysis</li>
          <li>Bootstrap</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
        </ul>
      </section>
    </div>
  </div>
  )
}
