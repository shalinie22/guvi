#write a program to print the table of 9 till N
#function multiple_of_9 is declared
def multiple_of_9 (n):
    for i in range (1,n+1):
#print the multiple of 9 till the loop runs
        print(9*i,end="")
#condition for leaving one space
        if(i<n):
            print(end=" ")
#get the input number from the user
n=int(input())
multiple_of_9(n)
