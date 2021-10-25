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