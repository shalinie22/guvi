//to reverse the given words 
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const a = [];

inp.on("line", (data) => {
	a.push(data);
});

inp.on("close", () => {
    var s=a[0].split(" ");
    var r='';
    for(i=(s.length)-1;i>=0;i--)
    {
      if(i<s.length)
      {
        r+=s[i]+' ';
      }
      else
      {
        r+=s[i]+'';
        break
      }
    }
    console.log(r);   
});
