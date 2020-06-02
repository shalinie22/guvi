/*Write a function called “printAllValues” which returns an newArray of all the input object’s values.
Input (Object):
var object = {name: “RajiniKanth”, age: 33, hasPets : false};
Output:
[“RajiniKanth”, 33, false]*/

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
// function to print the values
function printAllValues(obj) {
 // your code here
 //declaring an empty array p
 var p=[];
 //for loop to iterate the variable obj
 for(var i in obj){
     //push the values in array p
     p.push(obj[i])
 }
 //return the array p
 return p
}
//call the function inside the console
console.log(printAllValues(obj));
