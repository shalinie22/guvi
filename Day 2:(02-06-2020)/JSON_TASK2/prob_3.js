/*Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]*/

var obj = {name: "ISRO", age: 35, role: "Scientist"};
// funtion to convert list to object
function convertListToObject(obj) {
 // empty array g and p
 var p=[],g=[];
 for(var  i in obj )
 {
     //g.push(i)
     // push the object as array in g
     g.push([i,obj[i]])
     //p.push(g)
 }
 //return g
 return g;
 
}
//call the function in console
console.log(convertListToObject(obj))
