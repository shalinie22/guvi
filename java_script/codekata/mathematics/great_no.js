//to check whether it is a great no or not
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var d=parseInt(a[0]);
    var b=a[0].split("");
    var n=1;
    var s=0;
    for(var i=0;i<b.length;i++)
    {
        n*=parseInt(b[i]);
        s+=parseInt(b[i]);
    }
    if((s+n)==d)
    {
      console.log("Great");
    }
    else
    {
        console.log("no");
    }
});
