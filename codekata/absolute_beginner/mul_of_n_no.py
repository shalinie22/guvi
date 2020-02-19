#Print the First 3 multiples of the given number "N"
#function to find the multiples of n
def multiples(n):
    for i in range (1,4):
#multiply the i with the number
        mul=(i*n)
        print(mul,end="")
#condition to give single space 
        if(i<3):
            print(end=" ")
#get the input from the user
n=int(input())
multiples(n)

