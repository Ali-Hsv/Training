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

//! -----Task_#1-----
console.log('1)------------------');

let jsObj = {
    title: "THis is a title",
    author: "Magamagoma Latotiu"
};
console.log("year" in jsObj);
console.log(JSON.stringify(jsObj));

//! -----Task_#2-----
console.log('2)------------------');

const productsJson = '[{"id":1,"name":"Laptop","price":1200},{"id":2,"name":"Mouse","price":25}]';

const productOnj = JSON.parse(productsJson);

console.log(Object.keys(productOnj[1]));
console.log(Object.values(productOnj[1]));
console.log(Object.entries(productOnj[1]));

//! -----Task_#3-----
console.log('3)------------------');

const myCar = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  owner: { name: "John Doe" }
};

function logObjectProperties(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

logObjectProperties(myCar);