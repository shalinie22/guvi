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
var a=[34,55,78,56]
console.log(filter(a,tofilter))
