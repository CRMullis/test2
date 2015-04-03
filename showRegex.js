/* Coded by Collin Mullis
	CMP237 
	Second Hourly Exam 
	Practicum 2
	showREgex.js
*/
// The 2 ways of declaring a regular expression are shown here.
var regex1 = new RegExp(123);
var regex2 = /123/;
// Both regular expressions (which are the same) Are used to test to see if
// the pattern exists in the number you give it, but can also be used with
// Strings.
console.log(regex1.test(12367));
console.log(regex2.test(123567));
