import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <About/>
        <Contact/>
    </div>
  );
}

export default App;
