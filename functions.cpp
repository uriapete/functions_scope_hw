#include <iostream>
#include <string>
#include <cmath>

//calculate cube
int calculateCube(int num) {return pow(num, 3);}

int main() {
    std::cout << "Calculate Cube: " << std::to_string(calculateCube(5)) << "\n\n";
}