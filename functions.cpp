#include <iostream>
#include <string>
#include <array>
#include <vector>
#include <cmath>

//calculate cube
int calculateCube(int num) {return pow(num, 3);}

// isVowel
bool isAVowel(char letter) {
    char vowelList[10] = {'a','e','i','o','u','A','E','I','O','U'};
    for (int i = 0; i < 10; i++)
    {
        if (letter == vowelList[i])
        {
            return true;
        }
    }
    return false;
    
}

//get2Lengths

std::array<int,2> getTwoLengths(std::string word1, std::string word2) {
    std::array<int,2> twoLengths = {word1.length(), word2.length()};
    return twoLengths;
}

int main() {
    // CalcCube
    std::cout << "Calculate Cube: " << std::to_string(calculateCube(5)) << "\n\n";

    // IsVowel
    std::cout << "Is a Vowel: \n" << "'A' is a Vowel: " << std::to_string(isAVowel('A')) << "\n";
    std::cout << "Is a Vowel: \n" << "'B' is a Vowel: " << std::to_string(isAVowel('B')) << "\n";
    std::cout << "Is a Vowel: \n" << "'a' is a Vowel: " << std::to_string(isAVowel('a')) << "\n";
    std::cout << "Is a Vowel: \n" << "'b' is a Vowel: " << std::to_string(isAVowel('b')) << "\n\n";

    // get2Lengths
    std::array<int,2> get2LTest = getTwoLengths("Hank", "Hippopopalous");
    std::cout << "Get two lengths: (\"Hank\", \"Hippopopalous\"): {";
    for (int i = 0; i < 2; i++)
    {
        std::cout << get2LTest[i];
        if (i < 1)
        {
            std::cout << ", ";
        }
        
    }
    std::cout << "}\n\n";
    
}