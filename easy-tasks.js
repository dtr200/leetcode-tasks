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
100. Same Tree
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Time complexity - O(n + m).
Memory complexity - O(1).
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(((!p && q) || (p && !q)) || p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*
101. Symmetric Tree
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
Time complexity - O(n + m).
Memory complexity - O(1).
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
 * @return {boolean}
 */
 var isSymmetric = function(root) {    
    const traverse = (l, r) => {
        if(!l && !r) return true;
        if((!l || !r) || l.val !== r.val) return false;
        
        return traverse(l.left, r.right) && traverse(l.right, r.left);
    }
    return traverse(root.left, root.right);
};

/*
104. Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Time complexity - O(n).
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
 * @return {number}
 */
 var maxDepth = function(root) {
    if(root === null) return 0;
       
    function calcDepth (vertex, num){
        if(vertex.left === null && vertex.right === null)
            return num;
        
        if(vertex.left && vertex.right)
            return Math.max(calcDepth(vertex.left, num + 1), calcDepth(vertex.right, num + 1));
        else if(vertex.left)
            return calcDepth(vertex.left, num + 1);
        else
            return calcDepth(vertex.right, num + 1);
    }
    return calcDepth(root, 1);
};

/*
125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Time complexity - O(n).
Memory complexity - O(1).
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let l = 0,
        r = s.length - 1;
    
    while(l < r){
        
        while(l < r && ((s[l].charCodeAt() < 48) ||
              (s[l].charCodeAt() > 57 && s[l].charCodeAt() < 65) || 
              (s[l].charCodeAt() > 90 && s[l].charCodeAt() < 97) ||
              (s[l].charCodeAt() > 122))){
            l++;
        }
        while(l < r && ((s[r].charCodeAt() < 48) ||
              (s[r].charCodeAt() > 57 && s[r].charCodeAt() < 65) || 
              (s[r].charCodeAt() > 90 && s[r].charCodeAt() < 97) ||
              (s[r].charCodeAt() > 122))){
            r--;
        }
        if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false;
        }
        r--;
        l++;
    }
    return true;
};

// bit more simplified solution

var isPalindrome = function(s) {
    const normalized = [];
    for(let i = 0; i < s.length; i++){
        if((s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57) ||
          (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) ||
          (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122))
            normalized.push(s[i].toLowerCase());
    }
    let l = 0,
        r = normalized.length - 1;
    while(l < r){
        if(normalized[l] !== normalized[r])
            return false;
        l++;
        r--;
    }
    return true;
};

/*
136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Time complexity - O(n).
Space complexity - O(n).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const s = new Set();
    nums.forEach(num => {
        if(s.has(num))
            s.delete(num);
        else
            s.add(num);
    })
    
    return Array.from(s)[0];
};

/*
160. Intersection of Two Linked Lists
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

Time complexity - O(n).
Space complexity - O(1).
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null)
        return null;
    
    let currentA = headA,
        currentB = headB;
    
    while(currentA !== currentB){
        currentA = currentA.next;
        currentB = currentB.next;
        
        if(currentA === currentB)
            return currentA;
        if(currentA === null)
            currentA = headB;
        if(currentB === null)
            currentB = headA;        
    }
    return currentA;
};


/*
167. Two Sum II - Input Array Is Sorted
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Time complexity - O(n log n).
Space complexity - O(1).
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {    
    const search = (num) => {
        let left = -1,
            right = numbers.length;
        
        while(right - left > 1){
            const mid = Math.floor((right + left)/2);
            if(num === numbers[mid])
                return mid;
            if(num > numbers[mid])
                left = mid;
            else if(num < numbers[mid])
                right = mid;
        }
        return -1;
    }
    
    for(let i = 0; i < numbers.length; i++){
        const secondNum = target - numbers[i];
        const secondPos = search(secondNum);
        if(secondPos !== -1 && secondPos !== i)
            return secondPos > i ? 
                [i + 1, secondPos + 1] : [secondPos + 1, i + 1];
    }
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

/*
169. Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Time complexity - O(n).
Memory complexity - O(n).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const map = {};
    nums.forEach(num => {
        !map[num] ? map[num] = 1 : map[num]++;
    });
    for(let key in map){
        if(map[key] > nums.length/2)
            return key;
    }
};

/*
171. Excel Sheet Column Number
Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

Time complexity - O(n).
Memory complexity - O(1).
*/

/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let result = columnTitle[0].charCodeAt() - 64;
    for(let i = 1; i < columnTitle.length; i++)
        result = result * 26 + columnTitle[i].charCodeAt() - 64;
    
    return result;
};

