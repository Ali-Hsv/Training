//! -------------------------------------------------- Работа с обьектоми в js -------------------------------------------------->
//* Обьекты - это фундаментальная часть JavaScript, позволяющая хранить коллекции данных в виде пар "ключ-значение". Они используются повсеместно, от конфигурации настроек до представление сложных сущностей.

//? Оператор "in" ==============================================================================
//? Что это токое и для чего нужно?
//* Рператор in позволяет проверить, существует ли свойство (ключ) в указанном обьекте или в его цепочке прототипов. Он возврощяет true, если свойство найдено, и false в противном случае.

//? Для чего нужен?
//* -- Проверка наличии свойства: Удобен для проверки, есть ли определенное свойство в обьекте, прежде чем пытатся к нему обратится, чтобы избежать ошибок.
//* -- Гибкий поиск: Включает проверку свойств, унаследованных от прототипа, что может быть полезно в определениых сценариях.

//? Синтаксис и примеры:

// const user = {
    // name: "Artem",
    // age: 30,
    // city: "Ney York"
// };

//todo: Проверка наличия собственного свойства - 
//console.log("name" in user); //*true
//console.log("email" in user); //*fale

//todo: Проверка наличия свойства, унаследованного от прототипа 
//todo: Все обьекты наследуют метод toString() от Object.prototype
// console.log("toString" in user) //*true

//todo: Пример использования: условное выполнение кода
// if('age' in user){
    // console.log(`User age is: ${user.age}`)
// }

//todo: Пример с массивом (массивы - это тоже объекты, где индексы - это ключи)
// const names = ["kiril", "anton", "artem", "igor"];
// console.log(0 in names) //true
// console.log(4 in names) //falce (индекса 4 нет)
// console.log('length' in names) //true (свойство length существует)

//? Дополнительная информация:
//* Оператор in полезен, но важно помнить, что он также проверяет унаследованные свойства. Если вам нужно проверить только собственные свойства объекта (не унаследованные), лучше использовать метод Object.hasOwnProperty(), о котором мы поговорим ниже.

//?----------------------------------------------------------------------------------------------------------->
//? JSON (JavaScript Object Notation) ==========================================================

//? Что это такое и для чего это нужно?
//* JSON — это легковесный формат обмена данными, основанный на синтаксисе объектов JavaScript. Несмотря на название, JSON является текстовым форматом, независимым от языка программирования, что делает его идеальным для обмена данными между сервером и клиентом, а также для хранения структурированных данных.

//? Для чего нужен:
//* -- Передача данных: Основное назначение — обмен данными между веб-сервером и клиентом (браузером), например, при отправке запросов API.
//* -- Хранение данных: Используется для сохранения объектов в текстовом виде, например, в localStorage, sessionStorage или файлах конфигурации.

//? Синтаксис и примеры:
//* В JavaScript есть встроенный объект JSON с двумя основными методами:
//* -- JSON.stringify(value): Преобразует JavaScript-значение (объект, массив, число, строку, булево значение или null) в JSON-строку.
//* -- JSON.parse(text): Преобразует JSON-строку обратно в JavaScript-значение.

// const userProfile = {
    // id: 123,
    // name: 'Albert',
    // email: 'alberdodo@gmail.com',
    // isActive: true,
    // hobbies: ['calisthenics', 'programming', 'video games'],
    // adress: {
        // street: 'Main St',
        // number: 32,
        // zip: '12345'
    // }
// }

//todo: 1. Преобразование JavaScript объекта в JSON-строку
// const jsonString = JSON.stringify(userProfile);
// console.log(`JSON - строка: ${jsonString}`);

//todo: Пример использования в localStorage
// localStorage.setItem('userProfileData', jsonString);

//todo: 2. Преобразование JSON-строки обратно в JavaScript объект
// const retrievedJsonString = localStorage.getItem('userProfileData');
// const parsedProfile = JSON.parse(retrievedJsonString);
// console.log(`Обратно в JavaScript объект: ${parsedProfile}`);
// console.log(`Имя пользователя из разобранного объекта: ${parsedProfile.name}`);

//todo: Пример с JSON массивом
// const jsonArrString = '[{"id":1, "item":"Apple"}, {"id":2, "item":"Banana"}]';
// const parsedArr = JSON.parse(jsonArrString);
// console.log("Разобранный JSON массив: " + parsedArr);
// console.log("Первый элемент массива: " + parsedArr[0].item);

//todo: Ошибки при парсинге
// const malformedJson = '{"name": "John", "age": 30,}'; //* Запятая в конце - ошибка
// try{
    // JSON.parse(malformedJson);
