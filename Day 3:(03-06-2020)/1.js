/*Write a function called “addFive”.
Given a number, “addFive” returns 5 added to that number.*/

//declare a variable num and asign 10
var num = 10;
//function to add 5 with the num
function addFive(num) { 
//return the added number
return num+5;

}
//call the function and store it in the variable in result 
var result = addFive(num)
//print the reuslt
console.log(result)



/*Write a function called “getOpposite”.
Given a number, return its opposite.*/

//declare a variable num and asign 5
var num = 5;
// function to get the opposite 
function getOpposite(num) {
    // condition to check for 0
    if(num==0)
    {
        return 0
    }
    // else return the opposite of the number
    else
    return -(num)
    
}
//call the function and store it in the variable in result 
var result = getOpposite(num)
//print the reuslt
console.log(result)




/*Fill in your code that takes an number minutes and converts it to seconds.*/

//declare a variable min and asign to value as 5
var min = 5;
// function to convert the minutes to seconds
function toSeconds(min) {
    // return the seconds
    return min*60
}
//call the function and store it in secs variable
var secs = toSeconds(min)
//print the secs
console.log(secs)



/*Create a function that takes a string and returns it as an integer.*/


var mystr = "5";
//function to convert string to integer
function toInteger(mystr) {
    //return the integer
    return parseInt(mystr)
}
//call the function and store it in myint
var myint = toInteger(mystr)
//print the myint
console.log(myint)



/*Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/

//declare a variable num and asign 0
var myint = 0;
//function to  find the next number
function nextNumber(myint) {
    return myint+1
}
//call the function and store it in myNextint
var myNextint = nextNumber(myint)
//print the output
console.log(myNextint)



/*Create a function that takes an array and returns the first element.*/

var arr = [1, 2, 3];
// function to get the first elementof the array
function getFirstElement(arr) {
    //return the output
    return arr[0]
}
//call the function 
var data = getFirstElement(arr)
//print the data
console.log(data)


/*Convert Hours into Seconds
Write a function that converts hours into seconds.*/

var arr = [1, 2, 3];
// function to convert the hour to seconds
function hourToSeconds(arr) {
    // map function to convert all the hours to seconds
    var sec=arr.map(function(num){
        //return the seconds
        return num*60*60
    })
    //return sec
    return sec
}
//call the function and store it in data
var data = hourToSeconds(arr)
// print the output
console.log(data)



/*Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.*/

// function to find the perimeter
function findPerimeter(num1,num2) {
    //return the perimeter
    return 2*(num1+num2)
}
//call the function and store the value in peri
var peri = findPerimeter(6,7)
//print the output
console.log(peri)


/*Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.*/
//function to find the num less than 100
function lessThan100(num1,num2) {
    //add the two numbers
    var b=num1+num2
    //check the number is lessThan100 if yes return true
    if(b<100) return true
    //else return false
    else return false
}
// call the function 
var res = lessThan100(22,15)
//print the res
console.log(res)



/*There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.*/

//function to get the remainder
function remainder(num1,num2) {
    //return the output
    return num1%num2
}
//call the function
var res = remainder(1,3)
//print the res
console.log(res)


/*The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.*/

//function to find the legs of the animals
function CountAnimals(tur,horse,pigs) {
    //return the calculated legs 
    return (tur*2)+(horse*4)+(pigs*4)
}
//call the function
var legs = CountAnimals(2,3,5)
//print the output
console.log(legs)


/*Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.*/

//function to find the fps
function frames(num1,num2) {
    //return the fps
    return num1*num2*60
}
//call the function frames
var fps = frames(1,2)
console.log(fps)


/*Check if an Integer is Divisible By Five*/

//function for divisibility
function divisibleByFive(num1) {
    // check Divisible by 5 if yes return true
    if(num1%5==0) return true
    //else return false
    else return false
}
//call the function 
var divisible = divisibleByFive(5)
console.log(divisible)



/*Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.*/

//function for even
function isEven(num) {
    // check even if yes return true
    if(num%2==0) return true
    //else return false
    else return false
}
//call the function 
var even = isEven(5)
console.log(even)




/*Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.*/

//function for even
function areBothOdd(num1, num2) {
    // check odd if yes return true
    if((num1%2!=0)&&(num2%2!=0)) return true
    //else return false
    else return false
}
//call the function 
var odd = areBothOdd(5,1)
console.log(odd)



/*Write a function called “getFullName”.*/

//function to get the full name
function getFullName(firstName, lastName){
 
 // return the fullname
 return firstName+" "+lastName;
 
}
//call the function and print
console.log(getFullName("guvi","geek"))



/*Write a function called “getLengthOfWord”..*/

