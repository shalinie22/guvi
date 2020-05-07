//to filter the  given numbers in the array by checking it is greater than or equal to 18
/*input:3 43 5 2 1 18 55
  output:43 18 55*/
const filter=(ele,call)=>{
    var s=[]
    for(var i=0;i<ele.length;i++)
    {
        if(call(ele[i]))
        {
            s.push(ele[i])
        }
    }
    return s
}
var tofilter=(x)=>x>=18;
var a=[3,43,5,2,1,18,55]
console.log(filter(a,tofilter))
