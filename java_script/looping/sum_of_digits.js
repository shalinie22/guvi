//sum of the digits
var n=prompt("enter the number");
var r,s=0;
while(n!=0)
{
    r=n%10;
    s+=r;
    n=n/10;
}
console.log(parseInt(s));
