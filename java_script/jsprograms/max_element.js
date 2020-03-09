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
    console.log(e);
    var t=parseInt(e[0]);
    for(var i=0;i<e.length;i++)
    {
        if(t<parseInt(e[i]))
        {
            t=e[i];
        }
    }
    console.log(t);
});
