//4.1. Print odd numbers in an array
var array=[1,2,3,4,5,6];
    // odd stores the odd numbers from the array
	var odd=array.filter((num)=>{return num%2!=0;});

 
console.log(odd);

//4.2. Convert all the strings to title caps in a string array

//Convert all the strings to title caps in a string array
var sh = ["guvi","geek"];
// arrow function to convert strings to title caps
    var caps=sh.map((str)=>{ return str[0].toUpperCase()+str.substr(1)})
    console.log(caps)


//4.3. Sum of all numbers in an array

var a=[1,2,3,4,5];

    // the total  is stored in the variable sum
var sum = a.reduce((acc,cu)=>{return acc+cu;});
console.log(sum);

//4.4. Return all the prime numbers in an array

array=[1,2,3,4,5,6,7];
// function to find the prime numbers
var prime=(a)=>{
    // for loop to iterate the a
          for(var i=1;i<=a.length;i++)
          {
              //asign c as 0
              var c=0;
              // condition to check greater than one
              {
                  // for loop to find the prime numbers
                  for(var j=2;j<=i;j++)
                  {
                      //condition to check for divisibility
                      if(a[i]%j==0 && a[i]!==j)
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
var palindrome=(a)=>{
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
