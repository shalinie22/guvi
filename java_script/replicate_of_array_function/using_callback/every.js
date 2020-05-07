// to find check whether the element in an array is greater than or equal to 18 
/*input:[34,55,78,56]
  output:true*/
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
