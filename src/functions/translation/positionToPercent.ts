/**
  * @desc translates a position in 2d coordinate 
  *       space into a position (in percentages)
  *       based on the size of a container. Uses
  *       this linear conversion:
  *       new_val = ( (old_val - old_min) / 
  *                 (old_max - old_min) ) * 
  *                 (new_max - new_min) + new_min
  * @param number[] position is an array containing
  *        the x and y positions in coordinate space
  * @param number offset shifts the result left/right
  *        and up/down. This helps place a planet 
  *        with its center at the given 2d coordinates 
  *        rather than its top left corner.
  * @param number maxX is the width of the container
  * @param number maxY is the height of the container
  * @return number[] x and y components of the position
  *         as percentages
*/
export default function positionToPercent(position: number[], offset: number, maxX: number, maxY: number) {
	
	const newX: number = ( (position[0] + 1000) / (2000) ) * maxX - offset
	const newY: number = ( (position[1] + 1000) / (2000) ) * maxY - offset
	return [(newX / maxX) * 100, (newY / maxY) * 100]
	
  }