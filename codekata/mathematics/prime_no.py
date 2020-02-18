#check whether it is prime or not
#function declaration of prime 
def prime(n):
#initialize f to zero
    f=0
    for i in range (2,n):
#condition to check the number factors
        if(n%i==0):
            f=1
            break
#condition to check the prime no. or not
    if(f==0):
        return "yes"
    else:
        return "no"
#get the number from the user
n=int(input())
print(prime(n))
