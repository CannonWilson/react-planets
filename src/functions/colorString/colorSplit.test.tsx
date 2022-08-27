import colorSplit from './colorSplit'

test('Color split function works', () => {
	
	const example1 = "rgb(100, 80, 53)";
	expect(colorSplit(example1)).toStrictEqual([100, 80, 53]);
	
	const example2 = "rgb(53,0,  100)";
	expect(colorSplit(example2)).toStrictEqual([53, 0, 100]);
	
})