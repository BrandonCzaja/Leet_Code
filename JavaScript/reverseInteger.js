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

const reverse = (x) => {
	// Math.abs(): Returns the absolute value of a number (always positive)
	// parseInt: Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)

	// Wrap everything in parseInt to convert it to a number
	// Then get the absolute value of x (Math.abs(x))
	// Make it a string, split said string, reverse it, then join
	const reversedInt = parseInt(Math.abs(x).toString().split("").reverse().join(""));

	// This is how to solve the Constraints
	// If the value is greater than 2**31 return default value
	if (reversedInt > 2 ** 31) return 0;

	// Math.sign(): Returns either positive or negative 1 indicating the sign of a number passed into the argument. Essentially this is to get the negative values in the range.
	// Multiply the reversed integer by Math.sign() to get the correct sign on the number (positive or negative)
	return reversedInt * Math.sign(x);

	// NOTE: Technically I don't need the parseInt because when I compare the variable to 2**31 JS typecasts the variable as a number
};

reverse(1234);

/*
https://rishabh1403.com/posts/coding/leetcode/2019/11/leetcode-solution-of-reverse-integer-in-javascript

String-Based Reversal:
   - In ths method we will convert the number to a string and reverse it. We will also use some builtin methods in JS for string manipulation and mathematical operation.

   Steps:
    1. Take the absolute value of the number
    2. Convert to string
    3. Create a character array
    4. Reverse it
    5. Join it back to a string
    6. Parse the string to a number (not required in JS)



    Math.abs(): Returns the absolute value of a number (always positive)
	parseInt: Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems)

	Wrap everything in parseInt to convert it to a number
	Then get the absolute value of x (Math.abs(x))
    Make it a string, split said string, reverse it, then join
    
    NOTE: Technically I don't need the parseInt because when I compare the variable to 2**31 JS typecasts the variable as a number

    const reverse = (x) => {
	    const reversedInt = parseInt(Math.abs(x).toString().split("").reverse().join(""));

        // This is how to solve the Constraints
        // If the value is greater than 2**31 return default value

	    if (reversedInt > 2 ** 31) return 0;

        // Math.sign(): Returns either positive or negative 1 indicating the sign of a number passed into the argument. Essentially this is to get the negative values in the range.
        // Multiply the reversed integer by Math.sign() to get the correct sign on the number (positive or negative)

	    return reversedInt * Math.sign(x);
};

*/
