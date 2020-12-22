"use strict";

//*********************************************** 1 Переменные

//var name = 'first_name'; // устарело

//const lastName = 'last'; // нельзя менять
//let age = 26;        // можно менять
//const isBulean = true;
//const if = 'err'// err зарезервированное слово
//const withNum5 = '5';
//const 5withNum = '5' // err имя начинается с цифры

/*console.log(name)*/

//const obj = {
//a: 50
//};

//obj.a = 10; // смена значения константы

//{
//let a = 10;   // видны только внутри скобок
//const b = 20;
//}

//console.log('Тут ласт: ' + lastName + ', а тут число: ' + age);
//let num = 4.6; // дроби через точку
//let infinity = (4 / 0);
//console.log(infinity); // при делении на 0

//const bool = true;

//console.log(cc); // null - несуществует

//let und;
//console.log(und); // undefined - переменная существует, но не определена.

//const objNew = {
//name: 'Leonid',
//age: 25,
//isMarried: false // объект
//};

//console.log(objNew.name);
//console.log(objNew['age']);

//let arr = ['first', 'second', 'first'] // миссив это частный случай объекта

//*********************************************** 2 Общение с юзером

//alert ('123');

//const result = confirm("ready?")
//console.log (result);                 //true-false


//const answer = +prompt("Вам есть 18?", "да"); // число
//const answer = prompt("Вам есть 18?", "да"); // строка
//console.log (typeof (answer));                   //ответ строкой

//console.log (answer + 5); // рез-т зависит от типа данных answer

//const answers = [];

//answers[0] = prompt ('Как ваше имя','');
//answers[1] = prompt ('Как ваша фамилия','');
//answers[2] = prompt ('Как ваше отчество','');

//document.write(answers);

//console.log(typeof (answers));
//console.log(typeof (null));


//*********************************************** 3 Интерполяция

//const category = 'toys';
//console.log('htpps://next.html/' + category + '/' + '4');

//console.log(`htpps://next.html/${category}/5`); // контогинация через бэктики `

//const user = 'Ivan';

//alert (`Привет ${user}`); // контогинация через бэктики `


//*********************************************** 4 Операторы

//console.log('arr' + ' - object'); // string
//console.log(4 + ' - object');     // string
//console.log(4 + + ' - object');   // NaN
//console.log(4 + + '5');           // number
//console.log(4 + '5');             // string

//let incr = 10,
//decr = 10;

//incr++; // постфикс сначала возвращает старое значение, после увеличивет
// ++incr; // префикс сначала увеличивает, потом возвращает
//decr--;  --decr;

//console.log(incr+' '+decr);

//console.log(5%2) // остаток от деления

/*
console.log(4*2 == '8') // сравнение true
console.log(4*2 == 8)   // true
console.log(4*2 === 8) //  true строгое сравнение с типом данных
console.log(4*2 === '8') // false строгое сравнение с типом данных

const isChecked = true,
      isClose = true,
      isFalse = false;

console.log(isChecked && isClose); // TRUE
console.log(isClose && isFalse); // false
console.log(isChecked || isFalse); // true
console.log(!isChecked || isFalse); // false
*/


//*********************************************** 6 git

/*dir - обзор папок
cd <folder> - переходи в папку
cd .. - на уровень выше
git status - статус
git add <file> - добавить файл
git add <.folder> - добавить папку
git restore <file> - удалить файл
git commit -m "<message>" - создать коммит
git branch - увидеть ветку
git branch <branch> - создать ветку
git branch -D <branch> - удалить ветку
git checkout <branch> - переход на ветку
git checkout -b <branch> - создать ветку и перейти на неё
git merge <branch> - слияние с другой веткой
git push - залить
mkdir <folder> - создать папку
git clone <code> - выкачать из сети в первый раз
git pull - выкачать последние изменения*/


//git commit -a -m"add script file"
//git push
//git how to

//*********************************************** 7 практика

