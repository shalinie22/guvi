#Count the number of digits of a given number N
#function to find the number of digits
def dig(n):
#initialize c to zero
    c=0
#loop to count the digits
    while n!=0:
        r=n%10
        c+=1
        n=n//10
    return c
#get the number from the user
n=int(input())
print(dig(n))
