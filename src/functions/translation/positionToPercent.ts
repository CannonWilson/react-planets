export default function positionToPercent(position: number[], offset: number, maxX: number, maxY: number) {
	
	// if (planetWindowRef.current !== null) {
	// const planetWindowWidth = planetWindowRef.current.offsetWidth;
	// const planetWindowHeight = planetWindowRef.current.offsetHeight;
	
	// new_value = ( (old_value - old_min) / (old_max - old_min) ) * (new_max - new_min) + new_min
	// Half of the 
	const newX: number = ( (position[0] + 1000) / (2000) ) * maxX - offset
	const newY: number = ( (position[1] + 1000) / (2000) ) * maxY - offset
	
	return [(newX / maxX) * 100, (newY / maxY) * 100]
	//}
	// else {
	//   throw new Error('Failed to get planetWindowRef')
	// }
  }