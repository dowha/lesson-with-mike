// <자료형과 변수>

// 15 더하기 27
console.log(15 + 27);
// 17 빼기 33
console.log(17 - 33);
// 51 곱하기 2
console.log(51 * 2);
// 32 나누기 7
console.log(32 / 7);
// 77을 17로 나눈 나머지
console.log(71 % 17);
// 위의 5가지를 복합 대입 연산자로 해보세요.
let id1 = 15;
console.log((id1 += 27));
let id2 = 17;
console.log((id2 -= 33));
let id3 = 51;
console.log((id3 *= 2));
let id4 = 32;
console.log((id4 /= 7));
let id5 = 71;
console.log((id5 %= 17));
// 방금한 것을 문자열로 바꿔보세요.
id1 = id1.toString();
id2 = id2.toString();
id3 = id3.toString();
id4 = id4.toString();
id5 = id5.toString();
console.log(typeof id1, typeof id2, typeof id3, typeof id4, typeof id5);
console.log(id1, id2, id3, id4, id5);
// 자유롭게 문자열 하나를 변수에 대입해보세요.
const intro = "안녕하세요, 저는 김도화입니다."; // [memo] const 쓴 이유는?
console.log(intro);
// 그 문자열의 길이는?
console.log(intro.length);
// 그 문자열의 3번째 글자는 무엇인가요?
console.log(intro.charAt(2));
// 그 문자열의 마지막 글자를 숫자를 쓰지 않고 출력해보세요.
console.log(intro.charAt(intro.length - 1));
// 그 문자열에 “안녕"이라는 문자열이 포함되나요?
console.log(intro.includes("안녕"));
// 그 문자열의 5번째 글자부터 12번째 글자까지 출력해보세요.
console.log(intro.substring(4, 11));
// 문자열을 하나 더 만들어 변수에 대입해보고, 그 문자열과 첫번째 문자열을 합쳐보세요.
const outro = " 반갑습니다";
const dowha = intro + outro;
console.log(dowha);
// 방금한 것을 두 가지 다른 방법으로 해보세요.
const dowha2 = intro.concat(outro);
console.log(dowha2);
const dowha3 = "안녕하세요, 저는 김도화입니다." + " " + "반갑습니다.";
console.log(dowha3);
// 쉼표(,)로 단어들을 나열한 다음 배열로 바꿔보세요.
const cities = "부산, 서울, 포르츠하임, 요크, 방콕";
console.log(cities.split(", "));
// 쉼표(,)로 단어들을 나열한 다음, 단어의 개수를 세어보세요.
const colours = "빨강, 파랑, 노랑, 초록";
const coloursResult = colours.split(", ");
console.log(coloursResult.length);
// 배열을 하나 만들어 변수에 대입해 보세요
const idol = ["엑소", "소녀시대", "샤이니", "워너원", "세븐틴"];
console.log(idol);
// 그 배열의 길이를 계산해보세요.
console.log(idol.length);
// 그 배열의 2번째 항목을 다른 것으로 바꿔보세요.
const newIdol = idol.splice(1, 1, "여자친구");
console.log(idol);
// 다른 방법으로 해보세요.
delete idol[1];
idol[1] = "BTS"; // [memo] 이럴 때는 delete하지 말고, 바로 indexing 하고 해도 돼요.
//delete 연산자는 배열에서는 가급적 쓰지 말고, 객체에서만 쓰기를 권해요.
//그 자리가 비워지기 때문에!
//왜냐하면 배열에서 중간에 한 항목이 빠져버리면 그걸 위해 for문을 쓸 때 잘 되지 않을 수 있어요.
//아래 처럼 실행시키면 에러가 발생!!
// > let idol = ["엑소", "소녀시대", "샤이니", "워너원", "세븐틴"];
// undefined
// > delete idol[1]
// true
// > idol
// [ '엑소', <1 empty item>, '샤이니', '워너원', '세븐틴' ]
// > idol.length
// 5
// > for(let i = 0; i < idol.length; i++) console.log(idol[i].split());
// [ '엑소' ]
// TypeError: Cannot read property 'split' of undefined
// >
console.log(idol);
// 그 배열의 3번째 항목을 없애보세요.
delete idol[2]; // [memo] 마찬가지 이유로 사용하지 말고.
//이럴 때에는 splice를 쓰면 돼요.
//splice 문서 살펴보기 >> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log(idol);
// 그 배열의 2번째와 3번째 항목 사이에 다른 항목 3개를 넣어보세요.
idol.splice(2, 0, "아이오아이", "오마이걸", "아이즈원");
// 그 배열의 마지막에 한 항목을 넣어보세요.
idol.push("트와이스");
console.log(idol);
// 그 배열의 마지막 항목을 없애보세요.
idol.pop();
console.log(idol);
// 그 배열의 첫번째 자리에 한 항목을 넣어보세요.
idol.unshift("NCT");
console.log(idol);
// 그 배열의 첫번째 항목을 없애보세요.
idol.shift();
console.log(idol);
// 그 배열의 2번째부터 4번째 항목만 추출해보세요.
console.log(idol.slice(1, 4));
// 그 배열에 “포도"라는 항목이 포함되나요?
console.log(idol.includes("포도"));
// “사과" 라는 단어를 포함한 문자열의 배열을 만들어 변수에 저장해보세요.
const fruits = ["사과", "딸기", "포도", "수박", "참외"];
console.log(fruits);
// “사과"는 몇번째에 있나요?
console.log(fruits.indexOf("사과") + "번째");
// 방금 만든 배열을 | 기호로 구분하여 하나의 문자열로 만들어보세요. (shift+백슬래시)
console.log(fruits.join(" | "));
// 만들어본 두 배열을 합쳐보세요.
console.log(idol.concat(fruits));
// 아래 모양을 가진 행렬을 배열로 표현해보세요. (행을 먼저 써보세요.)
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
];
console.log(matrix);
const matrixSecond = new Array();
matrixSecond[0] = new Array();
matrixSecond[1] = new Array();
matrixSecond[2] = new Array();
matrixSecond[3] = new Array();
matrixSecond[4] = new Array();
matrixSecond[0] = [1, 2, 3, 4];
matrixSecond[1] = [5, 6, 7, 8];
matrixSecond[2] = [9, 10, 11, 12];
matrixSecond[3] = [13, 14, 15, 16];
matrixSecond[4] = [17, 18, 19, 20];
// [memo] 열을 먼저 쓰라는 건 1, 5, 9, 13, 17이 먼저 오게
// [memo] 행을 먼저 쓰는지, 열을 먼저 쓰는지는 나중에 매트릭스를 활용한 라이브러리 같은 걸 쓸 때 중요할 수 있음
console.log(matrixSecond);
// 위의 모양을 가진 행렬을 배열로 표현해보세요. (열을 먼저 써보세요.)
console.log("*잘 모르겠습니다.");
// name 이라는 key를 포함하는 객체를 하나 만들어 변수에 대입해보세요.
const dowhaKim = { name: "Dowha Kim", age: 29, location: "Bangkok" };
console.log(dowhaKim);
// 그 객체의 name 이라는 key의 value를 출력해보세요.
const name = dowhaKim.name; //[memo]왜 변수를 선언했는지?
console.log(name);
// 그 객체의 name 이라는 key의 value를 다른 것으로 바꿔보세요.
dowhaKim.name = "Fado";
console.log(dowhaKim);
// 그 객체에는 어떤 key들이 있나요?
console.log(Object.keys(dowhaKim));
// 그 객체에는 어떤 value들이 있나요?
// [memo] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor
console.log(
  dowhaKim[Object.keys(dowhaKim)[0]],
  dowhaKim[Object.keys(dowhaKim)[1]],
  dowhaKim[Object.keys(dowhaKim)[2]]
);
// 그 객체에 key와 value의 쌍은 몇개가 있나요?
const dowhaKimNo = Object.keys(dowhaKim).length;
console.log(dowhaKimNo);
// 같은 key들을 가진 객체를 두 개 더 만들고, 세 개의 객체를 하나의 배열로 만들어 변수에 대입해보세요.
const mikeKim = { name: "Mike Kim", age: 28, location: "USA" };
const mintPark = { name: "Mint Park", age: 27, location: "Seoul" };
const myLabour = [dowhaKim, mikeKim, mintPark];
console.log(myLabour); //[memo] 영국 나타나네...
// 방금 만든 객체들의 배열의 2번째 항목의 name 이라는 key의 value를 출력해 보세요.
console.log(myLabour[1].name);
// 5개의 key를 가진 객체를 하나 만들어 변수에 대입해 보는데, 모든 key의 value가 다른 자료형이 갖도록 해보세요.
const obj = {
  name: "Dowha Kim",
  age: 29,
  livingOverseas: true,
  universities: ["Yonsei", "York"],
  socialMedia: { twitter: "fadokim", facebook: "dowha_kim" }
};
console.log(obj);
// 그중 배열을 value로 갖는 key가 있을텐데, 그 항목의 배열의 길이를 출력해보세요.
console.log(obj.universities.length);

