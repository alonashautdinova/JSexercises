//1 - Variables and Conditionals//
//1.1
let age = 25;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

//1.2
let name = prompt("Enter your name:");
if (name === "John") {
  console.log("Hello, John!");
} else {
  console.log("you are not John");
}

//2 - Function
//2.1
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 4));
console.log(sum(45, 3546));
console.log(sum(987, 345));

//2.2

function reverseString(string) {
  let splitString = string.split("");
  let reverseWord = splitString.reverse();
  let joinString = reverseWord.join("");
  return joinString;
}

console.log(reverseString("I am string"));

// 3 - Arrays and Loops
//3.1
const fruits = ["apple", "bannana", "orange", "kiwi"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//3.2
function avrNum(numbers) {
  if (numbers === 0) {
    console.log(0);
  }
  let sum = numbers.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber,
    0
  );
  let avr = sum / numbers.length;
  return avr;
}
let numbers = [3, 54, 12, 87];

console.log(avrNum(numbers));

//3.3
let numArr = [5, 23, 7654, 23];
function findLargeNum(numbers) {
  let numExample = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numExample) {
      numExample = numbers[i];
    }
  }
  console.log(numExample);
}
findLargeNum(numArr);

//3.4
const wordsArr = ["kitty", "is", "playing", "with", "doggy"];
let result = "";
for (let i = 0; i < wordsArr.length; i++) {
  result += wordsArr[i] + " ";
}
console.log(result);

//3.5
let namesArr = ["John", "Max", "Alex", "Maria"];
let nameToCheck = "John";
function checkNameExists(namesArr, nameToCheck) {
  for (let i = 0; i < namesArr.length; i++) {
    if (nameToCheck === namesArr[i]) {
      return true;
    }
  }
  return false;
}

console.log(checkNameExists(namesArr, nameToCheck));

//3.6
const evenNum = [];
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    evenNum.push(i);
  }
}

console.log(evenNum);

//4- Objects
//4.1
let bookDetails = {
  title: "How do you live",
  author: "Genzaburo Yoshino",
  year: 1937,
};

console.log(bookDetails);

//4.2
let person = {
  name: "Garfild",
  age: 8,
  gender: "male",
};

function personDetails(person) {
  console.log(`Name is ${person.name}`);
  console.log(`Age is ${person.age}`);
  console.log(`Gender is ${person.gender}`);
}

personDetails(person);

//5- Objects as Classes
//5.1-5.2
const Car = {
  make: "",
  model: "",
  year: "",
  start: function () {
    console.log("Starting the car.");
  },
  drive: function () {
    console.log("Driving the car.");
  },
};

//6- Window Object:
//6.1
document.getElementById("windowAlert").addEventListener("click", function () {
  window.alert("I am an alert!");
});

//6.2
let windowName = window.prompt("What is your name?");
let windowalertSix = window.alert(`Hello ${windowName}`);

//7- DOM Manipulation

//7.1
document.getElementById("buttonFirst").addEventListener("click", function () {
  let textFirst = document.getElementById("textFirst");
  textFirst.textContent = "I am changed text for the 7.1 exercise";
});

//7.2

document.getElementById("list").addEventListener("click", function () {
  let li = document.createElement("li");
  let ul = document.getElementById("unList");
  li.textContent = "5";
  ul.appendChild(li);
});

//7.3
document.getElementById("imgButton").addEventListener("click", function () {
  let img = document.getElementById("img");
  img.src =
    "https://www.usatoday.com/gcdn/presto/2019/08/18/USAT/143d7785-b299-4f54-ad42-a16735a9119e-AP_Doggy_Con_1.JPG?crop=2100,1181,x1,y0&width=1600&height=800&format=pjpg&auto=webp";
});

//7.4
function loginValid() {
  let usernameDefault = "John";
  let passwordDefault = "1234qwerty";

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (usernameDefault === username && passwordDefault === password) {
    alert("Login is successfull :)");
  } else {
    alert("Login is unsuccessfull :(");
  }
}
