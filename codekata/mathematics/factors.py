#Given a number N, print its factors.
#function to find the factors
def fact(n):
    for i in range (1,n+1):
#condition to check for factors
        if(n%i==0):
            print(i,end="")
            if(i<n):
                print(end=" ")
#get the input from the user
n=int(input())
#call the function fact
fact(n)
