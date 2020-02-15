#Print the factorial of the integer.
#define the function for factorial of a number
def fact(n):
#assign the value for fa as 1 
	fa=1
#put for loop to find the factorial
	for i in range (1,n+1):
		fa=fa*i
	return fa
#get the input from the user
n=int(input())
s=fact(n)
print(s)
