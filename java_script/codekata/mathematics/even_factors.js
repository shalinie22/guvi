//print the even factors of N.If the even factor does not exists for N print '-1'.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    var s=[],c=0;
    for(var i=1;i<=b;i++)
    {
    if(b%i==0)
    {
        if(i%2==0)
        {
            s.push(i);
            c+=1;
        }
        
    }
    }
    su='';
    for(var i=0;i<s.length;i++){
        if(i<s.length)
        {
        su+=s[i]+' ';
        }
        else
        {
          su+=s[i]+'';  
        }
    }
    if(c==0)
    {
        console.log("-1");
    }
    else
    {
        console.log(su);
    }
    
});