// } catch (e){
    // console.error('Ошибка парсинга:', e.message); //* Выведет: Unexpected token } in JSON at position ...
// }

//? Дополнительная информация:
//* -- Формат JSON строгий: Ключи должны быть в двойных кавычках. Строковые значения также в двойных кавычках. В JSON нет комментариев, функций, undefined или Date объектов. При stringify эти типы данных будут проигнорированы или преобразованы в null.
//* -- Вложенность: JSON может представлять глубоко вложенные структуры данных.

//?----------------------------------------------------------------------------------------------------------->
//? Object.keys(), Object.values(), Object.entries() ===========================================

//? Что это такое и для чего это нужно?
//* Это статические методы объекта Object, которые предоставляют удобные способы для получения коллекций (массивов) ключей, значений или пар ключ-значение (записей) из объекта.

//? Для чего нужны:
//* -- Итерация по объекту: Позволяют легко перебрать все ключи, значения или пары ключ-значение объекта.
//* -- Манипуляции с данными: Предоставляют данные в виде массивов, с которыми удобно работать с помощью стандартных методов массивов (map, filter, forEach и т.д.).
//* -- Получение обзора: Быстро получить список всех свойств или их значений.

//? Синтаксис и примеры:

// const product = {
//     id: 'P001',
//     name: 'Laptop',
//     price: 1200,
//     currency: 'USD',
//     inStock: true
// };

//todo: 1. Object.keys(obj): Возвращает массив собственных перечисляемых строковых свойств объекта.
// const keys = Object.keys(product);
// console.log('Keys: ', keys);

//todo: Пример использования: перебор ключей
// keys.forEach(key =>{
//     console.log('Key: ' + key);
// })

//todo: 2. Object.values(obj): Возвращает массив собственных перечисляемых значений свойств объекта.
// const values = Object.values(product);
// console.log('Values: ', values);

//todo: Пример использования: сумма значений (если они числовые)
// const prices = { apple: 12, orange: 15, pineapple: 7};
// //const total = Object.values(prices).reduce((sum, current) => {sum = sum + current; return sum;}, 0); //* Alternative
// const total = Object.values(prices).reduce((sum, current) => sum + current, 0);
// console.log("Total price: " + total + "$");

//todo: 3. Object.entries(obj): Возвращает массив собственных перечисляемых пар [ключ, значение] объекта.
// const entries = Object.entries(product);
// console.log("Пары [ключ, значение]: ", entries);

//todo: Пример использования: перебор пар с деструктуризацией
// entries.forEach(([key, val]) =>{
    // console.log(`Key: ${key} & Value: ${val}`);
// });

//todo: Преобразование массива пар обратно в объект
// const newObj = Object.fromEntries(entries);
// console.log("Объект, созданный из пар:", newObj);

//? Дополнительная информация:
//* Эти методы игнорируют символьные ключи и свойства, которые не являются перечисляемыми (non-enumerable), а также унаследованные свойства. Это важное отличие от for...in и оператора in.

//?----------------------------------------------------------------------------------------------------------->
//? Object.hasOwnProperty() ====================================================================

//? Что это такое и для чего это нужно?
//* Object.hasOwnProperty() — это метод, который возвращает булево значение, указывающее, является ли объект непосредственным (собственным) свойством объекта, а не унаследованным от его цепочки прототипов.

//? Для чего нужен:
//* -- Точная проверка свойств: Гарантирует, что вы проверяете только те свойства, которые были определены непосредственно на объекте, а не те, что пришли из его прототипа.
//* -- Безопасная итерация: Часто используется внутри цикла for...in для фильтрации унаследованных свойств (см ниже).

//? Синтаксис и примеры:

// const car = {
    // color: "red",
    // num: 123115
// }

//todo: Проверяем собственные свойства
// console.log(car.hasOwnProperty('color')) //true
// console.log(car.hasOwnProperty('num')) //true
// console.log(car.hasOwnProperty('nonExistent')) //falce

//todo: Проверяем унаследованное свойство
//todo: toString() унаследован от Object.prototype
// console.log(car.hasOwnProperty('toString')); //falce

//todo: Пример использования для проверки перед доступом
// const data = {count: 5};
// if(data.hasOwnProperty('count')){
    // console.log(`Значение count: ${data.count}`);
// }

// const emptyObj = {};
// if (emptyObj.hasOwnProperty('length')){
    // console.log('У пустого объекта есть length');
// } else{
    // console.log('У пустого объекта нет собственного свойства length');
// }

