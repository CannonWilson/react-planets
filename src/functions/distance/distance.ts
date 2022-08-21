import PlanetInterface from '../../interfaces/planet'

export default function distance(p1: PlanetInterface, p2: PlanetInterface) {
	
	return Math.sqrt(
		(p2.position[0] - p1.position[0])**2 + 
		(p2.position[1] - p1.position[1])**2
	)
	
}