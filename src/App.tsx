import React, {useState, useEffect, useRef} from 'react'
import './App.css';


import planet from './classes/planet'
import PlanetInterface from './interfaces/planet';
import distance from './functions/distance/distance'
import positionToPercent from './functions/translation/positionToPercent'
  
function App() {
  
  const planetWindowRef = useRef<HTMLDivElement>(null);
  const SIMULATION_LENGTH = 10; // length of sim in seconds
  
  const [numPlanets, setNumPlanets] = useState(10);
  const [massMultiplier, setmassMultiplier] = useState(10);
  const [radiusMultiplier, setRadiusMultiplier] = useState(100);
  const [velocityMultiplier, setVelocityMultiplier] = useState(10);
  const [fps, setFps] = useState(1);
  
  const [minX, setMinX] = useState(0);
  const [maxX, setMaxX] = useState(1000);
  const [minY, setMinY] = useState(0);
  const [maxY, setMaxY] = useState(1000);
  
  // let timeElapsed = 0;
  
  const [planets, setPlanets] = useState<PlanetInterface[]>([]);
  
  useEffect(() => {
    
    
    for (let pIdx = 0; pIdx < numPlanets; pIdx++) {
            
      const newPlanet: PlanetInterface = new planet(
        massMultiplier * Math.random(), // mass
        radiusMultiplier * Math.random(),  // radius
        `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`,  // color
        [
          velocityMultiplier * (Math.random() * 2 - 1), // multiplier * x in [-1, 1)
          velocityMultiplier * (Math.random() * 2 - 1)
        ],  // velocity
        [
          [(Math.random() * (maxX - minX)) + minX, -1 * ((Math.random() * (maxX - minX)) + minX)][Math.floor(Math.random() * 2)], // x in [-maxX, -minX), [minX, maxX)
          [(Math.random() * (maxY - minY)) + minY, -1 * ((Math.random() * (maxY - minY)) + minY)][Math.floor(Math.random() * 2)]
        ]   // position
      ); 
      //console.log('added new planet: ', newPlanet)
      console.log('planets before: ', planets)
      setPlanets(oldArray => [...oldArray, newPlanet]);
    }
    
  }, [])
  
    
  
  
  
  // const planetIndicesMarkedForDeletion = new Set();
  
  function frame(w: number) {
    
    console.log('Frame function called for frame: ', w);
    
    // Check for collisions
    for (let p1Idx = 0; p1Idx < planets.length; p1Idx++) {
      for (let p2Idx = p1Idx + 1; p2Idx < planets.length; p2Idx++) {
        
        const dist: number = distance(planets[p1Idx], planets[p2Idx]);
        
        if (dist < 0.001) break; // Somehow checked the same planet
        
        if (dist < planets[p1Idx].radius + planets[p2Idx].radius){ // collision occurred

          planets[p1Idx].mass += planets[p2Idx].mass;
          planets[p1Idx].area += planets[p2Idx].area;
          planets[p1Idx].radius = Math.sqrt(planets[p1Idx].area / Math.PI); // Calculate radius based on new area
          // Combine color here
          
        }
        
      }
    }
    
    // Delete planets marked for deletion
    // setPlanets(planets.filter(p => !(planets.indexOf(p) in planetIndicesMarkedForDeletion)))
    
    // Calculate gravity for each planet 
    
    
    // Update positions
    
    
    
    return w
    
  }
  
  function playBtnPressed() {
    
    let interval: any = null;
    let framesCalculated = 0;
    
    interval = setInterval(() => {
      
      if (framesCalculated >= fps * SIMULATION_LENGTH) {
        clearInterval(interval);
      }
      else {
        frame(framesCalculated);
        framesCalculated++;
      }
      
    }, 1000 / fps);
    
    
  }
  
  return (
    <div className="App">
      <button onClick={playBtnPressed}>Play</button>
      <div 
        id="planet-window"
        ref={planetWindowRef}>
        {
          planets.map((p, pIdx) => 
          <div 
            style={{
              'backgroundColor': p.color,
              'width': Math.round(p.radius),
              'height': Math.round(p.radius),
              'left': `${positionToPercent(
                p.position, 
                p.radius, 
                planetWindowRef === null || planetWindowRef.current === null ? 
                  window.innerWidth: planetWindowRef.current.offsetWidth, 
                planetWindowRef === null || planetWindowRef.current === null ? 
                  window.innerHeight: planetWindowRef.current.offsetHeight
              )[0]}%`,
              'top': `${positionToPercent(
                p.position, 
                p.radius, 
                planetWindowRef === null || planetWindowRef.current === null ? 
                  window.innerWidth: planetWindowRef.current.offsetWidth, 
                planetWindowRef === null || planetWindowRef.current === null ? 
                  window.innerHeight: planetWindowRef.current.offsetHeight
              )[1]}%`
            }} 
            className='planet'
            key={`p${pIdx}`}
            id={`p${pIdx}`}>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
