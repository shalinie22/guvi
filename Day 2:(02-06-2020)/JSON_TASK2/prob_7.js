/*Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed*/


var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6};

function assertObjectsEqual(actual, expected,testname){
 // convert the given object to stings
 var act= JSON.stringify(actual)
 var ect= JSON.stringify(expected)
 //compare the two objects
 if(act===ect)
 {
 //if equal print passed
   console.log("passed")
 }
 else
 {
 //orelse print failed
   console.log("failed")
 }
}
//call the function
assertObjectsEqual(actual, expected,"detects that two objects are equal");