// <조건문과 반복문>

// 변수 하나를 선언하고, 숫자를 대입해 보세요. 그리고 그 변수가 5보다 크면, “5보다 큽니다!”라고 출력하고, 5보다 작거나 같으면 “5보다 작아요!”라고 출력해보세요.
const bigger5 = 10;
if (bigger5 > 5) {
  console.log("5보다 큽니다!");
} else {
  console.log("5보다 작야요!");
}
// 문자열인 변수 x와 y를 선언하고, x가 y보다 사전상 먼저 나온다면, “앞단어", 뒤에 나온다면 “뒷단어", 같으면 “같은 단어"를 출력하도록 해보세요.
const x = "student";
const y = "teacher";
if (x.localeCompare(y) < 0) {
  console.log("앞단어");
} else if (x.localeCompare(y) > 0) {
  console.log("뒷단어");
} else if (x.localeCompare(y) == 0) {
  console.log("같은 단어");
}
// 위를 다른 순서로 해보세요.
const xx = "milk";
const yy = "muffin";
if (xx.localeCompare(yy) == 0) {
  console.log("같은 단어");
} else if (xx.localeCompare(yy) > 0) {
  console.log("뒷단어");
} else if (xx.localeCompare(yy) < 0) {
  console.log("앞단어");
}
/*  변수를 하나 선언하고, 문자열을 대입해 보세요.
그리고 그 문자열에 띄어쓰기로 구분된 단어가
 i) 5개 이상이면, “긴 문장입니다~”를 출력하고,
 ii) 3개 이상이면, “중간 문장입니다~”를 출력하고,
 iii) 3개 미만이면, “짧은 문장입니다~”를 출력해보세요.
 */
