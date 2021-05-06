/*

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 
Constraints:
-231 <= x <= 231 - 1

*/

// Steps
/*
    1. Turn the number into a string with .toString()
    2. Split the stringified number into an array with .split('')
    3. Reverse the array with .reverse('')
    4. Rejoin the array elements into a string with .join('')

    NOTE: You must use the '' inside each method calls

*/

var reverse = function (x) {
	x = x.toString().split("").reverse("").join("");
	console.log(x);
	return x;
};

reverse(1234);
