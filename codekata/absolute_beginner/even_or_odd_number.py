#Print "Odd" or "Even" for the corresponding cases
#define the function for odd or even
def even_or_odd(n):
#to check whether the number is zero
    if(n==0):
    	print("Zero")
#to check whether the number is even
    elif(n%2==0):
    	print("Even")
#orelse print odd
    else:
    	print("Odd")
#get the number from the user
num=float(input(""))
#roundoff the value 
n=round(num)
#call the function even_or_odd
even_or_odd(n)
