// to find check whether the element in an array is greater than or equal to 18 
/*input:[34, 55, 78, 56 ]
  output:true*/
const some=(ele,call)=>{
    for(var i=0;i<ele.length;i++)
    {
        if(call(ele[i]))
        return true
        break
    }
    return false
}
var con=(f)=>f>=18
var a=[34, 55, 78, 56 ]
console.log(some(a,con))

