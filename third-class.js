// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get_info() {
//     return this.name + "is " + this.age + " years old.";
//   }
// }

// let dowha = new People("Dowha", 29);
// console.log(dowha.get_info());

// let time = new Date();
// console.log(time.getFullYear());
// console.log(time.getMonth());
// console.log(time.getDate());
// console.log(time.getDay());

// time.setFullYear(2008);
// console.log(time);

// let time2 = new Date(2019, 5, 16);

// console.log(Date.now());

// console.log(Math.PI);

// console.log(Math.floor(Math.PI));
// console.log(Math.random());

// console.log(Math.E)
// console.log(Math.abs(-500));
// console.log(Math.ceil(4.2));
// console.log(Math.round(3.2));
// console.log(Math.pow(10, 10));
// console.log(Math.min(1, 3, 5, 7, 9));
// console.log(Math.max(1, 2, Math.PI));

class Account {
  constructor(name, initial_balance) {
    this.name = name;
    this.balance = initial_balance;
  }
  deposit(money, memo) {
    //money: number, deposit money
    //memo: string, reason of deposit
    this.balance += money;
  }
  withdraw(money, memo) {
    //same as deposit
    this.balance -= money;
  }
  get_balance() {
    return this.balance;
  }
  get_balance_format() {
    return this.balance.toString() + "원";
  }
}

let myAccount = new Account("John", 5000); // 예금주, 초기 금액 5000원

myAccount.deposit(2000, "ATM입금"); // 입금: 2000원, 입금 사유
myAccount.withdraw(3000, "통신비 지출"); // 출금: 3000원, 출금 사유
console.log(myAccount.get_balance()); // 잔고 확인 - 4000원

class AccountPlus {
  constructor(name, initial_balance) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
    this.deposit(initial_balance, "개설");
  }
  deposit(money, memo) {
    //money: number, deposit money
    //memo: string, reason of deposit
    this.balance += money;
    let time = new Date();
    this.transactions.push({ time: time.toString(), money: money, memo: memo });
  }
  withdraw(money, memo) {
    //same as deposit
    this.balance -= money;
    this.transactions.push({
      time: time.toString(),
      money: -money,
      memo: memo
    });
  }
  get_balance() {
    return this.balance;
  }
  get_balance_format() {
    return this.balance.toString() + "원";
  }
  get_transactions() {
    console.log(this.name + "의 계좌");
    for (let i = 0; i < this.transactions.length; i++) {
      let curr = this.transactions[i];
      // 방법 1
      console.log(
        curr.time.toString() +
          " - " +
          curr.money.toString() +
          "원 - " +
          curr.memo
      );
      console.log(
        `${curr.time.toString()} - ${curr.money.toString()}원 - ${curr.memo}`
      );
      // 방법 2
    }
  }
}

let myAccount = new AccountPlus("John", 5000); // 예금주, 초기 금액 5000원 (+시간 저장)
myAccount.deposit(2000, "ATM입금"); // 입금: 2000원, 입금 사유 (+시간저장)
myAccount.withdraw(3000, "통신비 지출"); // 출금: 2000원, 출금 사유 (+시간저장)
console.log(myAccount.get_balance()); // 잔고 확인 - 4000원
myAccount.get_transactions(); // 거래 내역 출력
// John의 계좌
// DD MM YYYY HH:MM:SS - 5000원 - 개설
// DD MM YYYY HH:MM:SS - 2000원 - ATM입금
// DD MM YYYY HH:MM:SS - 3000원 - 통신비 지출

class AccountPlusPlus {
  constructor(name, initial_balance) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
    this.deposit(initial_balance, "개설");
  }
  deposit(money, memo) {
    //money: number, deposit money
    //memo: string, reason of deposit
    this.balance += money;
    let time = new Date();
    this.transactions.push({ time: time.toString(), money: money, memo: memo });
  }
  withdraw(money, memo) {
    //same as deposit
    this.balance -= money;
    let time = new Date();
    this.transactions.push({
      time: time.toString(),
      money: -money,
      memo: memo
    });
  }
  get_balance() {
    return this.balance;
  }
  get_balance_format() {
    return this.balance.toString() + "원";
  }
  get_transactions() {
    console.log(this.name + "의 계좌");
    for (let i = 0; i < this.transactions.length; i++) {
      let curr = this.transactions[i];
      // 방법 1
      console.log(
        curr.time.toString() +
          " - " +
          curr.money.toString() +
          "원 - " +
          curr.memo
      );
      // 방법 2
    }
  }
  send(money, _to) {
    // _to: AccountPlusPlus instance!!
    this.withdraw(money, _to.name + " 송금");
    _to.deposit(money, this.name + " 입금");
  }
}

let myAccount = new AccountPlusPlus("John", 5000); // 예금주, 초기 금액 5000원 (+시간 저장)
myAccount.deposit(2000, "ATM입금"); // 입금: 2000원, 입금 사유 (+시간저장)
myAccount.withdraw(3000, "통신비 지출"); // 출금: 2000원, 출금 사유 (+시간저장)
console.log(myAccount.get_balance()); // 잔고 확인 - 4000원
myAccount.get_transactions(); // 거래 내역 출력
let yourAccount = new AccountPlusPlus("James", 3000); // 예금주, 초기 금액 3000원
myAccount.send(1000, yourAccount); // yourAccount로 1000원 송금
