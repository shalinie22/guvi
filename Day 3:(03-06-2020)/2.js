//2.1. Print odd numbers in an array
var array=[1,2,3,4,5,6];
//anonymous function to find the odd numbers
var oddNumbers=function(array){
    // odd stores the odd numbers from the array
	var odd=array.filter(function(num){return num%2!=0;}); return odd
}
//call the function in console 
console.log(oddNumbers(array));


/*2.2. Convert all the strings to title caps in a string array*/

//Convert all the strings to title caps in a string array
var array = ["guvi","geek"];
// function to change the title caps
var title_caps=function(array){
   
    var caps=array.map(function(str){ return str[0].toUpperCase()+str.substr(1)})
    //print the caps
    console.log(caps)
}
//call the function
title_caps(array);


//2.3. Sum of all numbers in an array


var a=[1,2,3,4,5];
// function to add all the numbers
var summ=function(a){
    // the total  is stored in the variable sum
var sum = a.reduce(function(acc,cu){return acc+cu;});
// return the sum
return sum
}
// call the function
console.log(summ(a));



//2.4. Return all the prime numbers in an array

array=[1,2,3,4,5,6];
// function to find the prime numbers
var prime=function(a){
    // for loop to iterate the a
          for(var i=1;i<=a.length;i++)
          {
              //asign c as 0
              var c=0;
              // condition to check greater than one
              if(a[i]>1)
              {
                  // for loop to find the prime numbers
                  for(var j=2;j<=i;j++)
                  {
                      //condition to check for divisibility
                      if(a[i]%j==0)
                      {
                          // if yes c is assigned to 1
                          c=1;
                          break;
                      }
                  }
              }
              //if c is 0 then it is a prime number 
                  if(c==0)
                  {
                      // print the number
                      console.log(a[i]);
                  }
              
          }
}
prime(array);



//2.5. Return all the palindromes in an array

var array=["mom","dog","pop","lol","kite"]
// function to find the palindrome 
var palindrome=function(a){
    // function to reverse the each word in array
    var reversed=a.map(function(str){
        
        var r=[]
        r.push(str)
        var split=r[0].split("")
        return split.reverse().join("")
        
    });
    // empty array p
    var p=[]
    // for loop iterte in array a
    for(var i in a)
    {
        // for loop iterte in array reversed
        for(var j in reversed)
        {
            //condition to check it is equal
            if(a[i]==reversed[i])
            {
                p.push(a[i])
                break
            }
        }
    }
    // print the array p
    console.log(p)
}
// call the function 
palindrome(array)



//2.6 Return median of two sorted arrays of same size

var ar1 = [1, 12, 15, 26, 38]; 
    var ar2 = [2, 13, 17, 30, 45]; 
    //function to find the median of sorted array
var median = function(arr1,arr2)
{
    // merge the array
    var merged_array=[...arr1,...arr2]
    //sort the merged array
    var sorted_array=merged_array.sort(function(a,b){return a-b})
    // get the middlemost elements
    var a=sorted_array[merged_array.length/2-1]
    var b=sorted_array[merged_array.length/2]
// print the output
    console.log((a+b)/2)
}
// call the function
median(ar1,ar2)


//2.7. Remove duplicates from an array
var array=[1,2,43,5,3,2,2,1,6,7]
// function to remove the duplicates
var remove_duplicates=function(a){
    // unique elements are stored in the arr variable
    var arr=[...new Set(a)]
    // print the output
    console.log( arr)
}
//call the function
remove_duplicates(array)


