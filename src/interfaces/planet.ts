import {Color} from '../types/color'

export default interface PlanetInterface {
	
	mass: number;
	radius: number;
	area: number;
	color: Color;
	velocity: number[];
	position: number[];
	
}