const text = "아버지가 방에 들어가신다. 레알루 진짜루 정말루.";
const text2 = text.split(" ");
if (text2.length >= 5) {
  console.log("긴 문장입니다~");
} else if (text2.length >= 3 && text2.length < 5) {
  console.log("중간 문장입니다~");
} else if (text2.length < 3) {
  console.log("짧은 문장입니다~");
}
/* 변수 하나를 선언하고, 문자열의 배열 하나를 만들어 대입해보세요.
 배열의 길이는 5보다 크게 하고, 문자열의 길이는 모두 다르게 만들어보세요.
 그리고 그 배열의 항목들을 모두 출력해보세요.
 */
let strAry = [];

console.log(strAry);
// 위의 내용을 다른 방법으로 해볼까요?
// [memo] 그냥 배열을 하나 만드는 건데 이렇게 어렵게 할 내용이 아니었음...
// [memo] for / while 로
let strAry2 = [];
// [memo] for (let i ... ) 식으로!!
for (i = 0; i < 6; i++) {
  let count = i + 1;
  let result = "";
  for (let m = 0; m < count; m++) result += "a"; // 잘 모르겠음
  strAry2.push(result);
}
console.log(strAry2);
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
    console.log(
      i + 1 + "행 " + (j + 1) + "열은 " + secondMatrix[i][j] + "입니다."
    );
  }
}
//객체 하나를 선언하고 변수에 대입해보세요. 그 객체의 key와 value를 하나하나 출력해보세요.
const testObj = { name: "김도화", age: "29", sex: "male", height: 183 };
i = 0;
// [memo] while문에 쓰는 변수는 좀 의미 있는 이름으로 만들 필요가 있음 (tip같은 거)
while (i < Object.keys(testObj).length) {
  console.log(Object.keys(testObj)[i]);
  console.log(testObj[Object.keys(testObj)[i]]);
  i++;
}
//9~12번은  for문과 while문으로 각각 해보세요.
// 배열을 하나 선언해보세요 (= 변수를 선언하고, 그 변수에 배열을 대입하세요). 그 배열의 길이가 3보다 크면 배열의 항목들을 출력하도록 해보세요.
//while
let threeAry = [];
// [memo] 그냥 배열 하나 [1,2,3]식으로 써보란 뜻
i = 0;
// [memo] 그래서 if문이 먼저 나와야 함
while (i < 5) {
  threeAry.push(i);
  if (threeAry.length > 3) {
    console.log(threeAry);
  }
  i++;
}
//for
let threeAry2 = [];
for (i = 0; i < 5; i++) {
  threeAry2.push(i);
  if (threeAry2.length > 3) {
    console.log(threeAry2);
  }
}
// 배열들로 구성된 배열을 선언해보세요. (배열의 항목이 배열이 되는 식, 모두 숫자로) 각 배열의 항목인 배열의 길이가 5보다 크면, “길이가 5보다 큰 배열!”이라고 출력해보세요.
// [memo] 매트릭스 만들었듯이 만들어보라는 뜻
//while
let aryAry = [];

