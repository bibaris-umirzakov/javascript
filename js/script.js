// "use strict"; тек жаңа версиямен жұмыс жасау үшін

// a = 15;
// console.log(a);   //ескі версия



// let number = 5;  //ауыспалы переменный

// number = 10;

// const _name = "Айдар"; //ауыспайтын переменный


// const obj = {
//     a: 1,
// }

// obj.a = 2;

// console.log(obj.a);


// const carBodyWidth = 2000;
// const carBodyHeight = 1000;


// console.log("Машинанын узындыгы " + carBodyWidth + ", ени " + carBodyHeight);

//var разница undifined console.log(name);


// var name = "Айдар";



// Переменныйлардын названиялары

// camelCase
// snake_case
// PascalCase
// UpperCamelCase
// lowerCamelCase
// UPPER_SNAKE_CASE
// lower_snake_case



// Задачи:

//     Создайте переменную, которая будет отображать имя пользователя. (Пользователь - user, имя - name). В неё поместите значение "John"

//     На следующей строке создайте переменную, отображающую номер пользователя (номер - number). В неё поместите значение 25.

//     Измените значение второй переменной с 25 на 24 на следующей строке.

const userName = "John";
let userNumber = 25;
userNumber = 24;



// Типы данных


// Числа


let number = 5.6;

console.log(4/0); //infinity
console.log('string' * 9); //NaN


//Строки

const persone = "Айдар";
const age = "25";


//Boolean

const bool = true;
const bool2 = false;

//null

// console.log(something); //null

//undefined

let und;
console.log(und); //undefined

//Объекты

const obj = {
    name: "Айдар",
    age: 25,
    isMarried: false
}

console.log(obj.name);
console.log(obj["name"]);

//Массивы

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];



//Разница между объектами и массивами

//Объекты - это структура, которая используется для хранения данных в формате ключ: значение

//Массивы - это структура, которая используется для хранения данных в виде списка


const arr1 = [1, 2, 3, 4, 5];

console.log(arr1[0]);


const obj1 = {a: 1, b: 2, c: 3};

console.log(obj1.a);


const obj2 = {
    Anna: 500,
    'John': 1000,
}

console.log(obj2['Anna']);