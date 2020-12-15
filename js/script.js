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

let numbersOfFilms;



function start() {
    numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

/*start();*/

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

/*rememberMyFilms();*/

function detectPersonalLevel() {
    if (numbersOfFilms >= 0 && numbersOfFilms < 10) {
        console.log('Мало');
    } else if (numbersOfFilms >= 10 && numbersOfFilms < 30) {
        console.log('Средне');
    } else {
        console.log('Много');
    }
}

/*detectPersonalLevel();*/

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



