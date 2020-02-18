#print the product of the digits.
#function to find the product of digits
def pod(n):
#initialize c to zero
    c=1
#loop to find the product of the digits
    while n!=0:
        r=n%10                                           
        c=c*r
        n=n//10
    return c
#get the number from the user
n=int(input())
print(pod(n))
