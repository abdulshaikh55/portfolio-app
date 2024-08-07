import React from 'react';
import './App.css'
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Miscellaneous from './Components/Miscellaneous';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Miscellaneous />
      <Contact />
    </div>
  );
}

export default App;
