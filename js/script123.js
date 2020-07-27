/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться иереписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false,
 };
    
function rememberMyFilms(){
    for (let i = 0; i < 2 ; i++) {
        const a = prompt('Один из последних просмотренных фильмов?' , ' '),
              b = prompt('На сколько оцените его?', ' ');
     
        if (a != null && b !=null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
        } else {
            console.log('error');
            i--;
        }
     
     }
}
// rememberMyFilms ();




function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
      console.log("Вы классический зритель");
    }else if (personalMovieDB.count >= 30) {
       console.log("Вы киноман");
    }else {
        console.log("error");
    }
}

// detectPersonalLevel ();


 console.log(personalMovieDB);

 /* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


function start() {
    numberOfFilms = +prompt('How many films u whath`s?' , ' ');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('How many films u whath`s?' , ' ');
    }
}

// start();


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <=3 ; i++) {
        const genre = prompt(`Ваш любимый жанр под номером - ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
 
writeYourGenres();



// ====================================================FUNCTION==========================================

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }
// showFirstMessage("Hello World");
// console.log(num);

// function calc(a, b) {
//     return (a + b);

// }
// console.log(calc(1 , 2));



// function ret() {
//     let num = 50;

//     num -=1;

//     return num;
// }
// const retrNumber = ret();
// console.log(retrNumber);

// // ============================Функциональное выражение========================

// const logger = function() {
//     console.log("Hello");
// };

// logger();


// const calcul = (a, b) =>  {return a + b} ;




// const str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello Worldwdsafasfasfsafafafasfafasfaf";
// console.log(logg.slice(6, logg.length));


// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));



