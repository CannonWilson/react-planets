import PlanetInterface from '../interfaces/planet'
import {Color} from '../types/color'

export default class planet implements PlanetInterface {
	
	area: number = this.radius**2 * Math.PI;
	force: number[] = [0, 0];
	
    constructor (
		public mass: number,
		public radius: number,
		public color: Color,
		public velocity: number[],  // [velocityX, velocityY]
		public position: number[],  // [positionX, positionY]
    ) {}
	
	// TODO: implement
	// updatePosition(timeStep: number) {
	// 	return 0
	// }

}