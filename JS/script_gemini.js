//! parseInt()-------------------------

// console.log(parseInt("10"));   //* 10
// console.log(parseInt("10.5")); //* 10 ("." - den sonrasini silir);
// console.log(parseInt("10px"))  //* 10 ("p" - da durdu);
// console.log(parseInt("px10"))  //* NaN (setir ededle baslamir);
// console.log(parseInt("10", 8)) //* 8 (10 - 8 li say sisteminde 8 dir);
// console.log(parseInt("0xF", 16)) //* 15 (0xF - 16 li say sisteminde 15 dir);
// console.log(parseInt("010"))   //* 10 (brauzerlerde 10 say sistemi goturduyune gore 10 olacaq);
// console.log(parseInt("010"))   //* 10 (brauzerlerde 10 say sistemi goturduyune gore 10 olacaq);

//! parseFloat()----------------------

// console.log(parseFloat("10")) //* 10
// console.log(parseFloat("10.5")) //* 10.5
// console.log(parseFloat("10.5px")) //* 10.5 ("p" - da durdu);
// console.log(parseFloat("px10.5")) //* NaN (setir ededle baslamir);
// console.log(parseFloat("3.14e-2")) //* 0.0314 (eksponensial qeydləri idarə edir);

//! Tasks_#1 ---------------------------

// //! -----Task_#1-----
// let a = "25 apples";
// console.log(parseInt(a));

// let b = "3.14 meters";
// console.log(parseFloat(b));

// //! -----Task_#2-----

// let c = "0xFF";
// console.log(parseInt(c, 16));

// //! -----Task_#3-----

// function extractNumbers(str) {
//   // Регулярное выражение для поиска чисел (целых и дробных)
//   // \d+        - одна или более цифр (для целой части)
//   // (\.\d+)?   - необязательная (благодаря ?) группа: точка (\.) и одна или более цифр (\d+) (для дробной части)
//   // g          - флаг "global", чтобы найти все совпадения, а не только первое
//   const regex = /\d+(\.\d+)?/g;

//   // Метод match() возвращает массив всех совпадений,
//   // или null, если совпадений нет.
//   const matches = str.match(regex);

//   // Если совпадений нет, возвращаем пустой массив
//   if (!matches) {
//     return [];
//   }

//   // Преобразуем каждую найденную строку (которая является числом) в числовой тип с помощью parseFloat
//   return matches.map(numStr => parseFloat(numStr));
// }

// // Примеры вызова:
// console.log(extractNumbers("The price is 123.45 dollars and I bought 2 items.")); // [123.45, 2]
// console.log(extractNumbers("No numbers here."));                                 // []
// console.log(extractNumbers("Items: 10, Cost: 5.99, Discount: 0.5"));             // [10, 5.99, 0.5]
// console.log(extractNumbers("Invoice #007, total 99.99USD."));

//! sətirlərin Ekranlaşdırması (Escaping) və Konkatenasiyası (Concatenation) -----------------

// //todo  Ekranlaşdırma (Escaping)
// console.log("Bu setirlerde \' isaresini gormek ucun siz \\ simvolundan istifade etmelisiniz");
// console.log("Yeni setirden yazmaq ucun \n \\n yazmaniz besdir")
// console.log("Tabulasiya (tab) simvolu \t \\t seklinde yazilir")

// //todo Konkatenasiya (Concatenation);
// const lst = " vasitesi ile setirleri birlesdiririk";

// //*1
// console.log("1) bunun" + lst);

// //*2
// const pt1 = "2)";
// const pt2 = "bunun";
// const res = pt1.concat(" ", pt2, lst);
// console.log(res);

// //*3
// const name = "Ali";
// const age = 23;
// const like = "cats";

// console.log(`My name is ${name}, im ${age} years old, i like ${like}`);
// console.log(`My name is ${name}, im ${age} 
//   years old,        i like ${like}`); //* (\t ve \n istifade etmeden rahat bir sekildi yazildigi formada ekrana cixara bildik);

//! trim() ----------------------------

// const str = "     I have space     ";
// const noSpace = str.trim();
// console.log(`'${str}'`);
// console.log(`'${noSpace}'`);

//! split() ---------------------------

// const sentence = "I am a simple senten for learning js";

// const words = sentence.split(" ");
// console.log(words);

// const a = sentence.split("a");
// console.log(a);

// const chars = sentence.split("");
// console.log(chars);

//! replace() ------------------------

// const origin = "Salam, dunya! Salam, kosmos!";

// const strNew1 = origin.replace("dunya", "ay");
// console.log(strNew1);

// const strNew2 = origin.replace(/Salam/g, "Sagol");
// console.log(strNew2);

//! repeat() ----------------------

// const word = "|word|";
// console.log(word.repeat(5));
// console.log("Ha".repeat(10));
// console.log("=".repeat(15));

