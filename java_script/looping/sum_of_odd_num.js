//to print the sum of odd numbers
var n=prompt("enter the number");
var i=1,s=0;
while(i<=n)
{
    if(i%2==1)
    {
        s+=i;
    }
    i+=1;
}
console.log(s);
