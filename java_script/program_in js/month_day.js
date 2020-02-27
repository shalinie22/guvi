Print the number of days in the month corresponding to that number.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (m) => {
	if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12)
    	console.log('31');
	else if(m==4 || m==6 || m==9 || m==11)
		console.log('30');
	else if(m==2)
		console.log('28');
	else
    	console.log('Error');
});
