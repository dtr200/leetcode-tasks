// Array

/*
1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

// Time complexity - O(n)
// Memory complexity - O(n)

var twoSum = function(nums, target) {
    const store = new Set();
    const result = [];
    nums.forEach((num, i) => {
        const second = target - num;
        if(store.has(second)){
            result.push(i, nums.indexOf(second));
            return;
        }            
        store.add(num);
    });
    return result;
};
