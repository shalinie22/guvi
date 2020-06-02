/*Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}*/

var arr = ["GUVI", "I", "am", "a geek"];
// function to transform the first and last element as key and value
function transformFirstAndLast(arr) {
 //declare an empty object named rv
 var rv = {};
 //iterate the for loop
  for (var i = 0; i < arr.length; ++i)
    rv[arr[0]] = arr[arr.length-1];
    // return the value of rv
  return rv;
 
}
//call the function in console
console.log(transformFirstAndLast(arr))
