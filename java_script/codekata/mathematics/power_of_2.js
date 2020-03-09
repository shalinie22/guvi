//to check power of two
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
  var n=parseInt(a[0]);
  if(n%2==0)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
