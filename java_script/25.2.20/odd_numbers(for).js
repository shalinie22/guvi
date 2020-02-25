#sum of odd numbers in an array
var a=[234,34,678,25,89,23,65,21];
var s=0;
for(var i=0;i<a.length;i++)
{
  if(a[i]%2!=0)
  {
    s+=a[i];
  }
}
console.log(s);
