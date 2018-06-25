from random import randint
cls = "\n" * 100

board = []

for x in range(7):
  board.append(["O"] * 7)

def print_board(board):
  print cls
  for row in board:
    print " ".join(row)

def random_row(board):
  return randint(0, len(board) - 1)

def random_col(board):
  return randint(0, len(board[0]) - 1)

def set_computer():
  horizontal = randint(0,1)
  ship_row = random_row(board)
  ship_col = random_col(board)
  if horizontal == 0 and ship_row < (len(board)-1):
    ship2_row = ship_row + 1
    ship2_col = ship_col
  elif horizontal == 0:
    ship2_row = ship_row -1
    ship2_col = ship_col
  elif ship_col < (len(board)-1):
    ship2_col = ship_col + 1
    ship2_row = ship_row
  else:
    ship2_col = ship_col - 1
    ship2_row = ship_row
  print ship_col
  print ship_row
  print ship2_col
  print ship2_row
  print horizontal


# Everything from here on should go in your for loop!
def play_round():
  set_computer()
  for turn in range(len(board)):
    print "Turn ", turn + 1
    if turn == 4:
      print "Last chance, no pressure..."
    guess_col = int(raw_input("Guess Col: "))-1
    guess_row = int(raw_input("Guess Row: "))-1
    if guess_row == ship_row and guess_col == ship_col or guess_row == ship2_row and guess_col == ship2_col:
      board[guess_row][guess_col] = "#"
      print_board(board)
      print "Hit!"
      if board[ship_row][ship_col] == "#" and board[ship2_row][ship2_col] == "#":
        print "Jolly Good! You've sunk my battleship."
        break
    else:
      if (guess_row < 0 or guess_row > (len(board)-1)) \
      or (guess_col < 0 or guess_col > (len(board)-1)):
        print "Oops, that's not even in the ocean."
      elif (board[guess_row][guess_col] == "X"):
        print "You guessed that one already."
      else:
        board[guess_row][guess_col] = "X"
        print_board(board)
        print "You missed my battleship!"
        print "Turn", turn + 1
      if turn == len(board):
        board[ship_row][ship_col] = "#"
        board[ship2_row][ship2_col] = "#"
        print_board(board)
        print "I was here:"
        print "Out of Guesses."
        print "Game Over"
        
play_round()