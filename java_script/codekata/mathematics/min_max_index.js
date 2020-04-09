const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" "),h=[],k=0,e=0;
    var temp =parseInt(b[0]);
    for(var i=0;i<b.length;i++)
    {
        if(temp>parseInt(b[i]))
        {
             temp=parseInt(b[i]);
              e=i;
             
        }
    }
    for(var i=0;i<b.length;i++)
    {
        if(temp<parseInt(b[i]))
        {
             temp=parseInt(b[i]);
              k=i;
             
        }
    }
    console.log(e+1,k+1);
})
