// Задачи с leetcode.com/discuss

// Нормализация строки за O(n) по времени и O(n) по памяти

function normalize(str){
    let result = '',
        space = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            result += str[i];
            space = 0;
        }
        else if(str[i] === ' ' && space === 0){
            result += str[i];
            space++;
        }
    }
    return result;
}

console.log(normalize("good       string                   "));
// result - "good string"