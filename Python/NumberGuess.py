"""
This is a numbers guessing game based on random roll of the dice. Written in Python.
from CodeCademy
"""

from random import randint
from time import sleep
#this will help simulate dice rolls

def get_user_guess(max_val):
  guess = int(raw_input("What is your guess (2-%d): " % max_val))
  return guess

def roll_dice(number_of_sides):
  first_roll = randint(1,number_of_sides)
  second_roll = randint(1,number_of_sides)
  max_val = number_of_sides * 2
  print "The maximum possible value is %d" % max_val
  guess = get_user_guess(max_val)
  if guess > max_val or guess < 2:
    print "That's inappropriate."
  else:
    print "Rolling..."
    sleep(2)
    print "The first roll is a %d " % first_roll
    sleep(1)
    print "The second die is a %d " % second_roll
    sleep(1)
    total_roll = first_roll + second_roll
    print "The total roll is %d " % total_roll
    print "Result..."
    sleep(1)
    if guess == total_roll:
      print "You won!"
      if number_of_sides < 6:
        print "Ha ha there you go. Thanks for playing."
      elif number_of_sides == 6:
        print "Try again, this time with more sided dice."
        sleep(0.5)
        return 7
      else:
        print "Get Out! Seriously you're cutoff. No way you got it twice"
    else:
      print "You lost..."
      if number_of_sides < 6:
        print "Just wasn't your night. Thanks for playing."
      elif number_of_sides == 6:
        print "Try again, this time with fewer sided dice."
        sleep(0.5)
        return 3
      else:
        print "Well still you got it that first time. That's pretty stellar."

sides = roll_dice(6)
roll_dice(sides)