/*let numbersOfFilms;

numbersOfFilms = prompt('Сколько фильмов уже посмотрели', '');

let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//user["likes birds"] = true;

let answ1 = prompt('Один из последних фильмов:', ''),
    answ2 = prompt('Оценка:', ''),
    answ3 = prompt('Один из последних фильмов:', ''),
    answ4 = prompt('Оценка:', '');

    personalMovieDB={
    movies: {answ1: answ2,answ3: answ4}    // запись объектов
};

personalMovieDB['movies'][answ1]=answ2;      // запись объектов 2
personalMovieDB['movies'][answ3]=answ4;


personalMovieDB.movies[answ1] = answ2;       // запись объектов 3
personalMovieDB.movies[answ3] = answ4;
console.log(personalMovieDB);
*/


//*********************************************** 013 УСЛОВИЯ

/*if (4 == 9) {
    console.log('OK!');
} else {
    console.log('Not OK!');
}*/

//const num = 100;

/*if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('To Much');
} else {
    console.log('Ok!');
}*/

// (num === 50) ? console.log('Ok!') : console.log('Error!'); // тернарный оператор

/*
4 + 4 // бинарный аргумент
+'4' // унарный аргумент


switch (num) {
    case 49:
        console.log('Сорок девять');
        break;
    case 100:
        console.log('Cto');
        break;
    case 50:
        console.log('pyatdes');
        break;
    default:
        console.log('Error');
        break;
}
*/

//*********************************************** 014 ЦИКЛЫ
/*
let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}


for (let i = 1; i < 10; i++) {
    if (i===6) {
        //break;  // прерывание
        continue; // пропуск
    }

    console.log(i);
}
*/

//*********************************************** 015 ПРАКТИКА

/*
let numbersOfFilms;

let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
*/
//user["likes birds"] = true;
/*
do {
    answ1 = prompt('Один из последних фильмов:', '');
    answ2 = prompt('Оценка:', '');
} while (answ1 == '' || answ2 == '' || answ1.length > 50);
*/

/*
for (let i = 0; i < 2; i++) {

    let answ1 = prompt('Один из последних фильмов:', ''),
    answ2 = prompt('Оценка:', '');
    if (answ1 != null && answ2 != null && answ1 != '' && answ1.length < 50) {       // вариант 1
        personalMovieDB.movies[answ1] = answ2;
    } else {
        i--;
    }
}
//personalMovieDB.movies[answ1] = answ2;       // запись объектов 3

console.log(personalMovieDB);

numbersOfFilms = +prompt('Сколько фильмов уже посмотрели', '');

if (numbersOfFilms > 0 && numbersOfFilms < 10) {
    console.log('Мало');
} else if (numbersOfFilms >= 10 && numbersOfFilms < 30) {
    console.log('Средне');
} else {
    console.log('Много');
}


let answ1 = '',
    answ2 = '',
    answ3 = '',
    answ4 = '';

while (answ1 == '' || answ2 == '' || answ1 > 50 || answ1 == null) {     // вариант 2
    answ1 = prompt('Какой фильм', 'first')
    answ2 = prompt('Оценка', '5')
}

while (answ3 == '' || answ4 == '' || answ3 > 50 || answ3 == null) {
    answ3 = prompt('Какой фильм 2', 'sec')
    answ4 = prompt('Оценка 2', '8')
}

personalMovieDB.movies[answ[1]] = answ[2];
personalMovieDB.movies[answ[3] = answ[4];

*/

/*
let answ = [];

for (let i = 1; i < 5; i++) {
    if (i % 2 != 0) {
        while (answ[i] == '' || answ[i] == null || answ[i] > 50) {
            answ[i] = prompt('Какой фильм ' + i, 'first');                  // вариант 3
        }
    } else  {
        while (answ[i] == '' || answ[i] == null) {
            answ[i] = prompt('Оценка ' + i, '5');
        }
    }
    if (i % 2 == 0) {
        personalMovieDB.movies[answ[i - 1]] = answ[i];
    }
}

console.log(personalMovieDB);

*/


//*********************************************** 016 Функции, стрелочные ф-ции (ES6)
/*
function showMess() {
    console.log("Hello func");
}

showMess();


function showText(text) {
    console.log(text);
}

showText("Jonnnn");


function showText(text) {
    console.log(text);
    let num = 20;           // локальная переменная
                            // существует только внутри функции

}

showText("Jonnnn");
console.log(num);

*/

