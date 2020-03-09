const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    var e=(a[0].split(" "));
    var s=[];
    for(var i=0;i<e.length;i++)
    {
        for(var j=i+1;j<e.length;j++)
        {
            if(parseInt(e[i]) < parseInt(e[j]))
            {
            var t=e[i];
            e[i]=e[j];
            e[j]=t;
            }
        }
    }
    var s='';
    for(var i=0;i<e.length;i++)
    {
        s+=e[i]+" ";
    }
    console.log(s);
});
