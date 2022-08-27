/**
  * @desc splits a string on commas, whitespace, and parentheses
  * @param string str is a string with format 'rgb(100, 100, 100)'
  *        that gets split with a RegEx, filtered to remove the
  *        empty strings, and then mapped into integers.
  * @return string[] with format [100, 100, 100]
*/
export default function colorSplit(str: string) {
	
	return str.split(/[a-zA-z,()\s]/).filter(Boolean).map(Number);
	
}