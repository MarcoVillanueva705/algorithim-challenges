//NOTE Create a function that returns the total number of parameters passed in.

// function numberArgs(...things) {//The rest of the parameters can be included in the function definition by using three dots ... followed 
                                    //by the name of the array that will contain them. 
                                    //The dots literally mean “gather the remaining parameters into an array”.

// 	return things.length
// }
// numberArgs(10, 20, 30, 40, 50)
                                        
//NOTE Write a function, .vreplace() that extends the String prototype by replacing all vowels 
//in a string with a specified vowel.

// String.prototype.vreplace = function(vowel) {
// 	return this.replace(/[aeiou]/gi, vowel);
// }
// "cheese casserole".vreplace("o")
                                
//NOTE Create a function that takes two numbers and a mathematical operator + - / * and will perform
// a calculation with the given numbers.

// function calculator(num1, operator, num2) {
// 	if(operator == '+') return num1+num2;
// 	else if(operator == '-') return num1-num2;
// 	else if(operator == '*') return num1*num2;
// 	else if(operator == '/' && num2 != 0) return num1/num2;
// 	else return "Can't divide by 0!";
// }
// calculator(2, "/", 0) //If the input tries to divide by 0, return: "Can't divide by 0!"

//Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

//NOTE

// function countOnes(i) {
//     let binaryNum = i.toString(2)
//     let newNum = Array.of(binaryNum)
//     let result = newNum.filter(biNum => biNum == 0 )
//     return result
//     }
//     countOnes(100)

// function countOnes(i) {
//         let binaryNum = i.toString(2)
//          let newNum = Array.of(binaryNum)
//         //  let result = newNum.filter(biNum => biNum == 0 )
//         let newString = newNum.toString()
//         let result = newString.split()
//          return result
//          }
//          countOnes(100)

//NOTE 
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:
// Adds two (+2) to each odd integer.
// Subtracts two (-2) to each even integer.

// function evenOddTransform(arr, n) {
// 	return arr.map( x => x % 2 ===0 ? x - 2*n : x + 2*n )//map() function takes the arr agrument and creates a 
                                                        //new array, where each element (x, in this case) modulus 2(even number),
                                                        //if element is even, first ternary arugment is true, so
                                                        //decrement by 2 for n parameter amount of times, else if odd, 
                                                        //increment element by 2 for n parameter amount of times,

// }
// evenOddTransform([1, 2, 3], 1)


//NOTE Constructor, object instantiation practice
//You can define a constructor function that you can use to create your objects:
//You can define a variable containing an instantiation of this object by calling the constructor function:

// function Kitten(name, cute, color) {
//     this.name = name,
//     this.cute = cute,
//     this.color = color
//   }
//   let myKitten = new Kitten("Nibbles", true, "white")
// console.log(myKitten)

//NOTE Create a function that returns only strings with unique characters.

// function filterUnique(arr) {
// 	return arr.filter( str => new Set(str).size === str.length ); //The filter() method creates a new array 
                                                                //with all elements that pass the test implemented by the provided function.
                                                                //The size accessor property returns the number of (unique) elements in a Set object
// }
// filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])
//returns ["abc"]

//return the filtered array where the str element is a new Set where the size (unique values in the str)
//is the same as it's length.  "abc" is the only string where it has 3 unique values, and it's length is 
//also 3

//NOTE Create a function that changes all the elements in an array as follows:
///Add 1 to all even integers, nothing to odd integers.
//Concatenates "!" to all strings and capitalises them.
//Changes all boolean values to its opposite.

// function changeTypes(arr) {
// 	for (var i = 0; i<arr.length; i++) {
// 		if (typeof arr[i] == "string") { //typeof operator returns a string indicating the type of the unevaluated operand
// 			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1) + "!";//charAt.toUpperCase takes the element and
                                                                                //capitalizes the first character, and adds
                                                                                //through the substring method (returns the 
                                                                                //part of the string between the start and end indexes)
                                                                                //appends an "!" right after arr[i]
// 		}
// 		else if(typeof arr[i] == "boolean") { //Use else if to specify a new condition to test, if the first condition is false

// 			arr[i] = !arr[i]; //the "!" flips the boolean
// 		}
// 		else if (arr[i] % 2 == 0) { //if arr[i] is even through the modulus 2 operand, add + 1 to arr[!]
// 			arr[i] += 1;
// 		}
// 	}
// 	return arr;

// }
// changeTypes(["a", 12, true])
//ans ["A!", 13, false]