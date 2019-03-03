'use strict';

a = 5;
console.log (a);

var number = 5;         //числа
var string = "Hello!";  // строки
var sum = Symbol();     // символ
var boolean = true;     // логический тип данных true или false
null;                   // 
undefined;              //
var obj = {};         // объект для хранения любых данных

console.log (4/0);      // результат бесконечность (Infinity)
console.log ('string'*9); // результат NaN

let something;
console.log(something);

// Пример создания объекта (Какой-то человек)
let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
// примеры вывода значения этого объекта (имя)
console.log(persone.name);
console.log(persone["name"]);

// массив:
let arr = ['plumb.png','orange.jpg','apple.bmp'];
// вывод элемента массива (нумерая идет с нуля 0) = вывод: apple.bmp
console.log(arr[2]);

//alert("Hello World!"); // пока не нажмем ОК все скрипты дальше не работают

// окно запроса - выбор ок или отмена
// let answer = confirm ("Are you here?");
//console.log (answer); //вывод результата окна в консоль

//let answer = prompt ("Есть ли вам 18 лет?", "Да");
//console.log (answer); //вывод результата окна в консоль
//вся информация приходящая от пользователя - это строка
// для проверки сделаем вывода типа переменной, всегда будет string
//console.log (typeof(answer));

// Для массива исключение - тип будет object
//console.log (typeof(arr));
//console.log (typeof(null)); // null - Тоже будет иметь тип: object

//когда ставим + (унарный плюс) перед переменной - он преобразует переменную в number
// let answer = +prompt ("Есть ли вам 18 лет?", "Да"); 
// console.log (typeof(answer));
// console.log ("arr" + " - object");
// console.log (4 + +" - object");

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);

console.log(5%2);  // оператор % - возвращает остаток от деления 2х чисел

// = присваивание
// == сравнение по значению
// === строгое сравнивание по типам данных
console.log("2" == 2); // вернет true
console.log("2" === 2); // вернет false, т.к. идет сравнение по типам данных.

let isCheked = true,
    isClose = false;
 
console.log(isCheked && isClose); // Оператор "и" Вернет false
console.log(isCheked || isClose); // Оператор "или" Вернет true
console.log(isCheked || !isClose); // Оператор "или" и оператор отрицания Вернет true
// Оператор отрицания !isClose = обращает значение в обратное 