//! starsWith() -------------------

// const docName = "document.pdf";

// console.log(docName.startsWith("doc")); //* true
// console.log(docName.startsWith("DOC")); //* false
// console.log(docName.startsWith("file")); //* false

//! endsWith ----------------------

// const docName2 = "document.zip";

// console.log(docName2.endsWith("pdf")); //* false
// console.log(docName2.endsWith("zip")); //* true
// console.log(docName2.endsWith(".zip")); //* true
// console.log(docName2.endsWith(".ZIP")); //* false

//! Tasks_#2 ---------------------------

// //! -----Task_#1-----

// const productName = "   TV 55 dyum   ";
// console.log(`'${productName}' | '${productName.trim()}'`);

// let price = 12500;
// console.log(`TV Price: ${price}`);

// const doc = "image.png";
// console.log(doc.endsWith(".png"));

// //! -----Task_#2-----

// let str = "Shopping list: bread, milk, eggs, cheese";

// console.log(str.replace("bread", "cereals"));

// console.log(str.replace("Shopping list:", "").split(","));

// function generateStars(count){
//     console.log("*".repeat(count));
// };
// generateStars(15);

// //! -----Task_#3-----

// function censorWord(sentence, word){
//     let censor = "*".repeat(word.length);
//     let pattern = new RegExp(word, "gi");
//     console.log(sentence.replace(pattern, censor));
// }

// censorWord("My name is James. my favorite team is...", "my");

//! in --------------------------------

// const user = {
//     name: "James",
//     age: 23,
// };

// console.log("name" in user);     //* true
// console.log("age" in user);      //* true
// console.log("lastName" in user); //* false

// console.log("toString" in user); //* true - (toString() metodu Object.prototype - dan geldiyi ucun sayilir);

//! JSON ------------------------------

// const persone = {
//     firsName: "Ivan",
//     lasrName: "Gregoriy",
//     age: 23,
//     isStudent: false,
//     courses: ["Math", "History"]
// };

// const jsonString  = JSON.stringify(persone);
// console.log(jsonString);
// console.log(typeof  jsonString);

// //todo ------------------------------------

// const personeData = JSON.parse(jsonString);
// console.log(personeData);
// console.log(personeData.lasrName);

//! Object.keys(), Object.values(), Object.entries() ----

// const product = {
//     name: "Phone",
//     mark: "Apple",
//     price: 200,
//     color: "black"
// }

// //1)
// const values = Object.values(product);
// console.log(values);

// //2)
// const keys = Object.keys(product);
// console.log(keys);

// //3)
// const entries = Object.entries(product);
// console.log(entries);

// console.log('-----------')
// keys.forEach(key => console.log(`Keys: ${key}`));
// console.log('-----------')
// values.forEach(vl => console.log(`Values: ${vl}`));
// console.log('-----------')
// entries.forEach(([key, val]) => {
//     console.log(`${key}: ${val}`);
// });

//! Object.hasOwnProperty() ----------

//* Object.hasOwnProperty() -> Object.prototype.hasOwnProperty() den acila biler 

// const myObject = {
//     a: 1,
//     b: 2,
// };

// console.log(myObject.hasOwnProperty("a")); //* true
// console.log(myObject.hasOwnProperty("b")); //* true
// console.log(myObject.hasOwnProperty("c")); //* false
// console.log('-----');
// console.log('toString' in myObject); //* true
// console.log(myObject.hasOwnProperty("toString")); //* false
// console.log('-----');
// for (let key in myObject){
//     if(myObject.hasOwnProperty(key)){
//         console.log(`Oz elementleri: ${key}: ${myObject[key]}`);
//     }
// }

//! for...in --------------------------

// const student = {
//     id:  103,
//     name: "Alisa",
//     age: 17
// };
// for(let key in student){
//     console.log(`key: ${key}, value: ${student[key]}`)
// }

//! Tasks_#3 ---------------------------

// //! -----Task_#1-----
// console.log('1)------------------');

// let jsObj = {
//     title: "THis is a title",
//     author: "Magamagoma Latotiu"
// };
// console.log("year" in jsObj);
// console.log(JSON.stringify(jsObj));

// //! -----Task_#2-----
// console.log('2)------------------');

// const productsJson = '[{"id":1,"name":"Laptop","price":1200},{"id":2,"name":"Mouse","price":25}]';

// const productOnj = JSON.parse(productsJson);

// console.log(Object.keys(productOnj[1]));
// console.log(Object.values(productOnj[1]));
// console.log(Object.entries(productOnj[1]));

// //! -----Task_#3-----
// console.log('3)------------------');

// const myCar = {
//   brand: "Tesla",
//   model: "Model 3",
//   year: 2023,
//   owner: { name: "John Doe" }
// };

