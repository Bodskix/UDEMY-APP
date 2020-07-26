/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// 'use strict';

// const numberOfFilms = +prompt('How many films u whath`s?' , ' ');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?' , ' '),
//       b = prompt('На сколько оцените его?', ' '),
//       c = prompt('Один из последних просмотренных фильмов?', ' '),
//       d = prompt('На сколько оцените его?', ' ');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// if (4 == 9) {
//     console.log('OK!');
// }else {
//     console.log('eroro');
// }



// if (num < 49) {
//     console.log('eroror');
// }else if (num > 100) {
//     console.log("mnoga");
// }else {
//     console.log('kk!');
// }



// (num === 50) ? console.log('ok') : console.log('eroroeor');

// const num = 50;

// switch(num) {
//     case 49:
//         console.log('eroro');
//         break;
//     case 50:
//         console.log('ok');
//         break;

//     default : 
//         console.log('не в мою смену');
//         break;

// }

// ----------ЦЫКЛЫ!!!!!!!!!!

let num = 50;

while(num <= 55) {
    console.log(num);
    num++;
}




do {
    console.log(num);
    num++;
}
while (num < 55)



for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        // break;
        // continue; ------ позволяет пропустить шаг не прирывая цыкл
    }
    console.log(i);
}