//for
let aryAry2 = [];

// 위의 배열에서, 각 배열의 항목인 배열의 길이가 3보다 작거나 같으면, 그 배열 (항목인 배열)의 항목들에 3을 더해보세요. 예) [[1, 2, 3], [1, 2, 3, 4]]이면, [[4, 5, 6], [1, 2, 3, 4]]가 되도록
//while

//for

//길이가 20 이상인 배열을 선언하고, 5번째 항목만 출력해보세요.
// [memo] 그냥 하나의 배열 [1,2,3,4,5,....] 식으로 만들기
//while
let longAry = [];
i = 0;
while (i < 20) {
  longAry.push(i);
  i++;
}
console.log(longAry[4]);
//for
let longAry2 = [];
for (i = 0; i < 20; i++) {
  longAry2.push(i);
}
console.log(longAry2[4]);
//아래 내용은 코드로 짜는 것이 아니라, 그 답을 써보세요. (계산기는 써도 됩니다.)
// (17 + 21) % 3 * 2
console.log(25.333333333333332); // [memo] 아님
// 17 + 21 % 3 * 2
console.log(31); //[memo] 아님
// 12 * 6 > 67 && 21 < 4 / 2 * 6
console.log(12); //[memo] 아님
// 12 * 6 > 67 || 21 < 4 / 2 * 6
console.log(true);
// let a = 21; let b = a++; a, b의 값은?
console.log("a = 21", "b = 22"); //[memo] 아님
// let a = 21; let b = ++a; a, b의 값은?
console.log("a = 22", "b = 22");
// let a = 22; ++a > 22
console.log(true);
// 21 * ( 3 % 2 + 2 * ( 7 + 2 ) ) < 21 * ( ( 3 % 2 + 2 ) * ( 7 + 2 ) )
console.log(true);
// ! true && false || true
console.log(true);
// ! true && ( false || true )
console.log(false);
// true && ( false || true )
console.log(true);
// ( true && false ) || true
console.log(true);
// ! ( true && false ) || true
console.log(true);
// ! ( ( true && false ) || true )
console.log(false);
// 3 > 2 && true
console.log(true);
// 3 < 3 && true
console.log(false);
// ( ( 21 % 5 > 5 ) || false ) && true
console.log(false);
// ( ! ( 21 % 5 > 5 ) || false ) && true
console.log(true);
// ! ( ( 21 % 5 > 5 ) || false ) && true
console.log(true);
// ! ( ! ( 21 % 5 > 5 ) || false ) && true
console.log(false);

