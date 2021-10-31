/* 
155. Min Stack 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
*/


var MinStack = function() {
    this.items = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const current = { item: val },
          prev = this.items.slice(-1)[0];
    if(!this.items.length || val < this.items.slice(-1)[0].min)
        current.min = val;
    else
        current.min = prev.min;
    this.items.push(current);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items.slice(-1)[0].item;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.items.slice(-1)[0].min;
};

/*
9. Palindrome Number
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const str = String(x);
    let l = 0,
        r = str.length -1;
    while(l < r){
        if(str[l] !== str[r])
            return false;
        l++;
        r--;
    }
    return true;
};

/*
13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const dict = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;
    const splitted = s.split('');
    
    for(let i = 0; i < splitted.length; i++){
        if(splitted[i] === 'I'){
            if(splitted[i + 1] && (splitted[i + 1] === 'V' || splitted[i + 1] === 'X')){
               result += dict[splitted[i + 1]] - 1;
               i++;
            }else{
                result += dict[splitted[i]];
            }                
        }
        else if(splitted[i] === 'X'){
            if(splitted[i + 1] && (splitted[i + 1] === 'L' || splitted[i + 1] === 'C')){
               result += dict[splitted[i + 1]] - 10;
               i++;
            }else{
                result += dict[splitted[i]];
            }
        }
        else if(splitted[i] === 'C'){
            if(splitted[i + 1] && (splitted[i + 1] === 'D' || splitted[i + 1] === 'M')){
               result += dict[splitted[i + 1]] - 100;
               i++;
            }else{
                result += dict[splitted[i]];
            }
        }
        else{
            result += dict[splitted[i]];
        }
    }
    return result;
};

/*
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Time complexity - O(N * L), L - shortest string length, N - numbers of strings
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let shortest = strs[0];
    for(let i = 1; i < strs.length; i++){
        if(strs[i].length < shortest.length)
            shortest = strs[i];
    }
    let result = '';
    for(let i = 0; i < shortest.length; i++){
        for(let j = 0; j < strs.length; j++){
            if(strs[j][i] !== shortest[i])
                return result;
        }       
        result += shortest[i];
    }
    return result;
};

/*
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Time complexity - O(n), n - string length
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{')
            stack.push(s[i]);
        else if((s[i] === ')' && stack.slice(-1)[0] === '(') ||
                (s[i] === ']' && stack.slice(-1)[0] === '[') ||
                (s[i] === '}' && stack.slice(-1)[0] === '{'))
            stack.pop();
        else
            return false;
    }
    return stack.length === 0; 
};

/*
26. Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Time complexity - O(n ** 2).
Memory complexity - O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        const last = nums.lastIndexOf(nums[i]);
        if(last > i)
            nums.splice(i + 1, last + 1, ...nums.splice(last + 1));
    }
    return nums.length;
};

/*
27. Remove Element
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Time complexity - O(n/2).
Memory complexity - O(1).
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let l = 0,
        r = nums.length - 1;
    
    if(nums.length === 1 && nums[0] !== val)
        return 1;
    
    while(l < r){
        if(nums[l] === val && nums[r] !== val){
            [ nums[l], nums[r] ] = [ nums[r], nums[l] ];
            l++;
            r--;
        }
        else if(nums[l] === val && nums[r] === val){
            while(nums[r] === val && l < r)
                r--;
            if(nums[r] === val) break;
            [ nums[l], nums[r] ] = [ nums[r], nums[l] ];
            l++;
            r--;
        }
        else if(nums[l] !== val){
            l++;
        }
    }
    
    return nums[l] === val ? l : l + 1;
};

/*
28. Implement strStr()
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string.
*/


