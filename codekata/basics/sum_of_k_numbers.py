# to print the sum of the first K natural numbers.
#function to find the sum
def sum(n):
    su=0
#for loop to add up the numbers
    for i in range (1,n+1):
    	su+=i
    return su
#get the inputs from the user
n=int(input())
print(sum(n))
