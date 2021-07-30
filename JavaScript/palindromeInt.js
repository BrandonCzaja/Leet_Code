/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

var isPalindrome = function (x) {
	if (typeof x !== "number") {
		console.log("Please enter a number");
		return;
	}
	let intString = x.toString();
	let reverseString = "";
	for (let i = intString.length - 1; i >= 0; i--) {
		reverseString += intString[i];
	}

	// console.log(intString, reverseString);
	if (intString == reverseString) {
		console.log("true");
		return true;
	}
	console.log("false");
	return false;
};

isPalindrome(121);
isPalindrome(123);
isPalindrome(11111111);
isPalindrome("Hi");
