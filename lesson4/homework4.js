//todo створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRectange (a,b){
//
//     return a*b;
// }
// let result = areaRectange(3,7)
// console.log(result);

//todo створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaRound(r){
//  return Math.PI*r**2
// }
// let result = areaRound(10)
// console.log(result)

//todo створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//  function areaCylinder(h,r){
//   return 2*Math.PI*r*h
//  }
//  let result = areaCylinder(5,7)
// console.log(result)

//todo створити функцію яка приймає масив та виводить кожен його елемент

// function arrayOutput(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let arrElements = arr[i]
//         console.log(arrElements)
//     }
// }
//         arrayOutput(array = ['hello',true,'okten',22,'mentor','have',33,'nice','day'])

//todo створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function createPar(a){
// document.write(`<p>${a}</p>`)}
//
//  createPar(prompt('a'))

//todo створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.

// function listCreator (a){
//    document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`/<ul>`)
// }
// listCreator(prompt(`a`))

//todo створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function listCreator (counter, b){
//     document.write(`<ul>`)
//     for (let i = 0; i < counter; i++) {
//     document.write(`<li>${b}</li>`)}
//     document.write(`</ul>`)
// }
// listCreator(prompt('number'), prompt(`b`))

//todo створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function primitiveArrey(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let arrElement = arr[i];
//         document.write(`<ol>${arrElement}</ol>`)
//     }
// }
// primitiveArrey(num=[12,'hello',true,33,false,-99,'you',34,true,'are',43,'cool'])

//todo створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//вибачаюсь але фантазії не було щоб створити свій масив тому запозичила з файлу масивів і трішки його змінила

// let users = [
//     {id: 12,name: 'vasya', age: 31},
//     {id: 20,name: 'petya', age: 30},
//     {id: 33,name: 'kolya', age: 29},
//     {id: 48,name: 'olya', age: 28},
//     {id: 55,name: 'max', age: 30},
//     {id: 79,name: 'anya', age: 31},
// ];
//
// function usersDocument(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let arrElement = arr[i];
//         document.write(`<div>
//                              <li>Id - ${arrElement.id}</li>
//                              <li>User name - ${arrElement.name}</li>
//                              <li>User age - ${arrElement.age}</li>
//         </div>`)
//
//     }
// }
// usersDocument(users)
