#to print the odd numbers in an array using arrow functions
var a=[1,2,3,4,5,6];
var sh=a.filter((b)=>{
    if(b%2!=0)
        return b;});
console.log(sh);
