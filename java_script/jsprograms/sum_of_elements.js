const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    var e=a[0].split(" ");
    var t=0;
    for(var i=0;i<e.length;i++)
    {
        t+=parseInt(e[i]);
    }
    console.log(t);
});
