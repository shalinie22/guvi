a=[1,2,3,4,5,6];
var p=function(a){
          for(var i=1;i<=a.length;i++)
          {
              var c=0;
              if(a[i]>1)
              {
                  for(var j=2;j<=i;j++)
                  {
                      if(a[i]%j==0)
                      {
                          c=1;
                          break;
                      }
                  }
              }
                  if(c==0)
                  {
                      console.log(a[i]);
                  }
              
          }
}
p(a);
