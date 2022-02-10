// Всі функції повинні бути описані стрілочним типом!!!!
//todo - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let numMin = (a,b,c) => {
//     if (a<b && a<c){console.log(a)}
//     else if (b<a && b<c){console.log(b)}
//     else if (c<a && c<b){console.log(c)}
// }
// numMin(35,43,52)

//todo - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let numMax = (a,b,c) =>{
//     if (a>b && a>c){console.log(a)}
//     else if (b>a && b>c) {console.log(b)}
//     else if (c>a && c>b) {console.log(c)}
// }
// numMax(87,56,83)

//todo - створити функцію яка повертає найбільше число з масиву

// let nums = [16, -23, 24, -17, -31, 41, 11, 39, 42, 27]
//
// let reversMaxNum = (arr) => Math.max(...arr)
//
// console.log(reversMaxNum(nums))

//todo - створити функцію яка повертає найменьше число з масиву

// let nums = [-17, -27, -5, 17, 22, -50, -3, -35, -14, 3]
//
// let reversMinNum = (array) => Math.min(...array)
//
// console.log(reversMinNum(nums))

//todo - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let nums =[9, 35, 46, 2, 50]
//
// let arrSum = (array) => {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//          result +=array[i]
//     }
//     return result
//     }
//
// console.log(arrSum(nums))

//todo - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let nums = [9, 35, 46, 2, 50]
//
// let arr = (array) => {
//     let result = 0
//     for (let i = 0; i < array.length; i++) {
//         result += array[i]
//     }
//     return result / array.length
// }
//
// console.log(arr(nums))

//todo - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

 // let minMax = (...arr) => {
 //    let min = arr[0];
 //    let max = arr[0];
 //    for (let arrElement of arr) {
 //         if (arrElement > max) {max = arrElement}
 //         if (arrElement < min) {min = arrElement}
 //    }
 //    console.log(max);
 //    return min
 // }
 // minMax(16, 44, 47, 22, 25, 49, 31, 28, 50, 40)

//todo - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.]

// let numRandom = (length) => {
//     let array = []
//     for (let i = 0; i < length; i++) {
//         let a =(Math.round(Math.random()*100))
//         array.push(a)
//     }
//     return array
// }
// console.log(numRandom(5))

//todo - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let numRandom = (length,quantity) => {
//     let array = []
//     for (let i = 0; i < length; i++) {
//         let a =(Math.round(Math.random()*quantity))
//         array.push(a)
//     }
//     return array
// }
// console.log(numRandom(5,10))

//todo - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let numArr= [10, 11, 24, 9, 6];
// let arr = []
// let arrRevers = (array) =>{
//     for (let i = array.length - 1; i >= 0; i--) {
//         arr.push(array[i])
//     }
// }
// arrRevers(numArr)
// console.log(arr)