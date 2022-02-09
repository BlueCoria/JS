// todo створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function calculator() {
//     if (arguments.length === 1) {
//         return arguments[0];
//     } else if (arguments.length === 2) {
//         return arguments[0] + arguments[1]
//     }
// }
//
// let a = (calculator(22))
// console.log(a)
// let b =(calculator('true ','play'))
// console.log(b)

//todo створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//EXAMPLE: [1,2,3,4],[2,3,4,5]      результат: [3,5,7,9]

// let nums1 = [8, 6, 2, 13, 9]
// let nums2 = [16, 19, 14, 1, 7]
// let arrSum =[]
// function sumTwoArr (array1,array2){
//
//     for (let i = 0 ; i < 5 ;i++) {
//         let summ = array1[i] + array2[i]
//         arrSum.push(summ)
//     }
// }
//     sumTwoArr(nums1,nums2)
//     console.log(arrSum)


//todo Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// let arrResult = []
// function arrKey (array){
//     for (let i = 0; i < array.length; i++) {
//         result = array[{object}]
//         arrResult.push(result)
//     }
// }
// arrKey(arr)
// console.log(arrResult)
// todo Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
arrResult = []
function arrKey (array){
    for (let i = 0; i < array.length; i++) {
        let arrayElement = array[i];
        result =array.values()
        console.log(result)
    }

}
arrKey(arr)
// console.log(arrResult)