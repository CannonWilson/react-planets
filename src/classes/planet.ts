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
	
	updatePositionAndResetForce(timeStep: number) {
		
		// Motion equation: s = s0 + (v0 * t) + (0.5 * a * t^2)
		const deltaX: number = (this.velocity[0] * timeStep) + 0.5 * (this.force[0] / this.mass) * timeStep**2;
		const deltaY: number = (this.velocity[1] * timeStep) + 0.5 * (this.force[1] / this.mass) * timeStep**2;
		this.position[0] += deltaX;
		this.position[1] += deltaY;
		this.force = [0, 0];
		
	}

}