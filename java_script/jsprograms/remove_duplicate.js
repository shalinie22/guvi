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
        var c=0;
        for(var j=i+1;j<e.length;j++)
        {
           if(parseInt(e[j])==parseInt(e[i]))
           {
               c=1;
               break;
           }
        }
        if(c==0)
        {
            s.push(e[i]);
        }
    }
    var su='';
    for(var i=0;i<s.length;i++)
    {
        su+=s[i]+" ";
    }
    console.log(su);
});
