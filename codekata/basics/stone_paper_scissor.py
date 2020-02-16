#rock,paper,scissor game
#function to find the output of the game
def rps(a,b):
#conditions to check who wins of the two
    if(a=='R' and b=='P'):
        return "P"
    elif(a=='R' and b=='S'):
    	return "R"
    elif(a=='S' and b=='P'):
    	return "S"
#if both are same return D
    else:
      return "D"
#get the input from the user
a,b=input().split()
print(rps(a,b))