/* let num = 20;                // глобальная переменная

function showText(text) {
    console.log(text);
    num = num + 3;           // глобальная переменная
    //let num = 5;             // локальная переменная
    console.log(num);

}
showText("Jonnnn");
console.log(num);

function calc(a, b) {
    return (a + b);         //возвращает значение, останавливает функцию
}

console.log(calc(3, 5));
console.log(calc(30, 50));

console.log('-------------------------------------------------------');

function ret() {
    let num=43;
    return num;
}

const secondNum = ret();

console.log(secondNum);

console.log('-------------------------------------------------------');

const logger = function () {        // можно вызвать только после объявления
console.log("Expression");
};

logger();

console.log('-------------------------------------------------------');

//const calc = (a, b) => a + b;           // стрелочные функции
const calc3 = (a, b) => {
    console.log('1');
    return a + b
};                                        // стрелочные функции

calc3 (3,8);
*/

//*********************************************** 017 Методы и свойства строк и чисел
/*
const str = 'tEst';

console.log (str.length);

const arr = ['asd', 3, 234];

console.log(arr.length);

console.log(str[2]);

console.log(str);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log("-------------------------------------------------------");

const fruits = "Some fruits";

console.log(fruits.indexOf("fruit"));  // поиск по подстроке
console.log(fruits.indexOf("f"));
console.log(fruits.indexOf("u"));

console.log("-------------------------------------------------------");

const logg = "Hello world";             // поиск по подстроке

console.log(logg);

console.log(logg.slice(6,10));

console.log(logg.slice(6));

console.log(logg.slice(6));

console.log(logg.slice(-5));

console.log("-------------------------------------------------------");

console.log(logg.substring(8));         // поиск по подстроке

console.log("-------------------------------------------------------");

console.log(logg.substr(6, 4)); // поиск по подстроке

console.log("-------------------------------------------------------");

const num = 12.2;
console.log(Math.round(num));      // округление

console.log("-------------------------------------------------------");

const test = "18.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

*/

//*********************************************** 018 Практика , ч3. Используем функции
/*
let numbersOfFilms;



function start() {
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

/*start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Какой фильм вы недавно посмотрели", ""),
            b = prompt("Оценка фильма", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            i--;
        }
    }
}

/*rememberMyFilms();

function detectPersonalLevel() {
    if (numbersOfFilms >= 0 && numbersOfFilms < 10) {
        console.log('Мало');
    } else if (numbersOfFilms >= 10 && numbersOfFilms < 30) {
        console.log('Средне');
    } else {
        console.log('Много');
    }
}

/*detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);

*/

//*********************************************** 019 Callback- функции

/*
function first() {
    setTimeout(function () {
        console.log('first');
    }, 500);
}

function second() {
    console.log('second');
}

first();
second();

console.log("-------------------------------------------------------");

function learnJS(lang, callback) {
    console.log(`test ${lang}`);            // сначала выполняется тело функции
    callback();                             // потом то, что указано в callback
}

function done() {
    console.log('прошел');
}

learnJS('text', done());

*/

//*********************************************** 020 Объекты, методы, деструктуризация объектов (ES6)
/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bd: 'red'
    },
    makeTest: function () {
        console.log('Test_test');
    }
};

//console.log(options.width);

//delete options.name;

//console.log(options);

console.log("-------------------------------------------------------");

let counter = 0;

