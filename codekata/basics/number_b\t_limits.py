#to check weather the number is between the given limit
#function to find the number is available between the two numbers
def number(n,l,r):
    if(n>=l and n<=r):
        return "yes"
    else:
        return "no"
#get the number to be checked from the user
n=int(input())
#get the two numbers that are to be present
l,r=map(int,input().split())
print(number(n,l,r))
