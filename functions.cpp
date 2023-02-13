#include <iostream>
#include <string>
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

int main() {
    // CalcCube
    std::cout << "Calculate Cube: " << std::to_string(calculateCube(5)) << "\n\n";
    // IsVowel
    std::cout << "Is a Vowel: \n" << "'A' is a Vowel: " << std::to_string(isAVowel('A')) << "\n";
    std::cout << "Is a Vowel: \n" << "'B' is a Vowel: " << std::to_string(isAVowel('B')) << "\n";
    std::cout << "Is a Vowel: \n" << "'a' is a Vowel: " << std::to_string(isAVowel('a')) << "\n";
    std::cout << "Is a Vowel: \n" << "'b' is a Vowel: " << std::to_string(isAVowel('b')) << "\n\n";
}