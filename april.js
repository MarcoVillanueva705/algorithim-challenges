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