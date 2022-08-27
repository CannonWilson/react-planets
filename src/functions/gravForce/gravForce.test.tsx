import planet from '../../classes/planet'
import PlanetInterface from '../../interfaces/planet'
import gravForce from './gravForce'

test('Calculates gravitational force', () => {
	
	const testGravForce = 100;
	
	const p1: PlanetInterface = new planet(
		20, // mass
		3,  // radius
		[255, 255, 255],  // color
		[0, 0],  // velocity
		[1, 1]   // position
	); 
	const p2: PlanetInterface = {...p1};
	p2.mass = 80;
	p2.position = [0, 1];
	expect(gravForce(p1, p2, testGravForce))
		.toStrictEqual([-160000, 0]); // 100 (20 * 80) / 1**2
	
	
	const p3 = {...p1};
	p3.mass = 82;
	p3.position = [-200, -200];
	const p4 = {...p1};
	p4.mass = 75
	p4.position = [200, 200];
	
	// Total grav force = 100 (82 * 75) / sqrt(400^2 + 400^2)^2 = 1.921875
	// xForce = totalForce * cos(45°) * 1 = 1.921875 * 0.70710678118 = 1.35897084508
	// yForce = totalForce * sin(45°) * 1 = 1.921875 * 0.70710678118 = 1.35897084508
	const grav: number[] = gravForce(p3, p4, testGravForce)
	expect([
			Math.round(grav[0] * 100) / 100, 
			Math.round(grav[1] * 100) / 100
		])
		.toStrictEqual([1.36, 1.36]);
	
})