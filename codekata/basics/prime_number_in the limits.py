#count the number of prime numbers in the range 
#function to find the prime no count
def pr(a,b):
#initialize the count to zero
    c=0
#for loop for the limit iteration
    for i in range (a,b+1):
#condition to check i is greater than 1
        if(i>1):
#logic to find the prime no
            for j in range (2,i):
                if(i%j==0):
                    break
            else:
#keeps the count of prime numbers
                c+=1
    return c
a,b=list(map(int,input("").split()))
print(pr(a,b))
