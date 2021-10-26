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