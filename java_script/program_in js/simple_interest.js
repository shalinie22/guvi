const readline=require('readline');
const inp = readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
  var p=[];
  p=a[0].split(" ");
  var s=p[0],g=p[1],r=p[2];
  console.log(((s*g*r)/100).toFixed(2));
});
