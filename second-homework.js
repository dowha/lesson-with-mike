// <조건문과 반복문>

/* 변수 하나를 선언하고, 문자열의 배열 하나를 만들어 대입해보세요.
 배열의 길이는 5보다 크게 하고, 문자열의 길이는 모두 다르게 만들어보세요.
 그리고 그 배열의 항목들을 모두 출력해보세요.
 */
let strAry = [
  "abcdefghijklmn",
  "abcdefghijklmnop",
  "abcdefghijklmnopqrst",
  "abcdefghijklmnopqrstuvwxyz",
  "abcdefghijklmnopqrstuvw"
];
let i = 0;
while (i < strAry.length) {
  console.log(strAry[i]);
  i++;
}

// 위의 내용을 다른 방법으로 해볼까요?
let strAry2 = [
  "bcdefghijklmn",
  "bcdefghijklmnop",
  "bcdefghijklmnopqrst",
  "bcdefghijklmnopqrstuvwxyz",
  "bcdefghijklmnopqrstuvw"
];
for (let i = 0; i < strAry2.length; i++) {
  console.log(strAry2[i]);
}
// 아래 모양을 가진 행렬을 만들어 변수에 대입해보고, 행렬의 행/열/항목을 출력해보세요. 예) “1행 3열은 3입니다." 1행을 모두 출력한 다음, 2행을 출력합니다.
const secondMatrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
];
i = 0;
j = 0;
for (i = 0; i < secondMatrix.length; i++) {
  for (j = 0; j < secondMatrix[i].length; j++) {
    // 지난 수업시간에 못물어본 것. 검색해서 보고 이해하긴 했는데... 그래도 설명 들으면 좋을 것 같아서.
    console.log(
      i + 1 + "행 " + (j + 1) + "열은 " + secondMatrix[i][j] + "입니다."
    );
  }
}
//9~12번은  for문과 while문으로 각각 해보세요.
// 배열을 하나 선언해보세요 (= 변수를 선언하고, 그 변수에 배열을 대입하세요). 그 배열의 길이가 3보다 크면 배열의 항목들을 "하나씩~" 출력하도록 해보세요.
//while
let threeAry = [1, 2, 3, 4, 5];
// [memo] 그냥 배열 하나 [1,2,3]식으로 써보란 뜻
// [memo] 그래서 if문이 먼저 나와야 함
if (threeAry.length > 3) {
  let i = 0;
  while (i < threeAry.length) {
    console.log(threeAry[i]);
    i++;
  }
}
//for
let threeAry2 = [6, 7, 8, 9, 10];
if (threeAry2.length > 3) {
  for (let i = 0; i < threeAry2.length; i++) {
    console.log(threeAry2[i]);
  }
}
// 배열들로 구성된 배열을 선언해보세요. (배열의 항목이 배열이 되는 식, 모두 숫자로) 각 배열의 항목인 배열의 길이가 5보다 크면, “길이가 5보다 큰 배열!”이라고 출력해보세요.
// [memo] 매트릭스 만들었듯이 만들어보라는 뜻
//while
let arrays_in_array = [[1, 2, 3], [4, 5, 6, 7, 8], [7, 8, 9, 10, 11, 12]];
i = 0;
while (i < arrays_in_array.length) {
  if (Object.keys(arrays_in_array[i]).length > 5) {
    console.log(
      "[" + arrays_in_array[i] + "]" + "는 " + "길이가 5보다 큰 배열!"
    );
  }
  i++;
}
//for
let arrays_in_array2 = [
  [3, 4, 5],
  [6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17]
];
for (let i = 0; i < arrays_in_array2.length; i++) {
  if (Object.keys(arrays_in_array2[i]).length > 5) {
    console.log(
      "[" + arrays_in_array2[i] + "]" + "는 " + "길이가 5보다 큰 배열!"
    );
  }
}
// 위의 배열에서, 각 배열의 항목인 배열의 길이가 3보다 작거나 같으면, 그 배열 (항목인 배열)의 항목들에 3을 더해보세요. 예) [[1, 2, 3], [1, 2, 3, 4]]이면, [[4, 5, 6], [1, 2, 3, 4]]가 되도록
//while
i = 0;
while (i < arrays_in_array.length) {
  if (Object.keys(arrays_in_array[i]).length <= 3) {
    Object.keys(arrays_in_array[i])[i] += 3;
  }
  i++;
}
console.log(arrays_in_array);
//for

// i = i + 1 <=> i += 1

