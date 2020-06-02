/*Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]*/

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
//function to print the keys
function printAllKeys(obj) {
 //empty array p
 var p=[];
 //for loop to iterate the obj
 for(var i in obj){
     //pushes the keys in the array p
     p.push(i)
 }
 // return the array p
 return p
}
//call the function in the console
console.log(printAllKeys(obj));
