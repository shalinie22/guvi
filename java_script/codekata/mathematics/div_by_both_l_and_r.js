//Given two numbers L,R print the smallest number which is divisible by both L and R.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
   var b=(a[0].split(" "));
   var c=parseInt(b[0]);
   var d=parseInt(b[1]);
   if(c>d)
   {
      var g=c;
   }
   else
   {
       g=d;
   }
   var s=[];
   for(var i=1;i<=g;i++)
   {
      if((i%c==0)&&(i%d==0))
      {
          console.log(i);
      }
   }
   /*var t=parseInt(s[0]);
   for(var i=0;i<s.length;i++)
   {
       if(t>parseInt(s[i]))
       {
           t=s[i];
       }
   }
   console.log(t);*/
});
