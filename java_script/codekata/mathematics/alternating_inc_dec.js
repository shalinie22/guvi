heck if the values are alternating between increasing and decreasing.
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
  var n=a[0];
  var e=a[1].split(" ");
  var c=1;
  for(var i=0;i<e.length;i+=2)
  {
    if(e[i]<e[i+1])
    {
      c=0;
      continue;
    }
    else
    {
      break;
    }
  }
  for(var i=0;i<e.length;i+=2)
  {
    if(e[i]>e[i+1])
    {
      c=0;
      continue;
    }
    else
    {
      break;
    }
  }
  
    if(c==0)
    {
      console.log("yes");
    }
  else
  {
    console.log("no");
  }
});
    
