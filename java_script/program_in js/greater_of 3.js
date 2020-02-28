const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const a = [];
inp.on("line", (data) => {
	a.push(data);
});
inp.on("close", () => {
	var f=a[0],s=a[1],t=a[2];
	if(f>s &&f>t){
		console.log(f)}
	else if(s>f && s>t){
		console.log(s)}
	else{
		console.log(t)}
});
