//to reverse the given words 
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const a=[];
inp.on("line",(data)=>{
  a.push(data);});
inp.on("close",()=>{
  var b=[];
  b=a[0].split(" ");
  console.log(b[1],b[0]);
  });
