'''
Codecademy RPS game
Python 2.7.12
'''

from random import randint
from time import sleep

options = ["ROCK", 'PAPER', 'SCISSORS']
message = {
  "tie": "Yawn it's a tie!",
  "win": "Yay you won!",
  "lost": "Aww you lost!"}

def decide_winner(user_choice, computer_choice):
  print
  print "You chose %s " % user_choice
  print "The computer chose: %s" % computer_choice
  print "-----------------------------------"
  sleep(1)
  if user_choice == computer_choice:
    print message['tie']
  elif user_choice == options[0] and computer_choice == options[2]:
    print message['win']
  elif user_choice == options[1] and computer_choice == options[0]:
    print message['win']
  elif user_choice == options[2] and computer_choice == options[1]:
    print message['win']
  else:
    print message['lost']
  print
      
def play_RPS():
  user_choice=raw_input("Enter Rock, Paper or Scissors: ")
  user_choice = user_choice.upper()
  computer_choice = options[randint(0,2)]
  decide_winner(user_choice, computer_choice)
  
play_RPS()
  