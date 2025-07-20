//? <=============================оператор typeof=============================>
/*
    Оператор typeof используется для определения типа значения переменной или выражения.
    Он возвращает строку, в которой написан тип, например: "string", "number", "boolean" и т.д.

    Это удобно, когда ты хочешь понять, с каким типом данных работаешь, особенно если значения приходят извне (например, из формы или API).
*/

typeof "Привет";      // "string"
typeof 123;           // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object"  ← особенность JavaScript
typeof {};            // "object"
typeof [];            // "object"
typeof function(){};  // "function"
typeof NaN;           // "number"
//!🧠 Обрати внимание:
//todo: typeof null возвращает "object" — это известная ошибка языка, которая не будет исправлена.
//todo: typeof NaN — вернёт "number", хотя значение "Not a Number".

//! Если хочешь проверить, является ли объект массивом, используй:
//* Array.isArray([1, 2, 3]); // true

//! Варианты применения:
//* if(typeof age == "number"){
//*     console.log("This is number");
//* }

//* if(typeof name !== "undefined"){
//*     console.log("U dont wright the name")
//* }

//!📝 Домашнее задание:
// console.log(typeof "hello");
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof [1,2,3,4]);
// console.log(typeof {age: 24});
// fun = () => {console.log("Hellow")} 
// console.log(typeof fun);

// let userInput = "5"
// console.log(userInput)
// if(typeof userInput == "string"){
//     userInput = +(userInput)
// }
// console.log(userInput)

//? =============================switch/case, тернарный оператор=============================
/*
    switch используется как альтернатива множественным if...else if. Удобен, когда нужно сравнить одно значение с многими вариантами.
*/

//!Синтаксис
//* switch (значение) {
//*   case вариант1:
//*     / код
//*     break;
//*   case вариант2:
//*     / код
//*     break;
//*   default:
//*     / код, если ничего не совпало
//* }

//! Варианты применения:
//* let day = 3;

//* switch (day) {
//*   case 1:
//*     console.log("Понедельник");
//*     break;
//*   case 2:
//*     console.log("Вторник");
//*     break;
//*   case 3:
//*     console.log("Среда");
//*     break;
//*   default:
//*     console.log("Другой день");
//* }

//? ==Тернарный оператор (? :)==

/*
    Это короткий способ записать if...else. Используется, когда нужно выбрать одно из двух значений.
*/
//!Синтаксис
//* условие ? значение_если_истина : значение_если_ложь;

//! Варианты применения:
//* let age = 18;
//* let canVote = age >= 18 ? "Можно голосовать" : "Слишком молод";
//* console.log(canVote); // "Можно голосовать"

//!📝 Домашнее задание:
// let color = "green"
// switch(color){
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Wait");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("No color")
// }

// let score = 75;
// let name = score >=60 ? "Сдал" : "Не сдал"
// console.log(name);

// let user = "admin";
// let isThatAdmin = user == "admin" ? "Добро пожаловать, админ" : "Нет доступа";
// console.log(isThatAdmin);

//? ================================== Массивы ==================================

/*
    Массив — это специальный объект, который хранит упорядоченную коллекцию значений.
    В массиве данные располагаются в порядке и к каждому элементу можно обратиться по его индексу (порядковому номеру), который начинается с нуля.

    Массивы нужны для хранения нескольких значений в одной переменной, чтобы удобно с ними работать (перебор, добавление, удаление и т.д.).
*/

//!Синтаксис
//* / Пустой массив
//* let arr = [];

//* / Массив с начальными значениями
//* let fruits = ["alma", "armud", "saftali"];
//todo: индекс
//* let fruits = ["яблоко", "банан", "апельсин"];
//* console.log(fruits[0]); // "яблоко"
//* console.log(fruits[1]); // "банан"
//* console.log(fruits[2]); // "апельсин"

//! Варианты применения:

//*let numbers = [10, 20, 30, 40];

//* /Получить первый элемент
//*console.log(numbers[0]); // 10

//* /Изменить третий элемент
//*numbers[2] = 35;
//*console.log(numbers); // [10, 20, 35, 40]

//* /Длина массива
//*console.log(numbers.length); // 4

