#Find the smallest number and largest number and
#print both the indices(1 based indexing).
#get the number from the user
num=int(input())
#get the list from the user
n = input().split()
#find the smallest number
s=min(n)
#find the largest number
l=max(n)
#print its indices 
print(n.index(s)+1,end=" ")
print(n.index(l)+1,end="")
