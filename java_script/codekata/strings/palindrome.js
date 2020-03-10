//to check it is a palindrome or not
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    or=a[0];
    d=a[0].split("");
    s='';
    for(var i=d.length-1;i>=0;i--)
    {
        s+=d[i]+"";
    }
    if(s==or)
    {
        console.log("YES");
    }
    else
    {
        console.log("NO");
    }
});
