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
	const p2: PlanetInterface = {...p1};
	p2.position = [0, 1];
	expect(distance(p1, p2)).toBe(1)
	
	const p3 = {...p1}
	p3.position = [-495, 720]
	const p4 = {...p1}
	p4.position = [404, -890];
	expect(Math.round(distance(p3, p4))).toBe(1844)
	
})