import React from 'react';
import logo from './logo.svg';
import './App.css';


  import planet from './classes/planet'
  import PlanetInterface from './interfaces/planet';
  
  
function App() {
  
  
  
  
  
    // Test planet creation in App.tsx:
    const p: PlanetInterface = new planet(
      20, // mass
      3,  // radius
      'rgb(220, 50, 0)',  // color
      [1, 1],  // velocity
      [1, 1]   // position
    ); 
    
    console.log('planet', p);

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
