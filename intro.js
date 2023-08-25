// problem1 (very easy)
function solution(param1, param2) {
 return param1+param2;
}
// problem2 (easy)
function solution(year) {
 if(Math.floor(year/100)===year/100){
     return year/100;
 }else if(Math.floor(year/100)<year/100){
     return Math.floor(year/100)+1;
 }
}
// problem3(Okay)
function solution(inputString) {
let size = inputString.length;
if (size ===1){
    return true;
}
 for(let i=0; i<Math.floor(size/2); i++){
     if(inputString[i]!==inputString[size-i-1]){
         return false;
      }
    }
 return true;
}
