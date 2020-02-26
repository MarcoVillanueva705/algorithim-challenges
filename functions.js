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