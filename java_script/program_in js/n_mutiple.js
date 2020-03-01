const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin});
const n=[];
inp.on("line",(data)=>{
  n.push(data);});
inp.on("close",()=>{
  var a=parseInt(n[0].split(" "));
  console.log(n[0]+" "+(2*n[0])+" "+(3*n[0]));
});
