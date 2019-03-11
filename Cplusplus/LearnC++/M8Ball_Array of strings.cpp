#include <iostream>
#include <stdlib.h>
char strs[10][29]={
  "It is certain.", 
  "Sure thing Bro.", 
  "Best not to.", 
  "It is decidedly so.", 
  "No, here thar be monsters", 
  "Not during this lifetime",
  "Yep",
  "Ask again laters.",
  "Let me check my twitter",
  "Very doubtful."
};

int main() {
  
  std::cout << "MAGIC 8-BALL:\n\n";
  
  //set seed of random number generator
  srand(time(NULL)); 
  
  int answer = rand() % 10;
  std::cout << strs[answer];
  
  
  
}