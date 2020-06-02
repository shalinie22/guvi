/*Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}*/

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
//function to convert list to object
function fromListToObject(arr) {

  for (var i in arr)
  {
  //asign the arr elements in key
      var key=arr[i]
      //empty object rv
     var rv = {};
  for (var j in key)
    rv[key[0]] = key[1];
    //print the rv
  console.log(rv);

  }
  //console.log(rv);

}
//call the function
fromListToObject(arr)
