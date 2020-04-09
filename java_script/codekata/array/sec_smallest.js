const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var f=a[1].split(" "),d=[],c=0;
    for(var i=0;i<f.length;i++)
    {
        for(var j=i+1;j<f.length;j++)
        {
            
            if(parseInt(f[i])>parseInt(f[j])){
                c=1;
            var t=parseInt(f[i]);
            f[i]=parseInt(f[j]);
            f[j]=t;}
        }
        d.push(f[i]);
    }
    if(c==1)console.log(d[1])
    else console.log("-1")
    
})
