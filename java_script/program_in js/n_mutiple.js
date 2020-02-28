const readline=require('readline');
const inp = readline.createInterface({
  input:process.stdin
});
inp.on("line",(n)=>{
  	var s=' ';
  	for(var i=1;i<=3;i++)
  	{
    	s+=(n*i)+'';
  	}
  	console.log(s);
});
