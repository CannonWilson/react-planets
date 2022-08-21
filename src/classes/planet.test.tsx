import planet from './planet'
import PlanetInterface from '../interfaces/planet'

test('Create and update new planet', () => {
	
  const p: PlanetInterface = new planet(
    20, // mass
	3,  // radius
	'rgb(220, 50, 0)',  // color
	[1, 1],  // velocity
	[1, 1]   // position
  ); 
  
  expect(p.mass).toEqual(20);
  expect(Math.round(p.area)).toEqual(28);
  p.mass = 40;
  expect(p.mass).toEqual(40);
  
});