// function logObjectProperties(obj){
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
// }

// logObjectProperties(myCar);

//! new ---------------------------

// function Car(mark, year, isItNew, price){
//     this.mark = mark,
//     this.year = year,
//     this.isItNew = isItNew,
//     this.price = price
// }

// Car.prototype.info = function(){
//     console.log(`Your car is ${this.mark}, maded in ${this.year}. Price: ${this.price}$`);
// }

// const porshe = new Car("Porshe", 2020, false, 25000);
// const bmw = new Car("BMW", 2017, false, 11000);
// const bugatti = new Car("Bugatti", 2024, true, 3000000);

// console.log(porshe, bmw, bugatti);

// porshe.info();
// bugatti.info();

//! new Map() ------------------------

// const userRoles = new Map();
// console.log('User Roles size:', userRoles.size); //* 0

// userRoles.set("admin", "Dadas Bagirof");
// userRoles.set("editor", "Mamoli Mosa");
// userRoles.set("viewer", "Sogna Morano");
// console.log('User Roles size:', userRoles.size) //* 3

// console.log('Administrator:', userRoles.get('admin'));
// console.log('Dev', userRoles.get('developer')); //* undefined

// console.log(userRoles.has('editor')); //* true
// console.log(userRoles.has('user')); //* falce

// //* key also can be a bject
// const user1 = {id: 1};
// const user2 = {id: 2};
// const UserPP = new Map();
// UserPP.set(user1, ["nafola", "andola"]);
// UserPP.set(user2, ["Nombla",]);

// console.log(UserPP.get(user1));

//! some() ----------------------------

// const num = [1, 5, 8, 10, 15];

// const hasEvenNumber = num.some(numbers => numbers % 2 === 0);
// console.log("2 - ye bolunen ededler varmı? = " + hasEvenNumber);

// const hasNumberGreaterThan20 = num.some(number => number > 20);
// console.log("20 den boywk eded varmi? = " + hasNumberGreaterThan20);

// const users = [
//     {id:1, active: false},
//     {id:2, active: true},
//     {id:3, active: false},
// ];

// const hasActiveUser = users.some(user => user.active);
// console.log(hasActiveUser);

// const hasId4 = users.some(user => user.id == 4);
// console.log(hasId4);

//! sort() -----------------------------

// const fruits = ["banana", "apple", "mango"];
// fruits.sort();
// console.log(fruits);

// const numbers = [10, 5, 2, 4];
// numbers.sort();
// console.log(numbers);

// numbers.sort((a,b) => a - b);
// console.log(numbers);

// numbers.sort((a,b) => b - a);
// console.log(numbers);

// const products = [
//     {name: "Laptop", price:1200},
//     {name: "Mause", price:100},
//     {name: "Keyboard", price:600},
// ];
// products.sort((a, b) => a.price - b.price);
// console.log(products)

// products.sort((a, b) => {
//     const nameA = a.name.toLowerCase();
//     const nameB = b.name.toLowerCase();
//     if(nameA < nameB) return -1;
//     if(nameA > nameB) return 1;
//     return 0;
// });
// console.log(products);

//! Tasks_#4 ---------------------------

// //! -----Task_#1-----
// temperatures = [22, 25, 18, 20, 30];
// console.log(`Есть ли температура выше 28? - ${temperatures.some(temp => temp > 28)}`);
// console.log(temperatures.sort((a,b) => b - a));

// //! -----Task_#2-----
// const orders = [
//   { id: 1, amount: 150 },
//   { id: 2, amount: 50 },
//   { id: 3, amount: 200 },
//   { id: 4, amount: 100 }
// ];

// console.log(`Ob amount - ${orders.reduce((red, ord) => red + ord.amount, 0)}`);

// //! -----Task_#3-----
// const studentList = [
//   { name: "Анна", score: 95 },
//   { name: "Борис", score: 88 },
//   { name: "Виктор", score: 72 },
//   { name: "Галина", score: 99 },
//   { name: "Дмитрий", score: 85 }
// ];

// function getTopStudents(students, num) {
//     students.sort((a,b) => b.score - a.score);
//     const arr = [];
//     for(let i = 0; i < num; i++){
//         console.log(i)
//         arr.push(students[i]);
//     }
//     console.log(arr);
// }

// getTopStudents(studentList, 2);
//todo <--->
// function getTopStudents(students, num) {
//     // Создаем копию массива перед сортировкой, чтобы не изменять исходный studentList
//     // Это хорошая практика, чтобы избежать "побочных эффектов"
//     const sortedStudents = [...students].sort((a,b) => b.score - a.score);

//     // Используем slice для получения нужного количества элементов
//     const topStudents = sortedStudents.slice(0, num);

//     return topStudents; // Возвращаем результат, а не просто выводим в консоль внутри функции
// }

