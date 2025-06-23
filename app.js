let nickname='ごっしー';
let age='28';
let greet='私のニックネームは'+nickname+'です。年齢は'+age+'歳です。';
console.log(greet);


let languages=['Javascript','PHP','Ruby','Python','Go'];
let template=`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(template);


let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

console.log((playerList[0].age+playerList[1].age+playerList[2].age)/playerList.length);


function sayHello(){
  console.log('Hello');
}
sayHello();
let sayWorld=function(){
  console.log('World');
}
sayWorld();


user={
  birthday:'2000-09-27',
  greet:function sayHello(){
    console.log('Hello');
  }
};


let calc={};

calc.add=function(x,y){
  console.log(x+y);
};

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);  
calc.divide(25, 5);


function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);
console.log(`5 を 3 で割った余りは ${result} です。`);


function foo() {
  let x = 1;
}
console.log(x);
//関数内だけスコープが有効であり、関数の外からXを参照しようとしているためx is not definedというエラーが出力されます。

Q1
console.log(Math.floor(Math.random() * 10));
Q2-1
setTimeout(function() {
  console.log("Hello World!");
}, 3000);

Q2-2
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('陽太', addIntro);
Q3
let num = 5;

if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else {
  console.log("num is 0");
}
Q4
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);
Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let item of mixed) {
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}