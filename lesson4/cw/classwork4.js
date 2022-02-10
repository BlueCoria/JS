//todo створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minOfThree(a,b,c){
//
//     if (a < b && a < c){
//             console.log(a)
//     }
//     else if (b < a && b < c){
//             console.log(b)
//     }
//     else if (c < a && c < b){
//             console.log(c)
//     }
//     else{console.log('error')}
//
// }
// minOfThree(2,15,7);
// minOfThree(24,13,56);
// minOfThree(55,44,33);

//todo створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxOfThree(a,b,c){
//     if (a > b && a > c){
//         console.log(a)
//     }
//     else if (b > a && b > c){
//         console.log(b)
//     }
//     else if (c > a && c > b){
//         console.log(c)
//     }
// }
// maxOfThree(20,15,3)
// maxOfThree(34,97,44)
// maxOfThree(12,22,44)

//todo створити функцію яка повертає найбільше число з масиву

// function MaxNum(arr){
//     for (let i = 0; i < arr.length; i++) {
//         console.log(Math.max(...arr))
//     }
// }
// maxNum(num1=[96, 33, 67, 27, 32, 61, 57, 51, 62, 92]);
// maxNum(num2=[19, 90, 88, 7, 83, 65, 73, 55, 36, 31])

//todo створити функцію яка повертає найменьше число з масиву

// function minNum(arr){
//     for (let i = 0; i < arr.length; i++) {
//         console.log(Math.min(...arr))
//     }
// }
// minNum(num1=[31, 43, 39, 38, 79, 4, 78, 27, 92, 85]);
// minNum(num2=[40, 96, 32, 8, 43, 37, 19, 71, 15, 38])

//todo створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function numSumm(arr){
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
//     }
//     return result
// }
// console.log(numSumm(num1=[8, 14, 15, 4, 7]))
// console.log(numSumm(num2=[4, 16, 2, 6, 9]))

//todo створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function numAvg(arr){
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]/arr.length
//     }
//         return result
// }
// let result = numAvg(num1=[11, 1, 14])
// console.log(result)

//todo створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax(argument) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log('max ', max);
//     return min;
// }
// minMax(6, 16, 9, 44, 82)

//todo створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function arrCreator(length) {
//     let arr = []
//     for (let i = 0; i < length; i++) {
//         let a = (Math.round(Math.random()*100));
//         arr.push(a)
//     }
//     return arr;
// }
//
// let a = arrCreator(5);
// console.log(a);

//todo створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function arrCreator2(length,limit){
//     let arr =[]
//     for (let i = 0; i < length; i++) {
//         let a = (Math.round(Math.random()*limit))
//         arr.push(a)
//     }
//     return arr
// }
// let a= arrCreator2(prompt('довжина масиву'),prompt('максимальна позначка діапазону'))
// console.log(a)

//todo Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let numArr= [48, 79, 6, 72, 74, 69, 17, 45, 100, 62];
// let arr = []
// function arrRevers (array){
//     for (let i = array.length - 1; i >= 0; i--) {
//         arr.push(array[i])
//     }
// }
// arrRevers(numArr)
// console.log(arr)


