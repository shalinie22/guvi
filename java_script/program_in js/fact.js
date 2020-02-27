factorial of a number
const readline=require('readline');
const inp = readline.createInterface({
  input:process.stdin
});
inp.on("line",(n)=>{
	var fact=1;
	for(var i=1;i<=n;i++)
		fact*=i
	console.log(fact)
});
