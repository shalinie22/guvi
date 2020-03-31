const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{a.push(data);});
inp.on("close",()=>{
    var b=a[0].split("");
    var s='';
    var c=0;
    var d=(b.length/2);
    
    for(var i=0;i<b.length;i++)
    {
        if(b.length%2!=0){
        if(i==Math.floor(d))
        {
           s+="*"+""; 
        }
        else
        {
            s+=b[i]+"";
        }}
        else
        {
            if(i==(d) || i==d-1)
        {
           s+="*"+""; 
        }
        else
        {
            s+=b[i]+"";
        }
        }
    }
    console.log(s);
})
