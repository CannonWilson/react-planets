import PlanetInterface from '../../interfaces/planet'
import distance from '../distance/distance'

export default function gravForce(p1: PlanetInterface, p2: PlanetInterface, gravConstant: number) {
	
	const totalGravForce: number = gravConstant * (p1.mass * p2.mass) / distance(p1, p2)**2
	
	if (totalGravForce < 0.0001) return [0, 0]
		
	const x1: number = p1.position[0]
	const x2: number = p2.position[0]
	const theta: number = Math.acos(Math.abs(x2 - x1) / distance(p1, p2) )
	const forceXSign: number = x1 - x2 > 0 ? -1 : 1;
	const forceYSign: number = p1.position[1] - p2.position[1] > 0 ? -1 : 1;
	const forceX: number = totalGravForce * Math.cos(theta) * forceXSign
	const forceY: number = totalGravForce * Math.sin(theta) * forceYSign
	return [forceX, forceY]
	
}