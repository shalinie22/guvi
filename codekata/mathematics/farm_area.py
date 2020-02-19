#print the area of the farm upto 5 decimal decimals.
#function to find the area of farm
def rec(n,m):
#formula to find the area
    r=n*m
#round off the area to 5 decimal points
    a=round(r,5)
    return a
#get the value of length and breadth from the user
n,m=map(float,input().split())
print(rec(n,m))
