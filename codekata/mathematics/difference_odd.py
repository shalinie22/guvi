#Find their difference and check whether it is even or odd.
#function odd declaration
def odd (n,m):
#find the difference between the two numbers
    d=n-m
#condition to check odd or even
    if(d%2==0):
        return "even"
    else:
        return "odd"
#get the inputs of two numbers from the user
n,m=map(int,input().split())
print(odd(n,m))
