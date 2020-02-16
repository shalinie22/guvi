#check whether the sum is odd or even.
#function to find the odd or even
def odd_or_even(n,m):
    s=n+m
#condition to check the even or odd
    if(s%2==0):
    	return "even"
    else:
      	return "odd"
#get the input from the user
x,y=list(map(int,input().split()))
print(odd_or_even(x,y))
