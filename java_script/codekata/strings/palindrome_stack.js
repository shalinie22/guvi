const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var s=data;
  var a='';
  for(var i=s.length-1;i>=0;i--)
  {
   a+=s[i]
  }
  if(s==a)
  {
    console.log("yes");
  }
  else
  {
  console.log(no);
  }
});
