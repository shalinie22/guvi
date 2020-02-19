#find the sum of Arithmetic Series with a=A, d=B and n=C
#function to find the series
def asp(a,b,c):
#initialize the s to zero
    s=0
#initialize i to zero
    i=0
#loop to find the arithmatic value of 3 nubmers
    while(i<c):
        s = s + a 
        a = a + b 
        i = i + 1
    return s
#get the input from the user
a,b,c=map(int,input().split())
print(asp(a,b,c))
