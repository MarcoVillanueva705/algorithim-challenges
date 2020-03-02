// const arr = [1, 2, 3, 4, 5, 6]

// let a = arr[0]
// let b = arr[1]

// console.log(a)
// console.log(b)


NOTE //Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

// function frames(minutes, fps) {
//     let result = minutes * (fps *60)
//     return result;
//     frames(10, 1)
//     }

NOTE //Create a function to concatenate two integer arrays.  This uses SPREAD syntax

// function concat(arr1, arr2) {
//     let arr3 = [...arr1, ...arr2]
//         return arr3;
//     }
//     concat([7, 8], [10, 9, 1, 1, 2])

NOTE //Create a function that finds the index of a given item.

// function search(arr, item) {
// 	for (let i=0; i < arr.length; i++) {
// 		if (arr[i] == item) {
//             console.log (i)
// 			return i;
// 		}
// 	}
// 	return (-1);
// }
// search([1, 5, 3], 5)

NOTE //Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

// const helloName = name => `Hello ${name}!`

// helloName("Gerald")

NOTE //Write a function to reverse an array.

// function reverse(arr) {
// 	arr.reverse()
// 	return arr
// }
// reverse([1, 2, 3, 4])

// //OR

// function reverse(arr) {
// 	let newArr = [];
// 	for (let i = arr.length -1; i > -1; i--) {
// 		newArr.push(arr[i]);
// 	}
	
// 	console.log(newArr);
// 	return newArr;
// }
// reverse([1, 2, 3, 4])

NOTE //Create a function that searches for the index of a given item in an array. If the item is present, 
//it should return the index, otherwise, it should return -1.

// function search(arr, item) {
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i] == item){
// 			return i
// 		}
// 	}
// 	return -1
// }
// search([1, 2, 3, 4], 3)

NOTE //Create a function that takes in a current mood and return a sentence in the following format: 
//"Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

//function moodToday(mood) {
// if(mood){
//     return `Today, I am feeling ${mood}`
// }
// else {
//     return `Today, I am feeling neutral`
// }
// }
// moodToday("sad")

NOTE //Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr) {
// 	for(let i = 0; i < arr.length; i++) {
// 		return arr[arr.length - 1]
// 	}
// }
// getLastItem(["cat", "dog", "duck"])

NOTE //In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
//The farmer breeds three species: The farmer has counted his animals and he gives you a subtotal for each species. 
//You have to implement a function that returns the total number of legs of all the animals.

// function animals(chickens, cows, pigs) {
// 	let totalLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
// 	return totalLegs;
// }
// animals(2, 3, 5)

NOTE //Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

// function isEvenOrOdd(num) {
// 	if(num % 2 == 0) {
// 		return 'even'
// 	}
// 	return 'odd'
// }
// isEvenOrOdd(35)

NOTE //There is an easy way to assign to array values to the nth index by using the Rest element.

// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
// Use the Rest element

// const str = `[head, ...tail] = [1, 2, 3, 4]`
// console.log(str);

NOTE //Given an array of numbers, create a function which returns the same array but with each element's index in the array 
//added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// const addIndexes = arr => arr.map((num, idx) => num + idx)

// addIndexes([5, 4, 3, 2, 1])

NOTE //Write a function to check if an array contains a particular number.

//function check(arr, el) {
// 	for(let i=0; i<arr.length; i++) {
// 		if(arr[i] == el) {
// 			return true
// 		}
// 	}
// 			return false
// }
// check([1, 1, 2, 1, 1], 3)