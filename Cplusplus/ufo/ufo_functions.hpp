#include <vector>
#include <cstdlib>  // For srand() and rand()


void display_misses(int misses);
void end_game(std::string answer, std::string codeword);
void display_status(std::vector<char> incorrect, std::string answer);
std::string get_codeword();
// Declare functions
