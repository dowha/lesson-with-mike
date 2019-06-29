// /냉장고 클래스를 만들어보세요.
// 처음 인스턴스를 만들 때, 모델명을 입력항으로 받으면 되고,
// 모델명은 model 속성에 저장하세요.

class Fridge {
  constructor(model) {
    this.model = model;
  }
}

let myFridge = new Fridge("모델 1");
console.log(myFridge.model); // "모델 1";

// 위의 냉장고 클래스에 다음의 기능을 추가해보세요.
// 전원 관리하는 메소드 toggle_power()
// 전원은 Fridge 클래스에 power 속성에 저장하세요.

class Fridge {
  constructor(model) {
    this.model = model;
    this.power = false;
  }
  toggle_power() {
    this.power = !this.power;
  }
}

let myFridge = new Fridge("모델 1");
myFridge.toggle_power();
console.log(myFridge.power); // true; 이 부분이 가장 헷갈리고 오래걸림.

// 위의 냉장고 클래스에 다음의 기능을 추가해보세요.
// 아이템을 넣는 메소드 put(아이템)
// 아이템은 Fridge 클래스에 inventory 속성에 저장하세요. 이 속성에는 “여러 개"의 아이템을 저장할 수 있어야 합니다.

class Fridge {
  constructor(model) {
    this.model = model;
    this.power = undefined;
    this.inventory = [];
  }
  toggle_power() {
    return (this.power = true);
  }
  put(item) {
    // item: string, inventory item
    this.inventory.push(item);
  }
}

let myFridge = new Fridge("모델 1");
myFridge.put("바나나");
myFridge.put("키위");
myFridge.put("치즈");
console.log(myFridge.inventory); // ["바나나", "키위", "치즈"]

// 위의 냉장고 클래스에 다음의 기능을 추가해보세요.
// 아이템을 빼는 메소드 pick(아이템)
// 아이템은 Fridge 클래스에 inventory 속성에서 뽑아내면 됩니다.

class Fridge {
  constructor(model) {
    this.model = model;
    this.power = undefined;
    this.inventory = [];
  }
  toggle_power() {
    return (this.power = true);
  }
  put(item) {
    // item: string, inventory item
    this.inventory.push(item);
  }
  pick(item) {
    let findItem = this.inventory.indexOf(item);
    this.inventory.splice(findItem, 1);
  }
}

let myFridge = new Fridge("모델 1");
myFridge.put("바나나");
myFridge.put("키위");
myFridge.put("치즈");
console.log(myFridge.inventory); // ["바나나", "키위", "치즈"]
myFridge.pick("바나나");
console.log(myFridge.inventory); // ["키위", "치즈"]

// 위의 냉장고 클래스에 다음의 기능을 추가해보세요.
// 어떤 아이템들이 있는지 보여주는 메소드 look()
class Fridge {
  constructor(model) {
    this.model = model;
    this.power = undefined;
    this.inventory = [];
  }
  toggle_power() {
    return (this.power = true);
  }
  put(item) {
    // item: string, inventory item
    this.inventory.push(item);
  }
  pick(item) {
    let findItem = this.inventory.indexOf(item);
    this.inventory.splice(findItem, 1);
  }
  look(item) {
    console.log(this.model + " 냉장고 안에는");
    for (let i = 0; i < this.inventory.length; i++) {
      console.log(this.inventory[i]);
    }
    console.log("가 있습니다");
  }
}

let myFridge = new Fridge("모델 1");
myFridge.put("바나나");
myFridge.put("키위");
myFridge.put("치즈");
console.log(myFridge.inventory); // ["바나나", "키위", "치즈"]
myFridge.pick("바나나");
console.log(myFridge.inventory); // ["키위", "치즈"]
myFridge.look();
// "모델 1 냉장고 안에는 "
// "키위"
// "치즈"
// "가 있습니다."

// 책에 대한 정보를 담고 있는 Book 클래스를 만들어보세요.
// 이 클래스를 처음 인스턴스로 만들 때에는 책 제목 (name 속성), 작가 (author 속성), 출판연도 (year 속성), 출판사 정보 (publisher 속성)를 저장하도록 해보세요.

class Book {
  constructor(name, author, year, publisher) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
  }
}

let myBook = new Book(
  "나의 라임오렌지나무",
  "마우루 지 바스콘셀루스",
  1968,
  "Editora Melhoramentos"
);
console.log(myBook.name); // "나의 라임오렌지나무"
console.log(myBook.author); // "마우루 지 바스콘셀루스"
console.log(myBook.year); // 1968
console.log(myBook.publisher); // "Editora Melhoramentos"

// Book 클래스에 아래의 기능을 추가해 보세요.
// 작가를 return 하는 메소드 get_author()

class Book {
  constructor(name, author, year, publisher) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
  }
  get_author() {
    return this.author;
  }
}

let myBook = new Book(
  "나의 라임오렌지나무",
  "마우루 지 바스콘셀루스",
  1968,
  "Editora Melhoramentos"
);
console.log(myBook.get_author()); // "마우루 지 바스콘셀루스"

// Book 클래스에 아래의 기능을 추가해 보세요.
// 장르를 저장하는 메소드 set_genre()
// 장르는 genre 속성에 저장하세요.

class Book {
  constructor(name, author, year, publisher) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.publisher = publisher;
  }
  get_author() {
    return this.author;
  }
  set_genre(g) {
    this.genre = g;
  }
}