/* Slow solution 
Time complexity - O(N * M), N - haystack length, M - needle length.
Memory complexity - O(1).
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(haystack === '' && needle === '') 
        return 0;
    
    for(let i = 0; i < haystack.length; i++){
        let t = i,
            j = 0;
        while(j < needle.length){
            if(haystack[t] === needle[j]){
                t++;
                j++;
            }
            else break;
        }
        if(j === needle.length) return i;
    }    
    return -1;
};

/*
    Fast solution
Time complexity - O(N), N - haystack length.
Memory complexity - O(N).
*/
var strStr = function(haystack, needle) {
    if(!needle.length)
        return 0;
    
    const splitted = haystack.split(needle);
    return splitted.length > 1 ? splitted[0].length : -1;
};

/*
35. Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Time complexity - O(log n).
Memory complexity - O(1).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let l = -1,
        r = nums.length;
    while(r - l > 1){
        const mid = Math.floor((l + r)/2);
        if(nums[mid] === target)
            return mid;
        if(nums[mid] > target)
            r = mid;
        else
            l = mid;
    }
    return r;
};

/*
53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
Time complexity - O(n).
Memory complexity - O(n).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const dp = [nums[0]];
    let max = dp[0];
    
    for(let i = 1; i < nums.length; i++){
        dp.push(Math.max(dp[i - 1] + nums[i], nums[i]));
        if(dp[i] > max)
            max = dp[i];
    }
    return max;
};

/*
58. Length of Last Word
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

/*
    Slow solution

Time complexity - O(n).
Memory complexity - O(n).
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const splitted = s.trim().split(' ');
    return splitted[splitted.length - 1].length;
};

/*
    Fast solution

Time complexity - O(n).
Memory complexity - O(1).
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s = s.trim();
    let length = 0;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] !== ' ')
            length++;
        else
            break;
    }
    return length;
};

/*
66. Plus One
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Time complexity - O(n).
Memory complexity - O(1).
*/

var plusOne = function(digits) {
    return String(BigInt(digits.join('')) + BigInt(1)).split('');
};

/*
67. Add Binary
Given two binary strings a and b, return their sum as a binary string.

Time complexity - O(n).
Memory complexity - O(1).
*/

var addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};

/*
69. Sqrt(x)
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Time complexity - O(1).
Memory complexity - O(1).
*/

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};

/*
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Time complexity - O(n).
Memory complexity - O(n).
*/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const dp = new Array(n);
    dp[0] = 1;
    dp[1] = 2;
    
    for(let i = 2; i < n; i++)
        dp[i] = dp[i - 1] + dp[i - 2];
    
    return dp[n - 1];
};

/*
83. Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Time complexity - O(n).
Memory complexity - O(1).
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let prev = head,
        next;
    while(prev !== null && prev.next !== null){
        next = prev.next;
        while(next !== null && prev.val === next.val)
            next = next.next;
        prev.next = next;
        prev = prev.next;
    }
    return head;
};

/*
88. Merge Sorted Array
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Time complexity - O(K log K + N), K - nums1 length, N - nums2 length.
Memory complexity - O(1).
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    for(let i = m; i < nums1.length; i++)
        nums1[i] = nums2[i - m];
    
    nums1.sort((a, b) => a - b);
};

/*
94. Binary Tree Inorder Traversal
Given the root of a binary tree, return the inorder traversal of its nodes' values.
Time complexity - O(n + m), n - nodes, m - edges.
Memory complexity - O(n).
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    if(!root || !root.val) return [];
    const result = [];
    const rec = (root) => { 
        if(root.left)
            rec(root.left);
        result.push(root.val);
        if(root.right)
           rec(root.right);
    }
    rec(root);
    return result;
};

/*
168. Excel Sheet Column Title
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 

Time complexity - O(log n).
Memory complexity - O(1).
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    let result = '';
    while(columnNumber > 0){
        let sym = columnNumber % 26;        
        if(sym === 0)
            sym = 26;
        result = String.fromCharCode(sym + 64) + result;
        columnNumber = (columnNumber - sym)/26;
    } 
    return result;
};