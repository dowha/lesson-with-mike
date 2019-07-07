// 1
function biggerNo(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
biggerNo(1, 2);
biggerNo(3, 2);

// 2
function biggerNoAbs(a, b) {
  if (Math.abs(a) > Math.abs(b)) {
    return a;
  } else {
    return b;
  }
}
biggerNoAbs(-3, 2);
biggerNoAbs(9, -2);
// 3
function maxMinArray(a, b, c) {
  return [Math.max(a, b, c), Math.min(a, b, c)];
}

maxMinArray(1, 2, 5);
maxMinArray(-5, 3, 1);

// 4
function maxMinObject(a, b, c) {
  return { max: Math.max(a, b, c), min: Math.min(a, b, c) };
}

maxMinObject(1, 2, 5);
maxMinObject(-5, 3, 1);

// 5
function celsToFahren(a) {
  return 1.8 * a + 32;
}

celsToFahren(30);
celsToFahren(-10);

// 6
function aTimesB(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}

aTimesB(10, 2);
aTimesB(10, 3);
aTimesB(10, 10);

// 7
function aFactorB(a, b) {
  if (b % a == 0) {
    return true;
  } else {
    return false;
  }
}

aFactorB(2, 10);
aFactorB(3, 10);
aFactorB(10, 10);

// 8
function wordsLength(a, b) {
  if (a.split(" ").length > b.split(" ").length) {
    return a;
  } else if (a.split(" ").length < b.split(" ").length) {
    return b;
  } else {
    return a;
  }
}

wordsLength("학교에 안 갔어", "학교에 가기가 싫어서 그랬어");
wordsLength("학교에 안 갔어", "학교에 가기가 싫었어");

// 9
function wordsLength2(a, b) {
  if (a.split(" ").length > b.split(" ").length) {
    return a;
  } else if (a.split(" ").length < b.split(" ").length) {
    return b;
  } else {
    if (a.length > b.length) {
      return a;
    } else {
      return b;
    }
  }
}
wordsLength2("학교에 안 갔어", "학교에 가기가 싫어서 그랬어");
wordsLength2("학교에 안 갔어", "학교에 가기가 싫었어");

// 10
// if문으로 charAt을 비교할 수도 있겠지만...
function wordChain(a, b) {
  return b.startsWith(a.charAt(a.length - 1));
}

wordChain("apple", "elephant");
wordChain("apple", "lion");

// 11
function numCiphers(a) {
  return a.toString().length;
}

numCiphers(254);
numCiphers(30112);

// 12
function tax(a) {
  return a * 0.4 * 0.22;
}

tax(100);
tax(500);

// 13
function multiplesBetween(a, b) {
  let multiplesResult = Math.floor(a / b);
  for (let i = 1; i < multiplesResult + 1; i++) {
    console.log(i * b);
  }
  return multiplesResult;
}

multiplesBetween(60, 5);
multiplesBetween(30, 7);

// 14
// 값이 다르게 나옴.
function distanceBetween([a, b], [c, d]) {
  return Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
}

distanceBetween([4, 5], [3, 2]);
distanceBetween([8, 5], [3, 7]);
5;

// 15
function middlePoint([a, b], [c, d]) {
  return [(a + c) / 2, (b + d) / 2];
}

middlePoint([4, 5], [3, 2]);
middlePoint([8, 5], [3, 7]);

// 16
//왠지 다른 방법을 원하셨을 것 같은데...
function maxAndMin(maxAndMinQ) {
  let maxResult = Math.max.apply(null, maxAndMinQ);
  let minResult = Math.min.apply(null, maxAndMinQ);
  return { max: maxResult, min: minResult };
}

maxAndMin([1, 2, 5]);
maxAndMin([-5, 2, 10, 7, 9, 50]);

// 17
function sumAll(sumAllQ){
  let sumAllResult = 0;
  for (let i = 0; i<sumAllQ.length; i++){
    sumAllResult += sumAllQ[i];
  }
  return sumAllResult
}

sumAll([1, 2, 5]);
sumAll([-5, 2, 10, 7, 9, 50]);

// 18
function averageAll(averageAllQ){
  let sumForAverage = 0;
  for (let i = 0; i<averageAllQ.length; i++){
    sumForAverage += averageAllQ[i]
  }
  return sumForAverage / averageAllQ.length ;
}

averageAll([1, 2, 5]);
averageAll([-5, 2, 10, 7, 9, 50]);

// 19
// ...
sumHereToThere(a, b){

  }

sumHereToThere(1, 10);
sumHereToThere(3, 9);

// 20
function checkIdPw(a, b){
  let id = "manager", password = "worker2019"; 
  if (a == id && b == password){
    return true;
  } else {
    return false;
  }
}
checkIdPw("manager", "worker2019")
checkIdPw("manager", "worker2017")

// 21
// is_login not defined?
function checkIdPw2(a, b){
  let id = "manager", password = "worker2019", is_login = false; 
if (a == id && b == password){
  is_login = true;
} else {
  is_login = false;
}}

checkIdPw2("manager", "worker2019"); console.log(is_login);
checkIdPw2("manager", "worker2017"); console.log(is_login); 

// 22
function addTen(addTenArr, n){
  for(let i=0; i<addTenArr.length-(n-1); i++){
    if (i%n == 0 ){
    addTenArr[i+(n-1)] += 10;}
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	addTen(arr, 3);
	console.log(arr);

// 23
function nameCheck(nameCheckObj, checkValue){
return nameCheckObj[checkValue]
}

let obj = {name: "John", age: 13};
nameCheck(obj, "name")

// 24
function changeName(changeNameObj, key, value){
  return changeNameObj[key] = value;
}

let obj = {name: "John", age: 13};
changeName(obj, "name", "Ty");
console.log(obj.name); 

// 25
function timesTable(a){
  let i = 1;
  while(i<10){
console.log(`${a} * ${i} = ${a*i}`)
i++;
  }
}

timesTable(3);

// 26
function divideArray(arr, a, b){
let matrixArray = []
for (let i = 0; i < a; i++){
  matrixArray[i] = arr.splice(0, b)
}
return matrixArray
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
divideArray(arr, 3, 4)

// 27
function divideArray2(arr, a, b){
  if(a * b == arr.length){
  let matrixArray = []
  for (let i = 0; i < a; i++){
    matrixArray[i] = arr.splice(0, b)
  }
  return matrixArray
  } else {
    return null;
  }
}

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  divideArray2(arr, 3, 4)
  divideArray2(arr, 3, 7)

// 28
function numbersCalculator(order, a, b){
let calculator = {add: a+b, subtrack: a-b, multiply: a*b, divide:a/b, remain: a%b, power: Math.pow(a, b), absolute: Math.abs(a), log: Math.log10(a)}
return calculator[order]
}

numbersCalculator("add", 1, 3)
numbersCalculator("multiply", 1, 3)
numbersCalculator("power", 4, 2)
numbersCalculator("absolute", -5)
numbersCalculator("log", 7)

// 29
// 이런 느낌인 것 같은데...
function arrayCalculator(requested_array){
let calculator = {
  sum:  function sumAll(requested_array){
    let sumAllResult = 0;
    for (let i = 0; i<sumAllQ.length; i++){
      sumAllResult += sumAllQ[i];
    }
    return sumAllResult
  },
  average: function averageAll(requested_array){
    let sumForAverage = 0;
    for (let i = 0; i<averageAllQ.length; i++){
      sumForAverage += averageAllQ[i]
    }
    return sumForAverage / averageAllQ.length ;
  }
}
  console.log(`전체 곱: ${}`)
  console.log(`전체 합: ${calculator[sum]}`)
  console.log(`전체 평균: ${calculator[average]}`)
  console.log(`최댓값: ${Math.max.apply(null, requested_array)}`)
  console.log(`최솟값: ${Math.min.apply(null, requested_array)}`)
}

arrayCalculator([5, 12, 3, 7, 9]);

// 30
// 29번 연장선...
