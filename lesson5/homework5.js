//Всі функції повинні бути описані стрілочним типом!!!!

//todo створити функцію яка обчислює та повертає площу прямокутника висотою

// let squareArea = (a,b) => a*b;
// console.log(squareArea(2,7))

//todo створити функцію яка обчислює та повертає площу кола

// let circleArea = (r) => Math.PI*r**2;
// console.log(circleArea(4))

//todo створити функцію яка обчислює та повертає площу циліндру

// let cilindrArea = (r,h) => 2*Math.PI*r*h;
// console.log(cilindrArea(2,3))

//todo створити функцію яка приймає масив та виводить кожен його елемент

// let a=[2,'hello',true,-5]
// let elementsOutput = (arrey) =>{
//     for (let i = 0; i < arrey.length; i++) {
//         console.log(arrey[i])
//     }
// }
// elementsOutput(a)

//todo створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let textInParagraph = (text) => document.write(`<p>${text}</p>`)
// textInParagraph('hello world')

//todo створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ulWith3Li = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// ulWith3Li('hello okten')

//todo створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let ulWithNli = (text,n) => {
//     document.write(`<ul>`)
// for (let i = 0; i < n; i++) {
//     document.write(`<li>${text}</li>`)
// } document.write(`</ul>`)}
// ulWithNli('empty text',4)

//todo створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let liteTemplate = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         document.write(`<ol>${arrayElement}</ol>`)
//     }
// }
// liteTemplate(num=[-3,true,19,'else',45,'hello',false])

//todo створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users =[
//     {id: 12,name: 'vasya', age: 31},
//     {id: 20,name: 'petya', age: 30},
//     {id: 33,name: 'kolya', age: 29},
//     {id: 48,name: 'olya', age: 28},
//     {id: 55,name: 'max', age: 30},
//     {id: 79,name: 'anya', age: 31},
// ];
// let userInfo = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i]
//         document.write(`<div>
//                              <ol>Id - ${arrayElement.id}</ol>
//                              <ol>User name - ${arrayElement.name}</ol>
//                              <ol>User age - ${arrayElement.age}</ol>
//         </div>`)
//     }}
//
// userInfo(users)
