# finding whether the given two numbers is co-prime or not.
#function declaration of coprime
def coprime(n,m):
    for i in range(1,n):
#condition to find  the hcf
        if(n%i==0) and (m%i==0):
            h=i
#condition to check for co prime or not
    if(h==1):
        return "1"
    else:
        return "0"
#get the two numbers from the user
n,m=map(int,input().split())
print(coprime(n,m))
