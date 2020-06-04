//3. Write a callback which is called

//3.1. if the give number is even

// function to check even or not
function evenornot(num,logic){
// condition which calls the function logic
    if(logic(num))
    {
//logic returns 0 the it returns odd
        return "odd"
    }
//else return even
    else return "even"
}
//function to find the divisibility of 2
function logic (num){
// the remainder is stored in the variable x
    var x=num%2
//return x
    return x
    
}
//variable num is assigned as 10
var num=10
//print by calling the function evenornot
console.log(evenornot(num,logic))



//3.2. if the given number is prime

// function to check prime or not
function primeornot(num,logic){
    // condition to check num is greater than 1 
     if(num>1)
    {
	// return by calling the function logic
      return  logic(num)
    }
}
// function logic for the prime
function logic(num){
//cis assigned as 0
    var c=0
//for to iterate for the factors
    for(var i=2;i<=num;i++)
        {
// condition for the factors 
             if(num%i!=0) 
            {
		// c assigned to 1
                c=1
	//return not prime
                return " notprime"
	// loop is terminated
               break
            }
        }
	//checks for c value
        if(c==0)
	// return prime
        return "prime"
       
}
// num is given a value
var num=2;
//print by calling the function primeornot
console.log(primeornot(num,logic))





//3.3. if the number is palindrome

// function to reverse the num
function reversed(num){
// declare r with empty array
    var r=[]
	//push the num in array by converting it to string
        r.push(num.toString())
	// split it and store in split variable
        var split=r[0].split("")
	// return split by reversing it
        return split.reverse().join("")
    
}
//function to find the palindrome or not
function palinornot(num,reversed){
//condition to check for palindrome or not
    if(num==reversed(num))
    {
	//return palindrome
        return "palindrome"
    }
	//return not palindrome
    else return "not palindrome"
    
}
//assign the num as 123
var num=123
// print by calling the function
console.log(palinornot(num,reversed))
