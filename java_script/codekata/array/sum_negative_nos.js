const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{a.push(data);});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var s=0;
    var c=0;
    for(var i=0;i<b.length;i++)
    {
     if(b[i]<0)
     {
         s+=((-1)*b[i]);
     }
    }
    console.log((-1)*s);
})