//? ================================Важные методы массивов======================
// push()	    Добавляет элемент(ы) в конец массива	                    arr.push(5);
// pop()	    Удаляет последний элемент и возвращает его	                let last = arr.pop();
// shift()	    Удаляет первый элемент и возвращает его	                    let first = arr.shift();
// unshift()	Добавляет элемент(ы) в начало массива	                    arr.unshift(0);
// indexOf()	Возвращает индекс первого вхождения элемента	            arr.indexOf(5);
// includes()	Проверяет, есть ли элемент в массиве	                    arr.includes(3);
// slice()	    Возвращает новый массив с частью исходного	                arr.slice(1,3);
// splice()	    Добавляет/удаляет элементы из массива	                    arr.splice(2,1,99);
// forEach()	Перебирает массив, выполняет функцию для каждого элемента	arr.forEach(el => console.log(el));
// map()	    Создаёт новый массив, преобразуя элементы	                arr.map(x => x * 2);
// filter()	    Создаёт новый массив из элементов, удовлетворяющих условию	arr.filter(x => x > 10);
// reduce()	    Сводит массив к одному значению, применяя функцию	        arr.reduce((sum, x) => sum + x, 0);
// sort()	    Сортирует массив (по умолчанию по строкам)	                arr.sort();

//! Применения:
//* let arr_2= [10, 20, 30];
// * let arr = [10, 20, 30];
//* console.log(arr + " - default ");

//* arr.push(40);
//* console.log(arr + " - push ");

//* let last = arr.pop();
//* console.log(last);
//* console.log(arr + " - pop ");

//* let first = arr.shift()
//* console.log(first);
//* console.log(arr + " - shift ");

//* arr.unshift(10);
//* console.log(arr + " - unshift ");

//* console.log(arr.indexOf(30) + " - indexOf ");
//* console.log(arr.includes(35) + " - includes ");

//* let newArr = arr.slice(1,3) //(+ 1 в индекс)
//* console.log( newArr + " - slice");

//* arr.splice(1, 1, 25)
//* console.log(arr + " - splice") //( 0 - сколько элементов, 1 - индекс, 25 - замена)

//* arr.forEach(num => {
//*     console.log(num + " - forEach ")
//* })

//* let newarr_2 = arr.map(x => (x * 2) + 3);
//* console.log(newarr_2 + " - map ");

//* let filt = arr.filter(num => num > 20);
//* console.log(filt + " - filter");

//* let sum = arr_2.reduce((acc, x) => acc + x, 0);
//* // Первый шаг: acc = 0, x = 10 → 0 + 10 = 10
//* // Второй шаг: acc = 10, x = 20 → 10 + 20 = 30
//* // Третий шаг: acc = 30, x = 30 → 30 + 30 = 60

//* console.log(sum); // 60

//* let nums = [2, 3, 4];
//* let result = nums.reduce((acc, x) => acc * x, 1);
//* // 2 * 3 = 6 → 6 * 4 = 24
//* console.log(result); // 24

//* let nums_2 = [5, 10, 22, 3];
//* let max = nums_2.reduce((acc, x) => x > acc ? x : acc, nums_2[0]);
//* console.log(max); // 22

//* let letters = ['a', 'b', 'a', 'c', 'b', 'a'];
//* let counts = letters.reduce((acc, char) => {
//*   acc[char] = (acc[char] || 0) + 1;
//*   return acc;
//* }, {});

//* console.log(arr.sort())

//!📝 Домашнее задание:
// let numbers = [15, 3, 20, 8, 42, 7, 10];

// numbers.push(25);
// console.log(numbers)
// let last = numbers.shift();
// console.log(last, numbers);
// numbers.splice(1,1,99);
// console.log(numbers);
// let numbers_2 = numbers.filter(x => x > 10)
// console.log(numbers_2);
// let numbers_3 = numbers.map(x => x * 2)
// console.log(numbers_3);
// let numbers_4 = numbers.reduce((acc, x) => acc * x, 1);
// console.log(numbers_4);
// console.log(numbers.sort((a,b) => a - b));
// let numbers_5 = numbers.forEach(x => {
//     console.log(`Element: ${x}`)
// });

//? ======================Объекты======================

/*
    Объект — это структура данных, которая позволяет хранить значения в паре: ключ → значение (key → value).

    Это как ящик, где у каждого предмета есть имя (ключ) и его содержимое (значение).

    Объекты очень гибкие — ты можешь хранить всё: строки, числа, массивы, функции, даже другие объекты.
*/


//!Синтаксис
// Способ 1
//* let user = {
//*   name: "Ali",
//*   age: 25,
//*   isAdmin: true
//* };

// Способ 2
//* let user = new Object();
//* user.name = "Ali";
//* user.age = 25;

// обращаться к данным объекта
//* console.log(user.name); // "Ali"
// Через квадратные скобки (если ключ — строка или переменная):
//* console.log(user["age"]); // 25
// ?Как изменять объект
//* user.age = 30;         // изменить
//* user.city = "Baku";    // добавить
//* delete user.isAdmin;   // удалить

