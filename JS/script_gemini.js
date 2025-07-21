//! parseInt()-------------------------

// console.log(parseInt("10"));   //* 10
// console.log(parseInt("10.5")); //* 10 ("." - den sonrasini silir);
// console.log(parseInt("10px"))  //* 10 ("p" - da durdu);
// console.log(parseInt("px10"))  //* NaN (setir ededle baslamir);
// console.log(parseInt("10", 8)) //* 8 (10 - 8 li say sisteminde 8 dir);
// console.log(parseInt("0xF", 16)) //* 15 (0xF - 16 li say sisteminde 15 dir);
// console.log(parseInt("010"))   //* 10 (brauzerlerde 10 say sistemi goturduyune gore 10 olacaq);

//! parseFloat()----------------------

// console.log(parseFloat("10")) //* 10
// console.log(parseFloat("10.5")) //* 10.5
// console.log(parseFloat("10.5px")) //* 10.5 ("p" - da durdu);
// console.log(parseFloat("px10.5")) //* NaN (setir ededle baslamir);
// console.log(parseFloat("3.14e-2")) //* 0.0314 (eksponensial qeydləri idarə edir);

//! Tasks ---------------------------

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

//! sətirlərin Ekranlaşdırması (Escaping) və Konkatenasiyası (Concatenation)

//todo  Ekranlaşdırma (Escaping)
console.log("Bu setirlerde \' isaresini gormek ucun siz \\ simvolundan istifade etmelisiniz");
console.log("Yeni setirden yazmaq ucun \n \\n yazmaniz besdir")
console.log("Tabulasiya (tab) simvolu \t \\t seklinde yazilir")

//todo Konkatenasiya (Concatenation);
const lst = " vasitesi ile setirleri birlesdiririk";

//*1
console.log("1) bunun" + lst);

//*2
const pt1 = "2)";
const pt2 = "bunun";
const res = pt1.concat(" ", pt2, lst);
console.log(res);

//*3
const name = "Ali";
const age = 23;
const like = "cats";

console.log(`My name is ${name}, im ${age} years old, i like ${like}`);
console.log(`My name is ${name}, im ${age} 
  years old,        i like ${like}`);