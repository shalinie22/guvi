const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
   var b=a[0].split("");
   var s=0;
   for(var i=0;i<b.length;i++)
   {
       if(parseInt(b[i])%2!=0)
       {
          s+=parseInt(b[i]); 
       }
   }
   if(s%2==0)
   {
        console.log("E");
   }
   else
   {
       console.log("O");
   }
});
