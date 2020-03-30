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

// const addIndexes = arr => arr.map((num, idx) => num + idx) //The map() method creates a new array populated with the 
//                                                              results of calling a provided function on every element in the calling array.

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

NOTE //Create a function which takes in a sentence str and a string of characters 
//chars and return the sentence but with all the specified characters removed.

// function stripSentence(str, chars) {
// 	return str.split('') --returns ['stacy','stands','on','stilts','saturdays']
// 		.filter(x => !chars.includes(x))--removes "s" from each split string
// 		.join('');--string is now 'tacy tand on tilt aturday
// }
// stripSentence("stacy stands on stilts saturdays", "s")

NOTE //Create a function that takes two strings as arguments and returns the number of 
//times the first string (the single character) is found in the second string.

// function charCount(myChar, str) {
// 	let count = 0;
// 	for (let i=0; i<str.length; i++) {
// 		if (str.charAt(i) == myChar) {
// 			count++;
// 		}
// 	}
// 	return count;
// }	
// charCount("a", "edabit")

NOTE //Write a program that prints the numbers from 1 to 20. But for multiples of three print 
//“Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are 
//multiples of both three and five print “FizzBuzz”.


// for (var i=1; i <= 20; i++)
// {
//     if (i % 5 ==0 && i % 3 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);

// }

NOTE //Create a function that takes an array of non-negative numbers and strings and return a new 
//array without the strings.

// function filterArray(arr) {
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++) {
//       if(typeof arr[i] == "number") { --typeof operator returns a string indicating the type of the unevaluated operand
//         newArr.push(arr[i]);
//       }
//     }
//     return newArr;
//   }
//   filterArray([1, "r", "a", "b"])

NOTE //Create a function that takes a string and returns a string in which each character is repeated once.

// function doubleChar(str) {
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) { The String object's charAt() method returns a new string consisting 
//                                            of the single UTF-16 code unit located at the specified offset into the string
//       newStr += str.charAt(i) + str.charAt(i) 
//     }
//     return newStr
//   }
//   doubleChar("String")

NOTE //Create a function that takes an object argument sizes (contains width, length, height keys) and returns the 
// of the box.

//function volumeOfBox(sizes) {
// 	return sizes.width * sizes.length * sizes.height
// }
// volumeOfBox({ width: 4, length: 2, height: 2 })

NOTE //Create a function that takes an array of words and transforms it into an array of each word's length.

//function wordLengths(arr) {
// 	const result = arr.map(word => word.length++); //The map() method creates a new array populated with 
//                                                  the results of calling a provided function on every element in the calling array.
// 	return result
// }
// wordLengths(["Halloween", "Thanksgiving", "Christmas"])

NOTE //Create a function that takes an array and a string as arguments and return the index of the string.

// function find_index(arr, str) {
// 	return arr.indexOf(str)
	
// }
// find_index(["Red", "blue", "Blue", "Green"], "blue")

NOTE //Write a function that converts an object into an array, where each element represents a key-value pair.

// function toArray(obj) {
// 	return Object.entries(obj)//Object.entries() returns an array whose elements are arrays corresponding to 
//                              the enumerable string-keyed property [key, value] pairs found directly upon object
// }
// toArray({ a: 1, b: 2 })

NOTE //Create a function that takes an object and returns the keys and values as separate arrays.

// function keysAndValues(obj) {
// 	let arr1 = [], arr2 = []
// 	for(let key in obj) {
// 		arr1.push(key)
// 		arr2.push(obj[key])
// }
// 	return [arr1,arr2]
// }
// keysAndValues({ a: "Cheese", b: "Grapes", c: "Figs" })

NOTE //Create a function that concatenates n input arrays, where n is variable.

// function concat(...args) { //The flat() method creates a new array with all sub-array elements concatenated into 
//                              it recursively up to the specified depth.
// 	return args.flat()
// }
// concat([1, 2], [3, 4])

NOTE //Write a function that converts an object into an array of keys and values.

// function objectToArray(obj) {
// 	const myArray = Object.entries(obj); The Object.entries() method returns an array of a given object's own 
//                                      enumerable string-keyed property [key, value] pairs, in the same order 
//                                      as that provided by a for...in loop. 
// 	return myArray;
// }
// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// })

NOTE //Create a function that takes a base number and an exponent number and returns the calculation.

// function calculateExponent(num, exp) {
// 	return Math.pow(num, exp)  The Math.pow() function returns the base to the exponent power, that is, baseexponent.
// }
// calculateExponent(3, 3)

NOTE //Write a function redundant that takes in a string str and returns a function that returns str

// function redundant(str) {
    // console.log(str)
// 	return () => str;
// }
//redundant("cheerios")

NOTE //Create a function that takes in a year and returns the correct century.

// function century(year) {
// 	const century = Math.ceil(year / 100); //The Math.ceil() function always rounds a number up to the next 
//                                          largest whole number or integer.
//     console.log(century)
//     return century !== 21 // ternary operator; if century is not 21, then append 'th' to string interpolated
                                //'century'; else append 'st'
// 		? `${century}th century` 
// 		: `${century}st century`;
// }
// century(2001)


