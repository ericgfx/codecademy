#include <iostream>
#include "ufo_functions.hpp"
#include <stdio.h>
#include <string.h>


void greet() {
  std::cout << "=============\nUFO: The Game\n=============\nInstructions: save your friend\nfrom alien abduction by guessing\nthe letters in the codeword.\n";
}



int main() {

  greet();
  std::string codeword = get_codeword();
  std::string answer;
  answer.append(codeword.length(), '-');
  int misses = 0;
  std::vector<char> incorrect;
  bool guess = false;
  char letter;
  
  while (answer != codeword && misses < 7){
    display_misses(misses);
    display_status(incorrect, answer);
    std::cout << "Please enter your guess: ";
    std::cin >> letter;
    
    for (int i = 0; i < codeword.length(); i++) {
      if (letter == codeword[i]) {
        answer[i] = letter;
        guess = true;
      }
    }
    
    if (guess) {
        std::cout << "\nCorrect! ";
      } else {
        std::cout << "\nIncorrect! The tractor beam pulls the person in further.\n";
        incorrect.push_back(letter);
        misses++;
      }
    
    guess = false;
  }
  
end_game(answer, codeword);

}