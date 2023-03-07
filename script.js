// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).

// У міру змін виводити вміст масиву на сторінку.


let lengthArr = Number(prompt("Введіть розмір масиву:"));

let arr = new Array(lengthArr);

for (let index = 0; index < arr.length; index++) {
    arr[index] = Number(prompt("Введіть число для " + (index + 1) + " елементу масива:"))
    if (arr[index] === null || arr[index] === undefined) {
        arr[index] = 0;
    }
}

arr = arr.sort(function(a, b){return a - b});
console.log(arr);
let removeArr = arr.splice(1, 3);
console.log(arr);