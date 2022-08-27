import {Color} from '../types/color'

export default interface PlanetInterface {
	
	mass: number;
	radius: number;
	area: number;
	color: Color;
	force: number[];
	velocity: number[];
	position: number[];
	updatePositionAndResetForce:(timeStep: number) => void;
	
}