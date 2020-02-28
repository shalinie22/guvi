var n=prompt("enter");
var c=0;
for(var i=2;i<=n/2;i++)
{
    if(n%i==0)
    {
        var c=1;
        break;
    }
}
if(c==0)
{
    console.log("prime");
}
