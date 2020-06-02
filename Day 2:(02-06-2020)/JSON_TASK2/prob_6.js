/*Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Array):
var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]*/

var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
//function to convert into object
function transformEmployeeData(arr) {
//iterate the arr elements
 for (var i in arr)
  {
      var key=arr[i]
      //empty object rv
      var rv = {}
      // iterate the key
     for(var j in key)
     {
       var key1=key[j]
       //iterate the key1
     for (var k in key1)
    rv[key1[0]] = key1[1];
  
  
  //console.log(key1);
     }
     //print the rv
console.log(rv);
  }
 
}
//call the function
transformEmployeeData(arr);
