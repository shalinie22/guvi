#Find the minimum among 10 numbers.
#get the list of input from the user
a=list(map(int,input().split()))
#use the sort function to find the minimum number
a.sort()
#print the output with slicing 
print("",*a[:1])
