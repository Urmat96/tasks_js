// let dayOfWeek = +prompt('Enter number day of week');

// if (dayOfWeek === 1) {
//     console.log('Пн');
// } else if (dayOfWeek === 2) {
//     console.log('Вт');
// } else if (dayOfWeek === 3) {
//     console.log('Ср');
// } else if (dayOfWeek === 4) {
//     console.log('Чт');
// } else if (dayOfWeek === 5) {
//     console.log('Пт');
// } else if (dayOfWeek === 6) {
//     console.log('Сб');
// } else if (dayOfWeek === 7) {
//     console.log('Вс');
// } else {
//     console.log('Такого дня нет!');
// };






// switch (dayOfWeek) {
//     case 1:
//         console.log('Пн');
//         break;
//     case 2:
//         console.log('Вт');
//         break;
//     case 3:
//         console.log('Ср');
//         break;
//     case 4:
//         console.log('Чт');
//         break;
//     case 5:
//         console.log('Пт');
//         break;
//     case 6:
//         console.log('Сб');
//         break;
//     case 7:
//         console.log('Вс');
//         break;
//     default:
//         console.log('Такого дня нет!');
// }






// const tag = prompt('Как пишется тег div?');

// switch (tag) {
//     case '<div></div>':
//         console.log('Все верно');
//         break;
//     case '<h1></h1>':
//         console.log('Неверно! Это тег для заголовка');
//         break;
//     case '<a></a>':
//         console.log('Неыерно! Это тег для гиперссылки');
//         break;
//     case '<div></div>':
//         console.log('Почти правильно! Не хватает закрывающего тега!');
//         break;  
//     default:
//             console.log('Ты ошибся! Иди учи хтмл!');
// }





// Тернарный оператор-------------------------------------------------------------------------------
// условие ? что если true : что если false;
// let age = 15;
// let canDrive;

// if (age >= 17) {
//     canDrive = true;
// } else {
//     canDrive = false;
// };

// age >= 17 ? canDrive = true : canDrive = false;


// let speed = 50;
// let message = speed >= 110 ? 'Too fast' : speed < 40 && speed >20 ? 'Slow' : speed < 20 ? 'Too slow' : 'Ok';

// console.log(message);




// let data = confirm('Are you admin?');
// console.log(data);

// let name = prompt('Enter name');
// let work = prompt('Enter work');
// let salary = +prompt('Enter salary');
// let exp = +prompt('Enter experience');
// let obj = {
//     name: name,
//     work: work,
//     salary: salary,
//     exp: exp
// };
// // console.log(obj);

// if (obj.exp > 3) {
//     let answer = confirm('все это время ты работал в одной сфере или нет?');
//     if (answ) {
//         obj.salary = obj.salary + 500;
//     };
// };

// console.log(obj);
