/*

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/

// Helpful explanation: https://dev.to/urfan/leetcode-roman-to-integer-with-javascript-1g3n

const a = "III";
const b = "IV";

const d = "LVII";
const e = "MCDVI";
const f = "LIV";

const romanToInt = (s) => {
	// Step 1: Create a variable to hold the sum and return it
	let result = 0;

	// Step 2: Create roman numeral values
	const numerals = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};

	// Step 3-6:
	// Step 3: Loop through 's'
	for (let i = 0; i < s.length; i++) {
		// Step 4: Create a placeholder for the numerals[value] of the 's' iteration => 'I' === 1,
		let currentValue = numerals[s[i]]; // 1 1 1;
		// Step 5: Create a placeholder to track the value of the next roman numeral character
		let nextValue = numerals[s[i + 1]];

		// Step 6: Compare currentValue and nextValue based on where they are in the numeral and their value
		if (currentValue < nextValue) {
			result += nextValue - currentValue; // In Roman Numerals if a smaller number proceeds a larger number subtract the small from the large
			i++; // Then move on to the next number in the sequence
		} else {
			result += currentValue; // Otherwise just add the current value
		}
	}

	// Step 1b
	console.log(result);
};

romanToInt(a);
romanToInt(b);

romanToInt(d);
romanToInt(e);
romanToInt(f);
