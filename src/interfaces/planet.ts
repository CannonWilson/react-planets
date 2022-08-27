export default interface PlanetInterface {
	
	mass: number;
	radius: number;
	area: number;
	color: number[];
	force: number[];
	velocity: number[];
	position: number[];
	updatePositionAndResetForce:(timeStep: number) => void;
	
}