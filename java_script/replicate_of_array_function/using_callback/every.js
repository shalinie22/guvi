const everyfun=(ele,call)=>{
  var  s=[];
  for(var i=0;i<ele.length;i++)
    {
      if(call(ele[i]))
        {
          s.push(ele[i]);
        }
    }
  if(s.length===ele.length)
    {
    return  true
    }
  else
    return  false
}
var cond=(x)=>x>=18;
var a= [34,55,78,56];
console.log(everyfun(a,cond))