/*
202. Happy Number
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Time complexity - O(n).
Space complexity - O(n).
*/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {    
    const store = {};
    
    while(n !== 1){
        store[n] = true;
        n = String(n).split('').reduce((accum, num) => accum + num **2, 0);
        if(store[n]) return false;
    }
    
    return true;
};

/*
203. Remove Linked List Elements
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
Time complexity - O(n).
Space complexity - O(1).
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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    let prev, 
        node = head;
    
    while(head){
        if(head.val === val){
            prev ? 
                prev.next = head.next : 
                node = head.next;
        }
        else{
            prev = head;
        }
        head = head.next;
    }
    return node;
};

/*
205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Time complexity - O(n).
Space complexity - O(n).
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false; 
    
    const dict = {};
    const revDict = {};
    
    for(let i = 0; i < s.length; i++){
        if(!dict[s[i]])
            dict[s[i]] = t[i];
        else if(dict[s[i]] && dict[s[i]] !== t[i])
            return false;
    };
    for(let i = 0; i < t.length; i++){
        if(!revDict[t[i]])
            revDict[t[i]] = s[i];
        else if(revDict[t[i]] && revDict[t[i]] !== s[i])
            return false;
    };
    return true;
};

/*
206. Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Time complexity - O(n).
Space complexity - O(1).
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
 var reverseList = function(head) {
    if(head === null) return head;
    
    let root = head,
        prev = null,
        next;
    
    while(root){        
        next = root.next;
        root.next = prev;
        prev = root;
        root = next;
    }
    return prev;
};


/*
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Time complexity - O(n).
Memory complexity - O(1).
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    return !(Array.from(new Set(nums)).length === nums.length);
};

/*
219. Contains Duplicate II
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

/*
    First solution
    Time complexity - O(n * k).
    Space complexity - O(1).
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j <= i + k; j++){
            if(nums[i] === nums[j])
                return true;
        }
    }
    return false;
};

/*
    Second solution
    Time complexity - O(n).
    Space complexity - O(n).
*/

var containsNearbyDuplicate = function(nums, k) {
    const dict = {};
    
    for(let i = 0; i < nums.length; i++){        
        if(dict[nums[i]] !== undefined && i - dict[nums[i]] <= k)
            return true;
        else
            dict[nums[i]] = i;
    };
    
    return false;
};

/*
228. Summary Ranges
You are given a sorted unique integer array nums.

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Time complexity - O(n).
Space complexity - O(n).
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    const result = [];
    if(!nums.length)
        return nums;
    
    if(nums.length === 1){
        result.push(`${nums[0]}`);
        return result;
    } 
           
    
    let start = nums[0], 
        prev = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] - prev > 1){            
            prev === start ? result.push(`${prev}`) : 
                result.push(`${start}->${prev}`);
            start = nums[i];
        }
        prev = nums[i];
    }
    
    if(result[result.length - 1] !== nums[nums.length - 1])
        prev === start ? result.push(`${prev}`) : 
                result.push(`${start}->${prev}`);
    return result;
};

/*
231. Power of Two
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

Solution #1
Time complexity - O(n).
Memory complexity - O(1).
*/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if(n === 0) return false;
    while(n % 2 === 0)
        n = n/2;
    return n === 1;
};

/*
Solution #2
Time complexity - O(1).
Memory complexity - O(1).
*/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    return Number.isInteger(Math.log2(n))
};

/*
234. Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome.

Time complexity - O(n).
Space complexity - O(n).
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
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let toTail = '',
        toHead = '';
    
    let prev = null,
        next,
        root = head;
    while(root){
        toTail += root.val;
        next = root.next; 
        root.next = prev;
        prev = root;
        root = next;
    }
    
    [ prev, root ] = [ root, prev ];
    while(root){
        toHead += root.val;
        root = root.next;
    }
    
    return toTail === toHead;
};

/*
237. Delete Node in a Linked List
Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

Time complexity - O(n).
Memory complexity - O(1).
*/

// First solution

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    Object.assign(node, node.next)
};

// Second solution

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    let current = node,
        prev = current;
    
    while(current.next !== null){
        current.val = current.next.val;
        prev = current;
        current = current.next;
    }
    prev.next = null;
};

/*
448. Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Time complexity - O(n).
Memory complexity - O(n).
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const result = [];
    const map = {};
    nums.forEach(num => map[num] = true);
    for(let i = 1; i <= nums.length; i++){
        if(!map[i])
            result.push(i);
    }
    return result;
};