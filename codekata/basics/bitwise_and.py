#find the Bitwise AND of the array elements.
#function to find the bitwise and 
def bitand(n):
#get the list of numbers from the user
    s=list(map(int,input().split()))
#assign the a to the list first element
    a=s[0]
    for i in range (1,n):
#formula to find the bitwise and
        a=a&s[i]
    return a
#get the no of element in the list from the user
n=int(input())
#call the function in the print 
print(bitand(n))