//! Применения:

//* let car = {
//*   brand: "BMW",
//*   model: "X5",
//*   year: 2022,
//*   isElectric: false
//* };

//* console.log(car.brand);       // "BMW"
//* car.year = 2023;              // изменить
//* car.color = "black";          // добавить новое свойство
//* delete car.isElectric;        // удалить свойство


//!📝 Домашнее задание:

// let persone = {
//     name: "Alex",
//     age: 23,
//     hobbies: ["footbal", "programing", "videogame"],
//     isStudent: false,
// }
// console.log(persone);

// console.log(`This is ${persone.name}, he have ${persone.age}`);
// console.log(`The ${persone.name} firs hobbie is ${persone.hobbies[0]}`);
// console.log(`Is ${persone.name} student? - ${persone.isStudent}`);
// persone.sity = "Russian, Moskow sity";
// console.log(persone);
// delete persone.isStudent;
// persone.name = "Kiril";
// console.log(persone.name);

//? ======================Операторы======================

/*
    Операторы — это символы или ключевые слова, с помощью которых мы производим действия с переменными и значениями: сравнение, вычисление,       проверка и  т.д.
*/

//!Синтаксис

//TODO: 🟨 1. Операторы Сравнения

//*  ==	    Равенство (без проверки типа)	5 == "5" → ✅ true
//*  ===	Строгое равенство (с типом)	    5 === "5" → ❌ false
//*  !=	    Неравенство (без типа)	        3 != "3" → false
//*  !==	Строгое неравенство	            3 !== "3" → true
//*  >	    Больше	                        7 > 5 → true
//*  <	    Меньше	                        7 < 5 → false
//*  >=	    Больше или равно	            5 >= 5 → true
//*  <=	    Меньше или равно	            4 <= 3 → false

//?     🟦 2. Унарные операторы
//* +	    Преобразует в число	             +"5" → 5
//* -	    Преобразует в отрицательное	     -"7" → -7
//* ++	    Увеличивает на 1 (a++ или ++a)	
//* --	    Уменьшает на 1 (a-- или --a)	
//* typeof	Возвращает тип	                 typeof "abc" → string
//* !	    Логическое "НЕ"	                 !true → false

//!     🟥 3. Арифметические операторы
//* +	    Сложение	            2 + 3  =	5
//* -	    Вычитание	            10 - 4 =	6
//* *	    Умножение	            2 * 5  =	10
//* /	    Деление	                10 / 2 =	5
//* %	    Остаток от деления	    7 % 2  =	1
//* **	    Возведение в степень	2 ** 3 =	8

//*    🟩 4. Оператор in
//Используется для проверки, есть ли ключ в объекте.
//* let user = { name: "Ali", age: 20 };

//* console.log("name" in user); // true
//* console.log("city" in user); // false


//? ======================Самовызывающаяся функция (IIFE)======================
/*
    IIFE (Immediately Invoked Function Expression) — это функция, которая вызывается сразу же после определения.
*/

//!Синтаксис + 📝 Домашнее задание:
// (function (name) {
//     console.log("Im IIFE function!");
//     console.log("Hellow my name is " + name);
// }) ("ali");

//? ======================window======================
//* console.log(window);
//* console.log(window.innerWidth);
//* console.log(document.title);
//* console.log(document.body);
//* console.log(document.URL);
// и тд.

//? ======================События======================

/*
    Событие — это действие пользователя или браузера: клик, ввод текста, прокрутка, нажатие клавиши и т.д.

    JavaScript может отслеживать эти события и выполнять код в ответ на них.
*/

//! Основной метод — addEventListener()
//todo: element.addEventListener("тип_события", callback);

//!  Пример:
//* const button = document.getElementById("myBtn");

//* button.addEventListener("click", () => {
//*   alert("Кнопка нажата!");
//* });

//!Удалить обработчик — removeEventListener()
//!Чтобы удалить событие, обработчик должен быть именованной функцией.
//* function showMessage() {
//*   alert("Удалится позже");
//* }
//* 
//* button.addEventListener("click", showMessage);
//* 
//* / Удалить
//* button.removeEventListener("click", showMessage);

//!Типы событий (основные):
//* click	    при клике мыши
//* dblclick	двойной клик
//* input	    при вводе в <input> или <textarea>
//* change	    когда значение элемента изменено
//* keydown	    при нажатии клавиши
//* keyup	    при отпускании клавиши
//* scroll	    при прокрутке окна или элемента
//* resize	    при изменении размера окна
//* submit	    при отправке формы
//* mouseover	курсор зашёл на элемент
//* mouseout	курсор ушёл с элемента

