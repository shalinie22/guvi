#Given a number N, print its reverse.
#function to reverse
def reverse(n):
#initialize the s to zero
    s=0
#loop to find the reverse number
    while(n!=0):
#get the remainder of the number
        r=n%10
#formula to get the reverse number
        s=s*10+r
        n=n//10
#return the value s
    return s
#get the value from the user
n=int(input())
print(reverse(n))
