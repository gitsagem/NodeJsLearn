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

let numbersOfFilms;

numbersOfFilms = prompt('Сколько фильмов уже посмотрели','');

let personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

//user["likes birds"] = true;

let answ11 = prompt('Один из последних фильмов:','');
let answ12 = prompt('Оценка:','');
let answ13 = prompt('Один из последних фильмов:','');
let answ14 = prompt('Оценка:','');

personalMovieDB={
    movies: {answ11: answ12,answ13: answ14}    // запись объектов
};

personalMovieDB['movies'][answ11]=answ12;
personalMovieDB['movies'][answ13]=answ14;

console.log(personalMovieDB);







