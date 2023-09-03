/***The Journey Begins***/
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
/***********Edge of the Ocean************/
//problem1
function solution(inputArray) {
    let maxP = inputArray[0]*inputArray[1];
 for (let i =1; i<inputArray.length-1; i++){
     if(inputArray[i]*inputArray[i+1]>maxP){
         maxP = inputArray[i]*inputArray[i+1];
     }
 }
 return maxP;
}
//problem2
function solution(n) {
    if(n===1){
        return 1;
    }
 
     return solution(n-1) + 4*(n-1);
}
//problem3
function solution(statues) {
 const sortedArray = statues.sort((a,b)=>a-b);
 let num = 0;
 for(let i=0; i<sortedArray.length-1; i++){
     if((sortedArray[i+1]-sortedArray[i])!==1){
         num = num + (sortedArray[i+1]-sortedArray[i]-1);
     }
 }
 return num;
}
//problem4
function solution(sequence) {
  let count = 0;
  for(let i=0; i<sequence.length; i++){
    if(sequence[i]<=sequence[i-1]) {
      count++
      if(sequence[i]<=sequence[i-2]&&sequence[i+1]<=sequence[i-1]){
        return false;
      }
    }
  }
   return count<=1
}
//Alternate solution to problem3(myjinxin2015’s solution but i loved his solution)
function solution(seq) {
  var bad=0
  for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
    bad++
    if(bad>1) return false
    if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
  }
  return true
}
//problem5(haven’t solved it yet)
/*********Smooth sailing***********/
//problem9
function solution(inputArray) {
 let longestStringSize = inputArray[0].length; 
 let subArray = [];
 
 for(let i=1; i<inputArray.length; i++){
     if(inputArray[i].length >longestStringSize){
          longestStringSize = inputArray[i].length;
        }
  }
  for(let j=0; j<inputArray.length; j++){
         if(inputArray[j].length===longestStringSize){
         subArray.push(inputArray[j]);
        }
    }
  return subArray;
}
//problem10
function solution(s1, s2) {
    let count = 0;
    let freq = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let j = 0; j < s2.length; j++) {
        if (freq[s2.charCodeAt(j) - 'a'.charCodeAt(0)] > 0) {
            count++;
            freq[s2.charCodeAt(j) - 'a'.charCodeAt(0)]--;
        }
    }

    return count;
}
//problem11
function solution(n) {
    n = n.toString();
    const halfIndex = (n.length / 2) - 1;
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i <= halfIndex; i++) {
        firstSum += parseInt(n[i]); // Convert character to integer
    }

    for (let j = halfIndex + 1; j < n.length; j++) {
        secondSum += parseInt(n[j]); // Convert character to integer
    }

    return firstSum === secondSum;
}
//problem12

//problem13

//problem14(very easy)
function solution (a){
    let sumOne=0;
    let sumTwo=0;
    for(let i=0; i<a.length; i++){
        if(i%2==0){
            sumOne += a[i]; 
        }else{
            sumTwo += a[i]
        }
    }
    return [sumOne, sumTwo];
}
//problem15






