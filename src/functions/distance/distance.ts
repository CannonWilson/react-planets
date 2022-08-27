import PlanetInterface from '../../interfaces/planet'

/**
  * @desc calculates the distance between two planets
  *       using the standard distance formula
  *       sqrt( (x2 - x1)^2 + (y2 - y1)^2 )
  * @param PlanetInterface p1 is the first planet
  * @param PlanetInterface p2 is the second planet
  * @return number distance between the planets
*/
export default function distance(p1: PlanetInterface, p2: PlanetInterface) {
	
	return Math.sqrt(
		(p2.position[0] - p1.position[0])**2 + 
		(p2.position[1] - p1.position[1])**2
	)
	
}