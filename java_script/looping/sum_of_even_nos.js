//to print the sum of even numbers from 1 to n
var n=prompt("enter the number");
var i=1,s=0;
while(i<n)
{
    if(i%2==0)
    {
        s+=i;
    }
    i+=1;
}
console.log(s);
