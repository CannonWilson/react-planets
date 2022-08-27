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

test('Update position for planet', () => {
	
	const p: PlanetInterface = new planet(
		10, // mass
		3,  // radius
		'rgb(220, 50, 0)',  // color
		[2, 1],  // velocity
		[0.4, 1]   // position
	); 
	
	p.force = [7, 3];
	p.updatePositionAndResetForce(0.5); // Use timestep of 0.5s
	// s_x = 0.4 + (2 * 0.5) + (0.5 * (7 / 10)) * 0.5**2 = 1.4875
	// s_y = 1 + (1 * 0.5) + (0.5 * (3 / 10)) * 0.5**2 = 1.5375
	expect([
		Math.round(p.position[0] * 10000) / 10000, 
		Math.round(p.position[1] * 10000) / 10000
	]).toStrictEqual([1.4875, 1.5375]); 
	expect(p.force).toStrictEqual([0, 0]);
	
})