//길이가 20 이상인 배열을 선언하고, 5번째 항목만 출력해보세요.
// [memo] 그냥 하나의 배열 [1,2,3,4,5,....] 식으로 만들기
//while
let longAry = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21
];

//for

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
// 0 1 2 0 1 2 0 1 2 0 1  2  0  1  2  0  1  2  0  1  2

// 10000 => 10,000
//
// let seperate_1000 = function(ns) {
//   for (let i = 0; i > ns.length; i--) {
//     if ( (ns.length - i - 1) % 3) {
//       ...
//     }
//   }
// }

//<함수>
// 기온과 습도를 입력하면, 날씨에 대해 설명을 출력하는 함수를 만들어보세요. (조건은 주석문 참고)
function weather(temperature, humidity) {
  // temperature: number;
  // humidity: number;
  let result = "";
  if (temperature < 5) {
    result += "cold";
  } else if (5 <= temperature && temperature < 25) {
    result += "mild";
  } else {
    result += "hot";
  }
  return result;
} //[memo] humidity는? // 두개를 동시에 어떻게 넣죠...?

// 3 < a < 7
// 3 < a && a < 7

console.log(weather(15, 72)); // "It’s mild and humid."
console.log(weather(25, 36)); // "It’s hot and dry."
console.log(weather(-5, 12)); // "It’s cold and arid."
/*
<실행 예제>

// temperature < 5: "cold",
// 5 <= temperature < 25: "mild",
// 25 <= temperature: "hot"

// humidity < 20: "arid",
// 20 <= humidity < 50: "dry",
// 50 <= humidity < 75: "humid"
// 75 <= humidity : "super humid"
*/

// 한 숫자를 넣으면 1부터 그 숫자까지의 합을 구해 반환하는 함수를 만들어보세요. (재귀적으로!)
function n_sum(n) {
  if (n == 0) {
    return 0;
  } else {
    return n + n_sum(n - 1);
  }
}
console.log(n_sum(4)); // 10
console.log(n_sum(6)); // 21

// 객체를 넣으면 key와 value를 하나씩 출력하는 함수를 만들어보세요. (hint: key들의 목록을 알면 쉽겠죠?)
function key_value(obj) {
  for (let i = 0; i < Object.keys(obj).length; i++) {
    return (
      "key: " + Object.keys(obj)[i] + "value: " + obj[Object.keys(obj)[i]] + ""
    );
  }
}

let obj_test = { name: "James", age: 15, dogs: ["Jody", "Bunny"] };
console.log(Object.keys(obj_test)[2]);
console.log(key_value(obj_test));
// "key: name"
// "value: James"
// "key: age"
// "value: 15"
// "key: dogs"
// "value: Jody,Bunny"

// 문자열로 된 배열을 넣으면 항목들을 하나씩 늘려 가면서 출력하는 함수를 만들어보세요 (예제를 참고).
function string_increment(string_array) {
  for (i = 0; i < string_array.length; i++) {
    return string_array[i] + "";
  }
}

let test_string_array = ["Grape", "Orange", "Melon", "Kiwi"];
console.log(string_increment(test_string_array));
// "Grape"
// "Grape, Orange"
// "Grape, Orange, Melon"
// "Grape, Orange, Melon, Kiwi"
/*
<실행 예제>

*/

// 문자열로 된 배열을 넣으면, 길이가 5보다 긴 문자열은 모두 대문자로, 그렇지 않으면 모두 소문자로 바꿔보세요. (반환하지 않고 값을 직접 바꾸기)
// function string_checker(string_array) {
//   for (let i = 0; i < string_array.length; i++){
//     if (string_array.length[i] > 5) {
//       string_array[i].toUpperCase();
//     } else {
//      string_array[i].toLowerCase();
//     }
//   }

// let test_string_array2 = ["Giraffe", "Bird", "Lion", "Tiger"];
// console.log(string_checker(test_string_array2));
// ["GIRAFFE", "bird", "lion", "tiger"]

// 가전 기구들의 전원 상태를 담은 객체가 있으면, 가전 기구의 이름을 넣어 해당 가전 기구의 전원 상태가 true/false 사이에서 전환되는 함수를 만들어보세요.
// let appliance = {
//   microwave: false,
//   fridge: false,
//   washer: false,
//   television: false
// };
// function power_toggle(app) {
//   if ((appliance.app = true)) {
//   }
// }

power_toggle("microwave");
console.log(appliance.microwave); // true

power_toggle("microwave");
console.log(appliance.microwave); // false
