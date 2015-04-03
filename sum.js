/* Coded by Collin Mullis
	CMP237
	Second Hourly Exam
	Practicum 7
	sum.js
*/
// Array of Numbers
var numbers = [1,2,3,4,5,6,7,8,9,10]
// Create a Function to find the sum, giving an Array as a parameter
var sum = function(Array) {
// Variable to store sum in
	var result = 0
// Go through each index of the array, starting at the 0th index 
	for (var count = 0; count <= Array.length; count++)
		result = result + Array.indexOf(count)
	return result;
}	
console.log(sum(numbers));