for (let key in options) {          // перебор объекта
    if (typeof(options[key]) === 'object') {
        for (let k2 in options[key]) {
            console.log(`Свойство ${k2} имеет значение ${options[key][k2]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);

console.log("-------------------------------------------------------");

console.log(Object.keys(options));

console.log(Object.keys(options).length);           // подсчет количества свойств в объекте

options.makeTest();

const {border, bg} = options.colors;                // деструктуризация

console.log(border);

*/

//*********************************************** 021 Массивы и псевдомассивы
/*
const arr = [1, 2, 3, 6, 10];

arr.pop();          // удаление последнего элемента
arr.push(15);       // добавление элемент в конец

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("-------------------------------------------------------");

for (let value of arr) {
    console.log(value);
}

arr[99] = '0';

console.log(arr.length);

console.log(arr);

console.log("-------------------------------------------------------");

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
})
*/
/*
arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);
*/
/*
console.log("-------------------------------------------------------");

const str = 'один,два,три,четыре';
//const str = prompt("products", '');
const arr2 = str.split(",");
console.log(arr2);

const newStr = arr2.join('; ' );
console.log(newStr);

console.log("-------------------------------------------------------");

arr2.sort();

console.log(arr2);

arr2.sort();

console.log("-------------------------------------------------------");

const arr3 = [1, 45, 7, 14, 78, 3]

arr3.sort();

arr3.sort(compareNum);              // сортировка массива с числами

function compareNum(a, b) {
    return a - b;
}

console.log(arr3);
 */

//*********************************************** 022 Передача по ссылке или по значению, Spread оператор (ES6-ES9)
/*
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
}

const copy = obj;                           // передача по ссылке

copy.a = 10

console.log(copy);
console.log(obj);

function copyC(mainObj) {                   // копирование объекта
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const number = {
    a: 1,
    b: 2,
    c: {
        x: 3,
        y: 4
    }
};

const newNumbers = copyC(number);

console.log("-------------------------------------------------------");

console.log(newNumbers);

console.log("-------------------------------------------------------");

const add = {
    d: 17,
    e: 20
};

const addObj = (Object.assign(number, add));        // добавление к объекту

const newObj = (Object.assign({}, add));      // глубокое клонирование объекта

console.log(newObj);

console.log("-------------------------------------------------------");

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[1] = 'asdasd';
console.log(newArr);
console.log(oldArr);

console.log("-------------------------------------------------------");

const arrVideo = ['youtube', 'vimeo', 'rutube'],
      arrBlogs = ['wordpress', 'drupal'],
      arrInternet = [...arrVideo, ...arrBlogs, 'one', 'two'];

console.log(arrInternet);

console.log("-------------------------------------------------------");

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = [
    'a', 'b'
];

const newArray = [...array];  // тоже копирование объектов и массивов

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

console.log(newQ);
console.log(newArray);

console.log("-------------------------------------------------------");

newQ.one = 3;

console.log(q);
console.log(newQ);


*/


//*********************************************** 023 Основы ООП, прототипно-ориентированное наследование
/*
let str = "some";
let strObj = new String(str);
/*
console.log(typeof (str));
console.log(typeof (strObj));

//console.dir([1,2,3]);

const solder = {
    health: 440,
    armor: 60,
    sayHello: function () {
        console.log("Helllo");
    }
};

const john = {
    health: 100
};

//john.__proto__ = solder;

Object.setPrototypeOf(john, solder);

const john2 = Object.create(solder);


//console.log(john.armor);
//john.sayHello();

john2.sayHello();

*/
//*********************************************** 024 Практика , ч4. Используем объекты


let numbersOfFilms;

/*function start() {
    //numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();
*/
const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
            numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Какой фильм вы недавно посмотрели", ""),
                  b = prompt("Оценка фильма", "");
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Done");
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (numbersOfFilms >= 0 && numbersOfFilms < 10) {
            console.log('Мало');
        } else if (numbersOfFilms >= 10 && numbersOfFilms < 30) {
            console.log('Средне');
        } else {
            console.log('Много');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if (a != null && a != "") {
                personalMovieDB.genres[i - 1] = a;
            } else {
                i--;
            }

            if (i === 3) {
                for (let k = 1; k <= 3; k++) {
                    console.log(`Жанр #${k} это ${personalMovieDB.genres[k - 1]}`);
                }
            }
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }

};

personalMovieDB.writeYourGenres();

/*
console.log(personalMovieDB.privat);

personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB.privat);
*/

/*function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Какой фильм вы недавно посмотрели", ""),
            b = prompt("Оценка фильма", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Done");
        } else {
            i--;
        }
    }
}*/

/*rememberMyFilms();*/
/*
function detectPersonalLevel() {
    if (numbersOfFilms >= 0 && numbersOfFilms < 10) {
        console.log('Мало');
    } else if (numbersOfFilms >= 10 && numbersOfFilms < 30) {
        console.log('Средне');
    } else {
        console.log('Много');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);

*/

