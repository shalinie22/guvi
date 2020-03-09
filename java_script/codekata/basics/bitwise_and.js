const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    
    var e=a[0];
    var el=a[1].split(" ");
    var s=1;
  for(var i=1;i<el.length;i++)
  {
    s&=el[i];
  }
  console.log(s);
});
    
