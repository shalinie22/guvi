const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{a.push(data);});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var s=0;
    var c=0;
    var d=(b.length)-3;
    
    for(var i=0;i<b.length;i++)
    {
        
        if(i<=2)
        {
            s+=parseInt(b[i]);
        }
        else if(i>=d)
        {
            c+=parseInt(b[i]);
        }
    }
    if(s==c)
    {
        console.log("1");
    }
    else 
    {
        console.log("0")
    }
})