//!  Пример использования разных событий:

//* window.addEventListener("resize", ()=>{
//*     console.log(`Window change weight to: ${window.innerWidth}`)
//* });

//* window.addEventListener("keydown", (x)=>{
//*     console.log(`U click keyy ${x.key}`);
//* });

//* window.addEventListener("keypress", (x)=>{
//*     console.log(`You press keyy ${x.key}`);
//* });

//* window.addEventListener("scroll", ()=>{
//*     console.log(`Прокрутка: ${window.scrollY}`);
//* });

//* let input = document.getElementById("myInput");
//* input.addEventListener("input", ()=>{
//*     console.log("Текущий текст:", input.value);
//* });

//!📝 Домашнее задание:
// const button = document.getElementById("myButton");
// let click = 0;
// button.addEventListener("click", ()=>{
//     click++;
//     alert("You click the button! - " + click)
// });

// let input = document.getElementById("myInput");
// input.addEventListener("input", ()=>{
//     console.log("Текущий текст:", input.value);
// });

// window.addEventListener("keydown", (x)=>{
//         console.log(`U click keyy ${x.key}`);
// });

// window.addEventListener("scroll", ()=>{
//         console.log(`Прокрутка: ${window.scrollY}`);
// });

//? ========================Хранилища (Web Storage API): localStorage и sessionStorage========================
//! Для чего нужны:
//* localStorage: Используется для хранения данных, которые должны сохраняться даже после закрытия браузера или вкладки. Данные в localStorage не имеют срока действия. Идеально подходит для:
//*     Сохранения пользовательских настроек (например, темная/светлая тема).
//*     Сохранения данных корзины покупок (если пользователь не залогинен).
//*     Кэширования данных, которые нечасто меняются.

//* sessionStorage: Используется для хранения данных, которые должны быть доступны только в течение одной сессии браузера (то есть, пока вкладка или окно открыты). Как только вкладка или окно закрываются, данные из sessionStorage удаляются. Подходит для:
//* Хранения данных, специфичных для текущей сессии пользователя (например, данные из форм, чтобы не терять их при перезагрузке страницы).
//* Отслеживания состояния пользователя внутри одной сессии.

//! Синтаксис и примеры использования:
//* Оба localStorage и sessionStorage имеют одинаковый API.
//* Основные методы:
//* setItem(key, value): Сохраняет пару ключ-значение. Значение всегда хранится как строка.
//* getItem(key): Получает значение по ключу.
//* removeItem(key): Удаляет пару ключ-значение по ключу.
//* clear(): Удаляет все данные из хранилища.
//* length: Свойство, возвращающее количество сохраненных элементов.

//todo --- Использование localStorage ---

//* 1. Сохранение данных
//localStorage.setItem('username', 'Alice');
//localStorage.setItem('theme', 'dark');

//const userSettings = {
//    fontSize: '16px',
//    layout: 'grid'
//};
//! Важно: объекты и массивы нужно преобразовывать в JSON-строки для хранения
//localStorage.setItem('userSettings', JSON.stringify(userSettings));

//* 2. Получение данных
//const storedUsername = localStorage.getItem('username');
//console.log('Пользователь из localStorage:', storedUsername); // Выведет: Alice

//const storedTheme = localStorage.getItem('theme');
//console.log('Тема из localStorage:', storedTheme); // Выведет: dark

//const retrievedSettingsString = localStorage.getItem('userSettings');
//const retrievedSettings = JSON.parse(retrievedSettingsString); // Преобразуем обратно в объект
//console.log('Настройки пользователя из localStorage:', retrievedSettings);
//console.log('Размер шрифта:', retrievedSettings.fontSize); // Выведет: 16px

//* 3. Удаление данных
//* localStorage.removeItem('theme'); // Удалит 'theme'
//* console.log('Тема после удаления:', localStorage.getItem('theme')); // Выведет: null

//* 4. Очистка всего хранилища
// localStorage.clear(); // Удалит все данные из localStorage
//console.log('LocalStorage после очистки:', localStorage.length); // Выведет: 0


//todo --- Использование sessionStorage ---

//* 1. Сохранение данных
//sessionStorage.setItem('tempData', 'Это временные данные');
//sessionStorage.setItem('lastPageVisited', '/products');

//* 2. Получение данных
//const tempData = sessionStorage.getItem('tempData');
//console.log('Временные данные из sessionStorage:', tempData); // Выведет: Это временные данные

//* 3. Удаление данных
//* sessionStorage.removeItem('lastPageVisited');

//* 4. Очистка всего хранилища
//* sessionStorage.clear();

