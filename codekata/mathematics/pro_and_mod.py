#Given 3 numbers a,b,c print a*b mod c
#function to find the mod 
def mod(a,b,c):
#product of 1st two numbers
    p=a*b
#mod of p by third number
    m=p%c
#return the m
    return m
#get the three numbers from the user
a,b,c=map(int,input().split())
print(mod(a,b,c))
