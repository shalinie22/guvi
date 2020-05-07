//to map the given aray elements so that each element get multiplied by 2
/* input:[1,2,3,5,4,6]
   output:[ 2, 4, 6, 10, 8, 12 ]*/
const map=(ele,call)=>{
    var s=[]
    for(var i=0;i<ele.length;i++)
    {
        s.push(call(ele[i]))
    }
    return s
}
var tomap=(w)=> w*2
var a=[1,2,3,5,4,6]
console.log(map(a,tomap))