// function to get the length of the word
function getLengthOfWord(word1){
    //conditio to check the word1 is sting or not
if(typeof(word1)=="string"){
    //declare a empty array
 var r=[]
 r.push(word1)
 //split the word
 var splitted=r[0].split("")
 //return the length of it
 return splitted.length
}
// if not a string return -1
else
{
    return -1
}
 
}
//call the function in the console
console.log(getLengthOfWord("guvi"))


/*Write a function called “isSameLength”.*/

// function to get the length of the word
function isSameLength(word1, word2){
    //declare a empty array r

 var r=[]
 //push the words in it
 r.push(word1)
 r.push(word2)
 //split the words
 var splitted1=r[0].split("")
 var splitted2=r[1].split("")
 // check for the length is equal
 if(splitted1.length==splitted2.length){
 //return true if equal
 return true
}
// if return false
else
{
    return false
}
 
}
//call the function in the console
console.log(isSameLength("guvi","geek"))


/*Create a function to calculate the distance between two points defined by their x, y coordinates.*/
//call the function in console
console.log(getDistance(100, 100, 400, 300));
// function to find the distance between the two points
function getDistance(x1, y1, x2, y2)
{
    //return the value 
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
 
}


/*Write a function called “getNthElement”*/

//function to get the nth element
function getNthElement(array,n){
    //return the nth element
    return array[n]
 
}
//call the function 
console.log(getNthElement([1, 3, 5], 1))


/*Write a function called “getLastElement”*/

//function to get the last element
function getLastElement(array){
    //return the last element
    return array[array.length-1]
 
}
//call the function 
console.log(getLastElement([1, 2, 3, 4]))



/*Write a function called “getProperty”.*/

var obj = {
 mykey: "value"
};
//function to get the property
function getProperty(obj, key) {
   //return the property
   return obj[key]
}
//call the function 
console.log(getProperty(obj,"mykey"));



/*Write a function called “addProperty”.*/

var obj = {
 mykey: "value"
};
//function to add the property
function addProperty(obj, key) {
   //return the property
   return obj[key]="val"
}
//call the function 
addProperty(obj,"mkey");
console.log(obj)


/*Write a function called “removeProperty”..*/

var obj = {
 mykey: "value",
 name: "shalu"
};
//function to remove the property
function removeProperty(obj, key) {
   //return the property
   return delete obj[key]
}
//call the function 
removeProperty(obj, "name");
// print the obj
console.log(obj)

/*Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.*/


var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// function to count positive and negative numbers
var ar2 = function countPositivesSumNegatives(arr) {
    // filter the positive and negative numbers
    var positive = arr.filter(function(num){return num>=0});
   var negative = arr.filter (function(num){return num<0});
   // declare the p as empty array
    var p=[]
    // push the count of the numbers in p
    p.push(positive.length)
    p.push(negative.length)
    // return the array p
    return p
    
};
//call the function
console.log(ar2(arr));




/*Create a function that receives an array of numbers and returns an array containing only the positive numbers*/

// function to get the positive numbers 
function getPositives(ar)
{
    //to filter the positive numbers
  var positive = ar.filter(function(num){return num>=0});
  // return the array
  return positive
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
//call the function 
var ar2 = getPositives(ar);
//print the ar2
console.log(ar2);


/*Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).*/

//function to find the powers of two 
function powersOfTwo(n){
  // delare the empty array 
 var res = []
 // iterate the for loop till n
 for(var i=0;i<n;i++)
 {
     //push the numbers in the array
     res.push(Math.pow(2,i))
 }
 //return the array
  return res;
}
//call the function in the console 
console.log(powersOfTwo(3))


/*Find the maximum number in an array of numbers*/

// function to find the max number
function findMax(ar)
{
    //return the max number
    return Math.max(...ar);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
//call the function 
var max = findMax(ar);
//print the max 
console.log("Max: ", max);

/*Reverse a string*/

//call the function 
var s = reverseString("JavaScript");
// print the s 
console.log(s);
// function to get the reversed string
function reverseString(s)
{
    //declare the empty array
   var r=[]
   //push the string in array
   r.push(s);
   //get the splitted word in str
   var str=r[0].split("")
   // return the reversed string
   return str.reverse().join("")
   
}


/*Create a function that will merge two arrays and return the result as a new array*/

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
 var result = [...ar1,...ar2];

 
 return result;
}


/*Calculate the sum of numbers received in a comma delimited string*/

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
    var ss=[];
    ss.push(s)
    var splitted=ss[0].split(",")
 //var arr = splitted.map(function(num){return parseInt(num)})
 return splitted.length
  
}
