//NOTE Create a function that returns true if two arrays contain identical values, and false otherwise.


// function checkEquals(arr1, arr2) {
// 	if (arr1.toString() === arr2.toString()) { //toString method returns a string representing the specified
                                                //array and its elements
//   	return true 
//   } else {
//   	return false
//   }
// }
// checkEquals([4, 5, 6], [4, 5, 6])

//NOTE Create a function that returns true if a string contains any spaces.

// function hasSpaces(str) {
// 	if (str.includes(" ")){ //The includes() method determines whether one string may be found within another string, 
//                          returning true or false as appropriate.
// 		return true
// 	}
// 	return false
// }
// hasSpaces("hello")

//NOTE Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

// function arrayOfMultiples (num, length) {
// 	var result = []
//     for (let i = 1; i <= length; i++) {
//         result.push(num*i)
        
//     }
//     return result
// }
// arrayOfMultiples(7, 5)

//NOTE Create a function that takes an array of items and checks if the last item matches the rest of the array.

// function matchLastItem(arr) {
// 	return arr.pop() == arr.join('') //the last element popped will be the same as what is joined in a string
// }

// matchLastItem([8, "thunder", true, "8thundertrue"])

//NOTE Create a function that takes an object as an argument and returns a string with facts about the city. 

// function cityFacts(city) {
// 	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
// }
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) 

//NOTE Write a function that takes an integer i and returns an integer with the integer backwards followed by 
//the original integer.

// function reverseAndNot(i) {
// 	return parseInt(i.toString().split('').reverse().join('')+i)
//toString turns an interger into a string
//split takes a string and turns it into an array of strings ["1", "2", "3"]
//reverse takes the array and reverses it ["3","2","1"]
//join takes separated string elements in an array and joins them ["321"]+i = ["321123"]
//parseInt returns a string as an interger 321123
// }
// reverseAndNot(123)

//NOTE Create a function that takes an integer and returns it as an ordinal number. 
//An Ordinal Number is a number that tells the position of something in a list, such as 1st, 
//2nd, 3rd, 4th, 5th etc.

// function returnEndOfNumber(num) {
// 	let res;
// 	let end = num.toString().slice(-1)//toString turns 1231 into "1231", and .slice gives you the last
//                                      value in the string, being 1 in this case
// 	if (end == 1) {
// 		res = num + '-ST'

// 	} else if (end == 2) {
// 		res = num + '-ND'
// 	} else if (end == 3) {
// 		res = num + '-RD'
// 	} else if (end > 3) {
// 		res = num + '-TH'
// 	}
// return res
// }
// returnEndOfNumber(1231) 

//NOTE 

// function calculateExponent(num, exp) {
// 	return (Math.pow(num, exp))//The Math.pow() function returns the base to the exponent power, that is, baseexponent.
// }
// calculateExponent(3, 3)

//NOTE Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, 
//return 0.

// function indexMultiplier(arr) {
// 	return arr.reduce((accumulator, current, index) => accumulator + current * index, 0); //accumulator means
//                                                    total, if the array is empty, return zero; so it goes 1*0(0 is the idx position)=0--
//                                                     then it carries to the next element 2*1=2 + 0(the accumulator) =2--onto the next                                        
 //                                                     element 3*2= 6 + 2(the previous accumulator) =8--next element 4*3=12 + 8 = 20--finally
 //                                                     5*4 = 20 + 20 = 40; reduce basically breaks down the array type into the things you need 
 //                                                     access
// }
//indexMultiplier([1, 2, 3, 4, 5])

//NOTE Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.

// function removeLeadingTrailing(n) {
// 	return Math.abs(n).toString();//The Math.abs() function returns the absolute value of a number
// }
// 	removeLeadingTrailing("03.1400")//returns as "3.14"

//NOTE Create a function that takes a word and returns true if the word has two consecutive identical letters.

// function doubleLetters(word) {
// 	for (let i = 0; i < word.length - 1; i++) {
//         if(word.charAt(i) === word.charAt(i+1)) {//remain in the 'if' statement lookin for 'true' occurentce;
                                                    //breaks out once neither element meets the condition;
                                                    //The String object's charAt() method returns a new string consisting of the single UTF-16 
                                                    //code unit located at the specified offset into the string.
//             return true
//         }         
//     }
//     return false
// }
// doubleLetters("loop")

//NOTE Create a function that returns the number of argument it was called with.


// function numArgs() {
// 	return arguments.length //The arguments.length property contains the number of arguments passed to the function
// }
// numArgs("foo", "bar")

//NOTE Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, 
//and false otherwise. The array will contain 4 elements.

// function testJackpot(result) {
//     return new Set(result).size === 1 //Set objects are collections of values. You can iterate through the elements of a set 
                                        //in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
                                        //.size() accessor property returns the number of (unique) elements in a Set object.  So, this only
                                        //returns new Set as 'true' if there is only 1 unique element throughout the result argument, otherwise
                                        // 'false'.

// }
// testJackpot(["&&", "&", "&&&", "&&&&"])

