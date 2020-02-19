#Find the Nth term of the series: 1, 4, 9, 25, 36, 49, 64, 81, .......
#function to find the nth number
def nth_number(n):
    for i in range (1,n+1):
#formula to find the square of the value
        w=i**2
    return(w)
#get the value of the nth number from the user
n=int(input())
#condition to check for positive number
if(n>=1):
    print(nth_number(n))
#condition to check the negative number 
elif(n<0):
    print("Error")
#condtion to check the number is zero
else:
    print("0")
