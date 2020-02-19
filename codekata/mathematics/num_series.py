#print the series till n numbers.
#function for series
def series(n):
#initiate m=1
    m=1
#initiate a=1
    a=1
    for i in range (1,n+1):
        a=m+a
        print(a,end="")
        if(i<n):
            print(end=" ")
        m+=2
#get the number from the user
n=int(input())
#call the function
series(n)
        
        
