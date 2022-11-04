const {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo, 
    findNeedle,
    sumPositive
} = require("./app");

// 2. calculateCube
describe("calculateCube() returns the number (which is passed in) cubed", () => {
    it("calculateCube is defined", () => {
        expect(calculateCube(3)).toBeDefined();
    });

    it("2 cubed should return 8", () => {
        expect(calculateCube(2)).toEqual(8);
    });

    it("5 cubed should return 125", () => {
        expect(calculateCube(5)).toEqual(125);
    });
});

// 3. isAVowel
describe("isAVowel returns a boolean if the letter is a vowel or not(uppercase or lowercase).", () => {
    it("isAVowel is defined", () => {
        expect(isAVowel("o")).toBeDefined();
    });

    it('"a" should return true', () => {
        expect(isAVowel("a")).toBe(true);
    });

    it('"E" should return true', () => {
        expect(isAVowel("e")).toBe(true);
    });

    it('"f" should return false', () => {
        expect(isAVowel("f")).toBe(false);
    });
});

// 4. getTwoLengths
describe("getTwoLengths() returns an array of numbers where each number is the length of the corresponding string.", () => {
    it("getTwoLengths is defined", () => {
        expect(getTwoLengths("hi", "hey")).toBeDefined();
    });

    it('"hungry", "hippopotamus" should return [6, 12]', () => {
        expect(getTwoLengths("hungry", "hippopotamus")).toEqual([6, 12]);
    });

    it('["Tiger", "Supercalifragilisticexpialidocious"] should return [5, 34]', () => {
        expect(getTwoLengths("Tiger", "Supercalifragilisticexpialidocious")
    ).toEqual([5, 34]);
    });
});

// 5. sumArray
describe("sumArray() function returns the sum of all integers in an array", () => {
    it("sumArray is defined", () => {
        expect(sumArray([3, 2, 1])).toBeDefined();
    });

    it("[1,2,3,4,5] should return 15", () => {
        expect(sumArray([1, 2, 3, 4, 5])).toEqual(15);
    });

    it("[6,7,8,9,10] should return 40", () => {
        expect(sumArray([6, 7, 8, 9, 10])).toEqual(40);
    });
});

// 6.1 checkPrime
describe("checkPrime() looks up a number to check if it's a prime and returns a boolean", () => {
    it("checkPrime is defined", () => {
        expect(checkPrime(13)).toBeDefined();
    });

    it("7 is a prime and should return true", () => {
        expect(checkPrime(7)).toBe(true);
    });

    it("36 is not a prime and should return false", () => {
        expect(checkPrime(36)).toBe(false);
    });

    it("23 is a prime and should return true", () => {
        expect(checkPrime(23)).toBe(true);
    });
});

// 6.2 printPrimes
describe("printPrimes() takes in a number and prints each prime up to that number", () => {
    const log = jest.spyOn(console, "log");

    printPrimes(9);
    it("9 should print 2, 3, 5, 7", () => {
        expect(log).not.toHaveBeenCalledWith(undefined);
        expect(log).not.toHaveBeenCalledWith(1);
        expect(log).toHaveBeenCalledWith(3);
        expect(log).toHaveBeenCalledWith(5);
        expect(log).toHaveBeenCalledWith(7);
    });

    printPrimes(23);
    it("125 should print all primes from 2 up to 125", () => {
        expect(log).not.toHaveBeenCalledWith(undefined);
        expect(log).not.toHaveBeenCalledWith(1);
        expect(log).toHaveBeenCalledWith(7);
        expect(log).toHaveBeenCalledWith(17);
        expect(log).toHaveBeenCalledWith(19);
    });
});

// 7. printLongestWord
describe("printLongestWord() returns the longest word in an array", () => {
    it("printLongestWord is defined", () => {
        expect(printLongestWord(["test", "here"])).toBeDefined();
    });

    it("['hello', 'hi', 'greetings'] should return 'greetings'", () => {
        expect(printLongestWord(["hello", "hi", "greetings"])).toBe("greetings");
    });

    it("['a', 'be', 'see'] should return 'see'", () => {
        expect(printLongestWord(["a", "be", "see"])).toBe("see");
    });
});

// BONUS!

// 8. eulerFibo
describe("eulerFibo() takes in a number and finds the sum of even numbers in a fibonacci sequence up to that number", () => {
    it("eulerFibo is defined", () => {
        expect(eulerFibo(10)).toBeDefined();
    });

    it("even numbers up to 10 are [2, 8] and should return the sum of 10", () => {
        expect(eulerFibo(10)).toEqual(10);
    });

    it("even numbers up to 100 are [2, 8, 34] and should return the sum of 44", () => {
        expect(eulerFibo(100)).toEqual(44);
    });

    it("even numbers up to 1000 are [2, 8, 34, 144, 610] and should return the sum of 798", () => {
        expect(eulerFibo(1000)).toEqual(798);
    });
});

// 9. findNeedle
describe("findNeedle() returns 'Found the needle at position ${index}'", () => {
    expect(findNeedle(["needle", "test"])).toBeDefined();

    it("['needle', 'in', 'haystack'] should return 'found the needle at position 0'", () => {
        expect(findNeedle(["needle", "in", "haystack"])).toMatch(/needle/);
        expect(findNeedle(["needle", "in", "haystack"])).toBe("found the needle at position 0");
    });

    it("['found', 'the', 'needle'] should return 'found the needle at position 2'", () => {
        expect(findNeedle(["needle", "in", "haystack"])).toMatch(/needle/);
        expect(findNeedle(["found", "the", "needle"])).toBe("found the needle at position 2");
    });
});

// 10. sumPositive
describe("sumPositive() returns the sum of only the positive numbers in an array", () => {
    
    expect(sumPositive([1, -1])).toBeDefined();

    it("[1, -4, 7, 12] should return 20", () => {
        expect(sumPositive([1, -4, 7, 12])).toEqual(20);
    });

    it("[-1, 28, -24, 15] should return 43", () => {
        expect(sumPositive([-1, 28, -24, 15])).toEqual(43);
    });
});