let myBook = new Book(
  "나의 라임오렌지나무",
  "마우루 지 바스콘셀루스",
  1968,
  "Editora Melhoramentos"
);
console.log(myBook.get_author()); // "마우루 지 바스콘셀루스"
myBook.set_genre("소설");
console.log(myBook.genre); // "소설"

// Book 클래스에 아래의 기능을 추가해 보세요.
// 책의 정보를 출력하는 메소드 print_info()
// 이때 책 제목, 작가, 연도, 출판사를 기본으로 출력하고,
// 장르는 있을 때만 출력하세요.

class Book {
  constructor(name, author, year, publisher) {
    this.info = {
      이름: name,
      작가: author,
      연도: year,
      출판사: publisher
    };
    this.name = this.info["이름"];
    this.author = this.info["작가"];
    this.year = this.info["연도"];
    this.publisher = this.info["출판사"];
  }
  get_author() {
    return this.info["작가"];
  }
  set_genre(g) {
    this.info["장르"] = g;
    this.genre = this.info["장르"];
  }
  print_info() {
    console.log("이 책의 정보");
    let keys = Object.keys(this.info);
    for (let i = 0; i < keys.length; i++) {
      let k = Object.keys(this.info)[i];
      console.log(keys[i] + ": " + this.info[k]);
    }
  }
}

let myBook = new Book(
  "나의 라임오렌지나무",
  "마우루 지 바스콘셀루스",
  1968,
  "Editora Melhoramentos"
);
console.log(myBook.get_author()); // "마우루 지 바스콘셀루스"
myBook.print_info();
// "이 책의 정보"
// "이름: 나의 라임오렌지나무"
// "작가: 마우루 지 바스콘셀루스"
// "출판연도: 1968"
// "출판사: Editora Melhoramentos"
myBook.set_genre("소설");
console.log(myBook.genre); // "소설"
myBook.print_info();
// "이 책의 정보"
// "이름: 나의 라임오렌지나무"
// "작가: 마우루 지 바스콘셀루스"
// "출판연도: 1968"
// "출판사: Editora Melhoramentos"
// "장르: 소설"

// Book 클래스에 아래의 기능을 추가해 보세요.
// 특정 키워드를 받으면 그에 대한 정보를 return하는 메소드 get_info(item)
// 예를 들어 "author"를 입력하면 작가명을 반환하면 됩니다.
// 그러나 해당 키워드가 없으면 null을 반환하세요.

class Book {
  constructor(name, author, year, publisher) {
    this.info = {
      이름: name,
      작가: author,
      연도: year,
      출판사: publisher
    };
    this.name = this.info["이름"];
    this.author = this.info["작가"];
    this.year = this.info["연도"];
    this.publisher = this.info["출판사"];
  }
  get_author() {
    return this.info["작가"];
  }
  set_genre(g) {
    this.info["장르"] = g;
    this.genre = this.info["장르"];
  }
  print_info() {
    console.log("이 책의 정보");
    let keys = Object.keys(this.info);
    for (let i = 0; i < keys.length; i++) {
      let k = Object.keys(this.info)[i];
      console.log(keys[i] + ": " + this.info[k]);
    }
  }
  get_info(item) {
    if (this.info[item]) {
      return this.info[item];
    } else {
      return null;
    }
  }
}

let myBook = new Book(
  "나의 라임오렌지나무",
  "마우루 지 바스콘셀루스",
  1968,
  "Editora Melhoramentos"
);
console.log(myBook.get_author()); // "마우루 지 바스콘셀루스"
myBook.print_info();
myBook.set_genre("소설");
console.log(myBook.genre); // "소설"
console.log(myBook.get_info("author")); // "마우루 지 바스콘셀루스"
console.log(myBook.get_info("score")); // null

// Book 클래스에 아래의 기능을 추가해 보세요.
// 특정 키워드와 값을 받으면 해당 정보를 저장하는 메소드 set_info(key, value)
// key가 속성이 되고, value가 그 값이 됩니다.

class Book {
  constructor(name, author, year, publisher) {
    this.info = {
      이름: name,
      작가: author,
      연도: year,
      출판사: publisher
    };
    this.name = this.info["이름"];
    this.author = this.info["작가"];
    this.year = this.info["연도"];
    this.publisher = this.info["출판사"];
  }
  get_author() {
    return this.info["작가"];
  }
  set_genre(g) {
    this.info["장르"] = g;
    this.genre = this.info["장르"];
  }
  print_info() {
    console.log("이 책의 정보");
    let keys = Object.keys(this.info);
    for (let i = 0; i < keys.length; i++) {
      let k = Object.keys(this.info)[i];
      console.log(keys[i] + ": " + this.info[k]);
    }
  }
  get_info(item) {
    if (this.info[item]) {
      return this.info[item];
    } else {
      return null;
    }
  }
  set_info(key, value) {
    this.info[key] = value;
  }
}

let myBook = new Book(
  "나의 라임오렌지나무",
  "마우루 지 바스콘셀루스",
  1968,
  "Editora Melhoramentos"
);
console.log(myBook.get_author()); // "마우루 지 바스콘셀루스"
myBook.print_info();
myBook.set_genre("소설");
console.log(myBook.genre); // "소설"
myBook.print_info();
console.log(myBook.get_info("author")); // "마우루 지 바스콘셀루스"
console.log(myBook.get_info("score")); // null
myBook.set_info("country", "Brazil");
console.log(myBook.get_info("country")); // "Brazil"
