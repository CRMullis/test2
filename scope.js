/* Coded by Collin Mullis
	Scope.js
	CMP237 Second Hourly Exam
	Practicum 0 
*/
// Any variable declared outside of a function, is automatically global. 
// Code out here, can use student
// Code out here, cannot use counter
wordcounter = 0  

var count = function(bstring,countChar) {
// Any variable declared inside of a function, and has the keyword "var" in it
// has local scope.
// Code in here, can use student 
// Code in here, can also use counter
	var lettercounter = 0;
	for (counter = 0; counter <= bstring.length; counter++)
		if (bstring.charAt(counter) == (countChar))
			lettercounter = lettercounter+1;
		return lettercounter;
}		
console.log(count("I I I I","I"));
