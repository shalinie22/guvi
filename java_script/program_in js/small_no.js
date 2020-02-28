const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data)
});
inp.on("close",()=>{
  var e=[];
  e=a[0].split(" ") 
  var d=parseInt(e[0]),s=parseInt(e[1]);
  if(d>s)
   	console.log(s);
  else
    console.log(d);
});
