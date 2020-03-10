const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var el=a[0].split("");
    var n=0;
    for(var i=0;i<el.length;i++)
    {
        
            if(parseInt(el[i])==1)
            {
                n+=1;
            }
            else
            {
                n=0;
            }
        
    }
    if(n>1)
    {
       console.log(n); 
    }
    else{
        console.log("-1");
    }
});
