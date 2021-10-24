/*
    Простые задачи с собеседований. Не LeetCode.
*/

/* Найти n-ое число Фибоначчи. Нахожу за O(n) */

function getFibonacci(num){
    let sum = [0, 1];
     for(let i = 2; i <= num; i++)
         sum.push(sum[i - 1] + sum[i - 2])

     return sum[num];
 }

 /* Посчитать гласные в слове. Считаю за O(2n) */

 function getVowels(str){
    const vowels = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
        };
    
        for(let i = 0; i < str.length; i++){
            if(vowels[str[i]] !== undefined)
                vowels[str[i]]++;
        }
    
        let result = 0;
        for(let key in vowels){
            result += vowels[key];
        }
        return result;
}

/* Являются ли слова анаграмами. Узнаю за O(2 * (n log n + 3n)) */

function anagram(word1, word2){
    const prepare = (word) => 
        word.toLowerCase()
            .split('')
            .sort()
            .join('');

    return prepare(word1) === prepare(word2);
}

/* fizzBuzz задача. Сделана за O(n) */

function fizzBuzz(num){
    for(let i = 1; i <= num; i++){        
        if(i % 3 === 0 && i % 5 === 0)
            console.log('fizzBuzz');
        else if(i % 3 === 0)
            console.log('fizz');
        else if(i % 5 === 0)
            console.log('buzz');
        else
            console.log(i);
    }
}

/* Палиндром типичным методом за O(3n) */
 
function palindrome(word){
    return word.split('').reverse().join('') === word;
}

/* Палиндром методом двух указателей. Сложность O(n/2) */

function palindrome2(word){
    let l = 0,
        r = word.length - 1;
    while(l < r){
        if(word[l] !== word[r])
            return false;

         l++;
         r--;
    }
    return true;
}

/* Палиндром с мусором в строке.
   Встречаю мусор (все, что не буквы латиницы) - переставляю указатель 
   наткнувшийся на хлам.
   Сложность O(n/2)
 */

function isPalindrome(str){
    let l = 0,
        r = str.length - 1;
    
    while(l < r){
        if(str.charCodeAt(l) < 65 || str.charCodeAt(l) > 122){
            l++;
            continue;
        }
        if(str.charCodeAt(r) < 65 || str.charCodeAt(r) > 122){
            r++;
            continue;
        }
        if(str[l].toLowerCase() !== str[r].toLowerCase())
            return false;
        l++;
        r--;
    }
    return true;
}

/*
    Разворот строки за O(n/2)
*/

function reverse(str){
    let l = 0,
        r = str.length - 1;
    const newStr = str.split('');
    while(l < r){
        [ newStr[l], newStr[r] ] = [ newStr[r], newStr[l] ];
        l++;
        r--;
    }
    return newStr.join('')
}

/*
    Разворот строки за O(n)
*/

function reverse2(str){    
    const result = ''
    for(let i = str.length - 1; i <= 0; i--)
        result += str[i];
    return result;
}

/*
    Разворот строки за O(3n)
*/

function reverse3(str){    
    return [...str].reverse().join('');
}