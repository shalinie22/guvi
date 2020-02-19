#find the Bitwise OR of the array elements.
#function to find the bitwise or 
def bitor(n):
#get the list of numbers from the user
    num=[int(x) for x in input().split()]
#assign the value a to list zero element
    a=num[0]
    for i in range(1,n):
 #formula to find the bitwise or
        a=a | num[i]
#print the output
    print(a,end="")
#get the input from the user
n=int(input())
bitor(n)

