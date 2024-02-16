name = input("Type your name: ")
print("Welcome", name, "to this adventure!")

answer = input("You are on a dirt road, it has come to an end and you can go left or right. Which way would you like to go? ").lower()

if answer == "left":
    answer = input("You've come to a river, you can walk around it or swim accross? Type walk to walk around and swim to swim accross: ")
    
    if answer == "swim":
        print("You swam accross and were eaten by an alligator.") 
    elif answer == "walk":
        print("You walked for many miles, you ran out of water and you lost the game.") 
    else:
        print("Not a valid option. You lose.")
elif answer == "right":
    answer = input("You come to a bridge, it looks shaky, are you sure you want to cross it or head back (cross/back)? ")
  
    if answer == "cross":
        answer = input("You cross the bridge luckily and meet a stranger. Do you talk to them (yes/no)? ")
        
        if answer == "yes":
            print("You talk to the stranger and get the treasure. YOU WIN!")
        elif answer == "no":
            print("You ignore the stranger and miss out on the treasure. YOU LOSE!")
        else:
            print("Not a valid option you lose.")
            
    elif answer == "back":
        print("You went back but were captured by terrorists. :(") 
    else:
        print("Not a valid option. You lose.")
        
        
else: 
    print("Not a valid option. You lose.")
    
print("Thank you for playing", name)
    
