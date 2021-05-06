/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

    Example: 
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].


    https://leetcode.com/problems/two-sum/solution/
*/

// My Answer: Success
// Time complexity: O(n2)
// - For each element, we try to find its complement by looping through the rest of the array, which takes O(n) time. Therefore, the time complexity is O(n2)
// Space Complexity: O(1)

let nums = [5, 8, 1, 12, 9, 0, 19];
let target = 27;

const twoSums = (nums, target) => {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j <= nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				result.push(i, j);
			}
		}
	}
	console.log(result);
	return result;
};

twoSums(nums, target);

// Other User's solution
// - 'Runtime: 52 ms, faster than 100.00% of Js online submissions

const twoSums = (nums, target) => {
	const comp = {};
	for (let i = 0; i < nums.length; i++) {
		if (comp[nums[i]] >= 0) {
			return [comp[nums[i]], i];
		}
		comp[target - nums[i]] = i;
	}
};
