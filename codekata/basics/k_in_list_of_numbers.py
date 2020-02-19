#to check the presence of the number in the list
#function to find the number in the list
def num(x,y):
#get the list of numbers from the user
    g=[int(i) for i in input().split()]
#loop to search the element in the list 
    for i in g:
#condition to check the number in the list
        if(y==i):
            return 'yes'
            break
#orelse print no
    else:
        return 'no'
#get the input from the user
x,y=list(map(int,input().split()))
print(num(x,y),end="")
