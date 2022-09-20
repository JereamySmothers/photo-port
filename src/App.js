import './App.css';
import React from 'react'
import About from './components/about';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
