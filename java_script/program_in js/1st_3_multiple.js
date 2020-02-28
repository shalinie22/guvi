const readline=require('readline');
const inp = readline.createInterface({
  input:process.stdin
});
inp.on("line",(n)=>{
  if(n!=0)
  {
  	var s=' ';
  	for(var i=1;i<=n;i++)
  	{
    	s+=(9*i)+' ';
  	}
  	console.log(s);
  }
  else
  {
    console.log("NULL");
  }
});
