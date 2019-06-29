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

// 14

// 15

// 16

// 17

// 18

// 19

// 20

// 21

// 22

// 23

// 24

// 25

// 26

// 27

// 28

// 29

// 30
