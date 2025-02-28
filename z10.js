function solution(str){
    if (str.length === 0) return [];
 
     if (str.length % 2 !== 0) {
         str += '_';
     }
     const pairs = [];
     for (let i = 0; i < str.length; i += 2) {
         pairs.push(str.slice(i, i + 2));
     }
 
     return pairs;
 }