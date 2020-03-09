const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    
	var el=a[0].split(" ");
    var  t=parseInt(el[0]);
     var r=parseInt(el[1]);
     var c=0;
     for(var i=t;i<=r;i++)
     {
         var n=0;
       for(var j=2;j<=i;j++)
       {
           if(i%j==0 && i!==j)
           {
            n=1;
            break;
           }
       }
       if(n==0)
       {
           c++;
       }
     }
     console.log(c);
});
