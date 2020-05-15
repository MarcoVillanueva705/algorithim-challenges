//NOTE Given an object of people and their ages, return how old the people would be after n years have passed. 
//Use the absolute value of n
// function afterNYears(names, n) {
// 	for (let k in names) { //The for...in statement iterates over all enumerable properties of an object that are keyed by strings
// names[k] += Math.abs(n); //for every value of the names object keys i.e. "Joel" etc., add n to it
                            //The Math.abs() function returns the absolute value of a number; it will never return a negative value
// 	}
// return names
// }
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1)

//ans {
//   "Joel" : 33,
//   "Fred" : 45,
//   "Reginald" : 66,
//   "Susan" : 34,
//   "Julian" : 14
// }

//NOTE Write a function that reverses all the words in a sentence that start with a particular letter.

// function specialReverse(str, c) {
// 	str = str.split(' ')//this turns str to "first", "man", "to", "walk", "on", "the", "moon"
// 	for(let i in str){ //for variable in string; The for...in loop below iterates over all of 
// 						//the string's enumerable, non-Symbol properties and logs a string of 
// 						//the property names and their values.
// 	  if(str[i].charAt(0) == c){ //if when iterating over each character, the one at the 0 index (or
// 								//the first letter of the string), is the same as c parameter or "m" 
// 								//argument
// 		str[i] = str[i].split('').reverse().join('')//set str[i] i.e. "man" to a split i.e. "m","a","n" then reverse to
// 													//"n","a","m" finally join str[i] to become "nam"
// 	  }
// 	}
// 	return str.join(' ')//finally, return str but joined so it looks like one string, not separate strings i.e it
// 						//now looks like "first nam to walk on the noom"
//    }
// specialReverse("first man to walk on the moon", "m")