//? Дополнительная информация:
//* -- Все объекты наследуют метод hasOwnProperty от Object.prototype.
//* -- Всегда используйте hasOwnProperty для проверки собственных свойств, особенно при работе с данными, полученными извне (например, JSON от API), чтобы избежать неожиданного поведения из-за унаследованных свойств.

//?----------------------------------------------------------------------------------------------------------->
//? Цикл for...in ==============================================================================

//? Что это такое и для чего это нужно?
//* Цикл for...in используется для итерации по перечисляемым свойствам объекта, включая те, которые унаследованы по цепочке прототипов.

//? Для чего нужен:
//* Перебор свойств объекта: Позволяет получить доступ к ключам (и, соответственно, к значениям) объекта.

//? Синтаксис и примеры:

// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };

//todo: 1. Простой пример использования for...in
// console.log('--- Итерация с for...in ---');
// for(const key in car){
    // console.log(`Ключ: ${key}, Значение: ${car[key]}`);
// }

//todo: 2. Важно: for...in также перебирает унаследованные свойства!
// const proto = {
    // protoProp: 'I am a prototype Property'
// };
// const myCar = Object.create(proto); //* myCar наследует от proto
// myCar.make = 'Honda';
// myCar.model = 'Civic';

// console.log('--- Итерация с for...in и унаследованными свойствами ---');
// for(const key in myCar){
    // console.log(`Ключ: ${key}, Значение: ${myCar[key]}`);
// ;}

//todo: 3. Рекомендуемый способ: использование with `hasOwnProperty()` для фильтрации
// console.log('--- Итерация с for...in и hasOwnProperty() ---');
// for (const key in myCar){
    // if(myCar.hasOwnProperty(key)){
        // console.log(`Собственный ключ: ${key}, Значение: ${myCar[key]}`)
    // }
// }

//? Дополнительная информация:
//* -- Порядок перебора: Порядок, в котором свойства перебираются с помощью for...in, не гарантирован в старых версиях спецификации, но в современных браузерах он обычно соответствует порядку создания (для нецелочисленных ключей). Целочисленные ключи (например, индексы массива) всегда перебираются в числовом порядке.
//* -- Используйте с осторожностью: Из-за того, что for...in перебирает унаследованные свойства, его часто критикуют. В большинстве современных сценариев для перебора объектов предпочтительнее использовать Object.keys(), Object.values(), Object.entries() или for...of (для итерируемых объектов, таких как массивы).
//* -- for...of против for...in:
//* -- -- for...in используется для итерации по ключам (свойствам) объекта.
//* -- -- for...of используется для итерации по значениям итерируемых объектов (массивы, строки, Map, Set и т.д.). Его нельзя использовать напрямую для обычных объектов.

//! -------------------------------------------------- Задания: -------------------------------------------------->

//? 1. Парсинг данных о пользователях:

// const usersJsonString = '[{"id":1,"name":"Alice","email":"alice@example.com"}, {"id":2,"name":"Bob","email":"bob@example.com"}]';

// const jsObj = JSON.parse(usersJsonString);
// console.log(Object.keys(jsObj));
// console.log(Object.values(jsObj));
// let ent = Object.entries(jsObj)
// ent.forEach(([key, val])=>{
    // console.log(`${key} - ID: ${val.id}, Name: ${val.name}, Email: ${val.email}`);
// });

//? 2. Обработка данных инвентаря:

// const inventory = {
    // apples: 10,
    // bananas: 5,
    // oranges: 12
// };

// function updateInventory(item, quantity){
    // if(inventory.hasOwnProperty(item)){
        // inventory[item] = quantity
    // } else {
        // inventory[item] = quantity
    // }
// 
    // for (const key in inventory){
        // if(inventory.hasOwnProperty(key)){
            // console.log(`${key}: ${inventory[key]}`)
        // }
    // }
    // console.log('===========');
// };

// updateInventory('apples', 15);
// updateInventory('grapes', 8);
// updateInventory('bananas', 0);

//? Задание 3:
const configJsonString = '{"productName":"SuperGadget","version":"2.1","features":{"wifi":true,"bluetooth":true,"gps":false},"settings":{"displayMode":"dark","notifications":true},"components":["Processor","Memory","Storage"]}';

const configJson = JSON.parse(configJsonString);
console.log(configJson)
let keys = Object.keys(configJson);
console.log(`${keys}`);

let featuresVal = Object.values(configJson.features);
console.log(`${featuresVal}`);

let entries = Object.entries(configJson)
entries.forEach(([key, val]) =>{
    console.log(`Key: ${key} & Value: ${val}`);
});