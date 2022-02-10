// todo - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// // let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// //
// // let clearPersons = (str) => {
// //     let replaceAll = str
// //         .replaceAll('.', ' ')
// //         .replaceAll('-', ' ')
// //         .replaceAll('_', ' ')
// //     let trim = replaceAll
// //         .replaceAll('   ',' ')
// //         .replaceAll('  ',' ')
// //     return trim
// // }
// // console.log(clearPersons(n1))
// // console.log(clearPersons(n2))
// // console.log(clearPersons(n3))


// todo - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let numRandom = (length, num) => {
    let arrayWithRandomNums = []
    for (let i = 0; i < length; i++) {
     arrayWithRandomNums.push(Math.round(Math.random()*num))
    }
    return arrayWithRandomNums
}
let result = numRandom(12,100)
console.log(result)

// todo - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let sortResult = result.sort()
console.log(sortResult)

// todo - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//  відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filterResult = result.filter(results => results%2 === 0)
console.log(filterResult)

// todo- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let resultMap = result.map(value => value.toString())
console.log(resultMap)

// todo- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arr, direction) => {
    if (direction === 'ascending') return arr.sort((a, b) => a - b)
    else if (direction === 'descending') return arr.sort((a, b) => b - a)
}
console.log(sortNums([9, 74, 100, 48, 61, 22, 32, 79, 37, 2],'ascending'))
console.log(sortNums([9, 74, 100, 48, 61, 22, 32, 79, 37, 2],'descending'))

// - todo є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

let arrSort = coursesAndDurationArray.sort((a, b) => b.monthDuration-a.monthDuration)
console.log(arrSort)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let arrFiltr = coursesAndDurationArray.filter((value) => {return value.monthDuration > 5;})

console.log(arrFiltr)