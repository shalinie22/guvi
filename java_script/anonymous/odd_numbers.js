//to print the odd numbers 
var a=[1,2,3,4,5,6];
var s=function(a){
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2!=0)
        {
           console.log(a[i]);
        }
    }
}
s(a);