//<함수>

//숫자를 입력하면 그 제곱을 반환하는 함수를 만들어보세요.
function power(n) {
  return Math.pow(n, 2);
}
console.log(power(4));
console.log(power(10));

// 두 숫자를 입력해서, 둘다 짝수이면 true를 반환하고, 아니면 false를 반환하는 함수를 만들어보세요.
function two_evens(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(two_evens(3, 5));
console.log(two_evens(4, 5));
console.log(two_evens(4, 6));

// 첫장에서 본 나이를 입력하면 적절한 버스 요금을 반환하는 수도 코드를 Javascript로 구현해보세요. (첫장의 조건과 같이)
function bus_fare(age) {
  if (age < 4) {
    return 0;
  } else if (age <= 10) {
    return 360;
  } else if (age <= 16) {
    return 720;
  } else {
    return 1250;
  }
}
console.log(bus_fare(3));
console.log(bus_fare(10));
console.log(bus_fare(16));
console.log(bus_fare(23));

// 기온과 습도를 입력하면, 날씨에 대해 설명을 출력하는 함수를 만들어보세요. (조건은 주석문 참고)
function weather(temperature, humidity) {
  if (temperature < 5) {
    return "cold";
  } else if (5 <= temperature < 25) {
    return "mild";
  } else {
    return "hot";
  }
} //[memo] humidity는?

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

// 랜덤 숫자를 하나 뽑아서 그 숫자가 0.5보다 크면 true를 작으면 false를 반환하는 함수를 만들어보세요.
function fortune() {
  if (Math.random() > 0.5) {
    return true;
  } else {
    return false;
  }
}
console.log(fortune());

// 한 숫자를 넣으면 1부터 그 숫자까지의 합을 구해 반환하는 함수를 만들어보세요. (재귀적으로!)

/*
<실행 예제>
function n_sum(n) {
	for (i = 0, i < n, i++) {

	}
}
console.log( n_sum(4) ); // 10
console.log( n_sum(6) ); // 21
*/

// 객체를 넣으면 key와 value를 하나씩 출력하는 함수를 만들어보세요. (hint: key들의 목록을 알면 쉽겠죠?)

/*
<실행 예제>
function key_value(obj) {
	...
}

let obj_test = { name: "James", age: 15, dogs: ["Jody", "Bunny"] };
console.log( key_value(obj_test) );
// "key: name"
// "value: James"
// "key: age"
// "value: 15"
// "key: dogs"
// "value: Jody,Bunny"
*/

// 문자열로 된 배열을 넣으면 항목들을 하나씩 늘려 가면서 출력하는 함수를 만들어보세요 (예제를 참고).

/*
<실행 예제>
function string_increment(string_array) {
	...
}

let test_string_array = ["Grape", "Orange", "Melon", "Kiwi"];
console.log( string_increment(test_string_array) );
// "Grape"
// "Grape, Orange"
// "Grape, Orange, Melon"
// "Grape, Orange, Melon, Kiwi"
*/

// 문자열로 된 배열을 넣으면, 길이가 5보다 긴 문자열은 모두 대문자로, 그렇지 않으면 모두 소문자로 바꿔보세요. (반환하지 않고 값을 직접 바꾸기)

/*
<실행 예제>
function string_checker(string_array) {
	...
}

let test_string_array2 = ["Giraffe", "Bird", "Lion", "Tiger"];
console.log( string_checker(test_string_array2) );
// ["GIRAFFE", "bird", "lion", "tiger"]
*/

// 가전 기구들의 전원 상태를 담은 객체가 있으면, 가전 기구의 이름을 넣어 해당 가전 기구의 전원 상태가 true/false 사이에서 전환되는 함수를 만들어보세요.

/*
<실행 예제>
let appliance = {
	microwave: false,
	fridge: false,
	washer: false,
	television: false
}
function power_toggle(app) {
	...
}

power_toggle("microwave");
console.log( appliance.microwave ); // true

power_toggle("microwave");
console.log( appliance.microwave ); // false
*/
