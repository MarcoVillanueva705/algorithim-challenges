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

