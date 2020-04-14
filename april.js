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
                                                        //new array, where each element modulus 2(even number),
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