// console.log(getTopStudents(studentList, 2));
// console.log(getTopStudents(studentList, 3));

//! for...of --------------------------

// const fruits = ["banana", "apple", "mango"];
// for(const fruit of fruits){
//     console.log(fruit)
// }

// const greeting = "Hellow";
// for(const char of greeting){
//     console.log(char);
// }

// const uniqurNumbers = new Set ([10, 20, 20, 30, 10]);
// for(const uniq of uniqurNumbers){
//     console.log(uniq);
// }

// const userScores = new Map();
// userScores.set("Alice", 90);
// userScores.set("Alfedov", 75);
// userScores.set("Zagviele", 80);

// for(const [name, score] of userScores){
//     console.log(`Name: ${name}, Score: ${score} - point`);
// }

//! Tasks_#5 ---------------------------

// //! -----Task_#1-----
// const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];
// for(const day of weekdays){
//     console.log(`Сегодня: ${day}`);
// }

// //! -----Task_#2-----
// const dataString = "10,25,5,30,15";
// const dataArr = dataString.split(",");
// for(const data of dataArr){
//     if(data > 20){
//         console.log(data);
//     }
// }

// //! -----Task_#3-----
// function filterUniqueWords(txt){
//     const obText = txt.toLowerCase().split(/[ ,.!?]+/g);
//     const uniqueNum = new Set(obText);
//     console.log(uniqueNum)
//     for(const num of uniqueNum){
//         console.log(num)
//     }
// };
// filterUniqueWords("Привет, мир! Привет всем.");

//! Date, new Date()-------------------

// const now = new Date();
// console.log(now);

// const epochStart = new Date(0);
// console.log(epochStart);

// const oneDayInMs = 24  * 60 * 60 * 1000;
// const tomorrow = new Date(now.getTime() + oneDayInMs);
// console.log(tomorrow);

// const specificDateString = new Date("2023-10-26T10:30:00Z");
// console.log(specificDateString);

// const lessReliableDateString = new Date("April 21, 2025 12:12:00");
// console.log(lessReliableDateString);

// //* new Date(year, monthIndex (0 - 11), day (1-31), hours (0-23), minutes (0-59), seconds (0-59), milliseconds (0-999));
// const dataSettings = new Date(2023, 2, 1, 23, 12);
// console.log(dataSettings);

// const today = new Date();
// console.log("Full Year", today.getFullYear());
// console.log("Month (index 0 - 11)", today.getMonth());
// console.log("Month Day", today.getDate());
// console.log("Day of week (0 - 6)", today.getDay());
// console.log("Hours", today.getHours());
// console.log("Minutes", today.getMinutes());
// console.log("Milliseconds", today.getMilliseconds());

// const futureDate = new Date();

// futureDate.setDate(1); 
// futureDate.setFullYear(2026); 
// futureDate.setMonth(0); 
// futureDate.setHours(9, 0, 0); 
// console.log('Future date: ', futureDate);

//! ?. --------------------------------

// const user1 = {
//     name: "Alice",
//     age: 52,
//     details: {
//         adress: {
//             city: "New York"
//         },
//         getDetails: () => "I love Monkeys"
//     }
// }

// const user2 = {
//     name: "Steve",
//     age: 52
// }

// const user3 = {
//     name: "Mike",
//     age: 25,
//     details: {
//         adress: {
//             city: "Moskow"
//         }
//     }
// }

// console.log("--- Object ---");
// console.log(user1.details?.adress?.city);
// console.log(user2.details?.adress?.city);
// console.log(user3.details?.zipCode);

// console.log("\n--- Array ---");
// const color = ['red', 'green'];
// console.log(color?.[0]);
// console.log(color?.[2]);
// const emptyArray = null;
// console.log(emptyArray?.[0]);

// console.log("\n--- Metods ---");
// console.log(user1?.details?.getDetails());
// console.log(user2?.details?.getDetails());
// console.log(user3?.details?.getDetails());

//! ?? --------------------------------

const userWithoutCity = {
  name: "Джон",
  details: {
    address: {
    }
  }
};

const userWithEmptyCity = {
  name: "Сара",
  details: {
    address: {
      city: "" 
    }
  }
};

const userWithNoDetails = {
  name: "Питер"
};

//No ??
console.log(userWithoutCity?.details?.address?.city); //* undefined
console.log(userWithEmptyCity?.details?.address?.city); //* ""

//With ??

console.log(userWithoutCity?.details?.address?.city ?? "City not found"); //* City not found
console.log(userWithEmptyCity?.details?.address?.city ?? "City not found"); //* ""
console.log(userWithNoDetails?.details?.address?.city ?? "City not found"); //* City not found

// But be careful: || will also work on 0, false, null, undefined, ""
console.log(userWithEmptyCity?.details?.address?.city || "City not found") //* City not found