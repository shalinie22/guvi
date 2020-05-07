//to find the index of the element in the array
/* input :a=[1,2,3,4,5,7,6],c=3;
   output:2*/
const index=(ele,call)=>{
    for(var i=0;i<ele.length;i++)
    {
        if(call(ele[i]))
        {
            return i
        }
    }
    
}
var tofindindex=(x)=>x==c
var a=[1,2,3,4,5,7,6],c=3
console.log(index(a,tofindindex))
