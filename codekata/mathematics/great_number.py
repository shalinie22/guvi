def great_number(n):
    s=0
    p=1
    while(n!=0):
        r=n%10
        s+=r
        p*=r
        n=n//10
    a=s+p
    if(a==n):
        return "Great"
    else:
        return "no"
n=int(input())
print(great_number(n))
      	
