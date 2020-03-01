const readline=require('readline');
const inp = readline.createInterface({
    input:process.stdin
});
inp.on("line",(n)=>{
    var c=0;
    for(var i=1;i<=n+1;i++)
    {
        if(n%i==0)
        {
            var d=i;
            c+=1;
            
        }
    }
    if(c>2)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
})
