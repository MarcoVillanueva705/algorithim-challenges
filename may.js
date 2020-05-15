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

function specialReverse(str, c) {
	str = str.split(' ')//this turns str to "first", "man", "to", "walk", "on", "the", "moon"
	for(let i in str){
	  if(str[i].charAt(0) == c){
		str[i] = str[i].split('').reverse().join('')
	  }
	}
	return str.join(' ')
   }
specialReverse("first man to walk on the moon", "m")