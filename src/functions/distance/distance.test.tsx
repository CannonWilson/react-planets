import planet from '../../classes/planet'
import PlanetInterface from '../../interfaces/planet'
import distance from './distance'

test('Calculates distance correctly', () => {
	
	const p1: PlanetInterface = new planet(
		20, // mass
		3,  // radius
		'rgb(255, 255, 255)',  // color
		[0, 0],  // velocity
		[1, 1]   // position
	); 
	const p2: PlanetInterface = new planet(
		20, // mass
		3,  // radius
		'rgb(255, 255, 255)',  // color
		[0, 0],  // velocity
		[0, 1]   // position
	); 
	expect(distance(p1, p2)).toBe(1)
	
	const p3: PlanetInterface = new planet(
		20, // mass
		3,  // radius
		'rgb(255, 255, 255)',  // color
		[0, 0],  // velocity
		[-495, 720]   // position
	); 
	const p4: PlanetInterface = new planet(
		20, // mass
		3,  // radius
		'rgb(255, 255, 255)',  // color
		[0, 0],  // velocity
		[404, -890]   // position
	);
	expect(Math.round(distance(p3, p4))).toBe(1844) 
	
})