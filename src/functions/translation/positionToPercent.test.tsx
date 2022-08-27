import positionToPercent from './positionToPercent'

test('Translates position to percent correctly', () => {
	
	expect(positionToPercent([500, 500], 0, 0, 1000)).toBe([50, 50])
	
})