const demoPackage = require('../src/index');

describe('factorial', () => {
  it('should return 1 for 0', () => {
    expect(demoPackage.factorial(0)).toBe(1);
  });

  it('should return the correct value for positive integers', () => {
    expect(demoPackage.factorial(1)).toBe(1);
    expect(demoPackage.factorial(2)).toBe(2);
    expect(demoPackage.factorial(3)).toBe(6);
    expect(demoPackage.factorial(4)).toBe(24);
    expect(demoPackage.factorial(5)).toBe(120);
  });
});

describe('fibonacci', () => {
  it('should return the correct sequence for 0', () => {
    expect(demoPackage.fibonacci(0)).toEqual([0]);
  });

  it('should return the correct sequence for 1', () => {
    expect(demoPackage.fibonacci(1)).toEqual([0, 1]);
  });

  it('should return the correct sequence for positive integers', () => {
    expect(demoPackage.fibonacci(2)).toEqual([0, 1, 1]);
    expect(demoPackage.fibonacci(3)).toEqual([0, 1, 1, 2]);
    expect(demoPackage.fibonacci(4)).toEqual([0, 1, 1, 2, 3]);
    expect(demoPackage.fibonacci(5)).toEqual([0, 1, 1, 2, 3, 5]);
  });
});

describe('randomInt', () => {
  it('should return a random integer between 0 and the input', () => {
    for (let i = 0; i < 100; i++) {
      const result = demoPackage.randomInt(10);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(10);
    }
  });
});

describe('randomIntBetween', () => {
  it('should return a random integer between the inputs', () => {
    for (let i = 0; i < 100; i++) {
      const result = demoPackage.randomIntBetween(5, 10);
      expect(result).toBeGreaterThanOrEqual(5);
      expect(result).toBeLessThan(10);
    }
  });
});

describe('isPrime', () => {
  it('should return false for 1', () => {
    expect(demoPackage.isPrime(1)).toBe(false);
  });

  it('should return true for 2', () => {
    expect(demoPackage.isPrime(2)).toBe(true);
  });

  it('should return the correct value for positive integers', () => {
    expect(demoPackage.isPrime(3)).toBe(true);
    expect(demoPackage.isPrime(4)).toBe(false);
    expect(demoPackage.isPrime(5)).toBe(true);
    expect(demoPackage.isPrime(6)).toBe(false);
    expect(demoPackage.isPrime(7)).toBe(true);
    expect(demoPackage.isPrime(8)).toBe(false);
    expect(demoPackage.isPrime(9)).toBe(false);
    expect(demoPackage.isPrime(10)).toBe(false);
    expect(demoPackage.isPrime(11)).toBe(true);
  });
});

describe('primeFactors', () => {
  it('should return an empty array for 1', () => {
    expect(demoPackage.primeFactors(1)).toEqual([]);
  });

  it('should return the correct factors for positive integers', () => {
    expect(demoPackage.primeFactors(2)).toEqual([2]);
    expect(demoPackage.primeFactors(3)).toEqual([3]);
    expect(demoPackage.primeFactors(4)).toEqual([2, 2]);
    expect(demoPackage.primeFactors(5)).toEqual([5]);
    expect(demoPackage.primeFactors(6)).toEqual([2, 3]);
    expect(demoPackage.primeFactors(7)).toEqual([7]);
    expect(demoPackage.primeFactors(8)).toEqual([2, 2, 2]);
    expect(demoPackage.primeFactors(9)).toEqual([3, 3]);
    expect(demoPackage.primeFactors(10)).toEqual([2, 5]);
    expect(demoPackage.primeFactors(11)).toEqual([11]);
  });
});

describe('gcd', () => {
  it('should return the correct value for positive integers', () => {
    expect(demoPackage.gcd(2, 3)).toBe(1);
    expect(demoPackage.gcd(4, 6)).toBe(2);
    expect(demoPackage.gcd(9, 12)).toBe(3);
    expect(demoPackage.gcd(15, 25)).toBe(5);
    expect(demoPackage.gcd(18, 24)).toBe(6);
    expect(demoPackage.gcd(21, 28)).toBe(7);
    expect(demoPackage.gcd(27, 36)).toBe(9);
    expect(demoPackage.gcd(30, 42)).toBe(6);
    expect(demoPackage.gcd(33, 44)).toBe(11);
    expect(demoPackage.gcd(35, 49)).toBe(7);
  });
});

describe('lcm', () => {
  it('should return the correct value for positive integers', () => {
    expect(demoPackage.lcm(2, 3)).toBe(6);
    expect(demoPackage.lcm(4, 6)).toBe(12);
    expect(demoPackage.lcm(9, 12)).toBe(36);
    expect(demoPackage.lcm(15, 25)).toBe(75);
    expect(demoPackage.lcm(18, 24)).toBe(72);
    expect(demoPackage.lcm(21, 28)).toBe(84);
    expect(demoPackage.lcm(27, 36)).toBe(108);
    expect(demoPackage.lcm(30, 42)).toBe(210);
    expect(demoPackage.lcm(33, 44)).toBe(132);
    expect(demoPackage.lcm(35, 49)).toBe(245);
  });
});

describe('isEven', () => {
  it('should return true for even numbers', () => {
    expect(demoPackage.isEven(0)).toBe(true);
    expect(demoPackage.isEven(2)).toBe(true);
    expect(demoPackage.isEven(4)).toBe(true);
    expect(demoPackage.isEven(6)).toBe(true);
    expect(demoPackage.isEven(8)).toBe(true);
    expect(demoPackage.isEven(10)).toBe(true);
  });

  it('should return false for odd numbers', () => {
    expect(demoPackage.isEven(1)).toBe(false);
    expect(demoPackage.isEven(3)).toBe(false);
    expect(demoPackage.isEven(5)).toBe(false);
    expect(demoPackage.isEven(7)).toBe(false);
    expect(demoPackage.isEven(9)).toBe(false);
    expect(demoPackage.isEven(11)).toBe(false);
  });
});

describe('isOdd', () => {
  it('should return true for odd numbers', () => {
    expect(demoPackage.isOdd(1)).toBe(true);
    expect(demoPackage.isOdd(3)).toBe(true);
    expect(demoPackage.isOdd(5)).toBe(true);
    expect(demoPackage.isOdd(7)).toBe(true);
    expect(demoPackage.isOdd(9)).toBe(true);
    expect(demoPackage.isOdd(11)).toBe(true);
  });

  it('should return false for even numbers', () => {
    expect(demoPackage.isOdd(0)).toBe(false);
    expect(demoPackage.isOdd(2)).toBe(false);
    expect(demoPackage.isOdd(4)).toBe(false);
    expect(demoPackage.isOdd(6)).toBe(false);
    expect(demoPackage.isOdd(8)).toBe(false);
    expect(demoPackage.isOdd(10)).toBe(false);
  });
});

describe('isDivisibleBy', () => {
  it('should return true if a is divisible by b', () => {
    expect(demoPackage.isDivisibleBy(4, 2)).toBe(true);
    expect(demoPackage.isDivisibleBy(6, 3)).toBe(true);
    expect(demoPackage.isDivisibleBy(10, 5)).toBe(true);
    expect(demoPackage.isDivisibleBy(15, 3)).toBe(true);
    expect(demoPackage.isDivisibleBy(21, 7)).toBe(true);
    expect(demoPackage.isDivisibleBy(28, 4)).toBe(true);
  });

  it('should return false if a is not divisible by b', () => {
    expect(demoPackage.isDivisibleBy(3, 2)).toBe(false);
    expect(demoPackage.isDivisibleBy(5, 3)).toBe(false);
    expect(demoPackage.isDivisibleBy(11, 5)).toBe(false);
    expect(demoPackage.isDivisibleBy(16, 3)).toBe(false);
    expect(demoPackage.isDivisibleBy(22, 7)).toBe(false);
    expect(demoPackage.isDivisibleBy(29, 4)).toBe(false);
  });
});

describe('isMultipleOf', () => {
  it('should return true if a is a multiple of b', () => {
    expect(demoPackage.isMultipleOf(2, 4)).toBe(true);
    expect(demoPackage.isMultipleOf(3, 6)).toBe(true);
    expect(demoPackage.isMultipleOf(5, 10)).toBe(true);
    expect(demoPackage.isMultipleOf(3, 15)).toBe(true);
    expect(demoPackage.isMultipleOf(7, 21)).toBe(true);
    expect(demoPackage.isMultipleOf(4, 28)).toBe(true);
  });

  it('should return false if a is not a multiple of b', () => {
    expect(demoPackage.isMultipleOf(4, 3)).toBe(false);
    expect(demoPackage.isMultipleOf(6, 5)).toBe(false);
    expect(demoPackage.isMultipleOf(10, 11)).toBe(false);
    expect(demoPackage.isMultipleOf(15, 16)).toBe(false);
    expect(demoPackage.isMultipleOf(21, 22)).toBe(false);
    expect(demoPackage.isMultipleOf(28, 29)).toBe(false);
  });
});

describe('isPerfectSquare', () => {
  it('should return true for perfect squares', () => {
    expect(demoPackage.isPerfectSquare(0)).toBe(true);
    expect(demoPackage.isPerfectSquare(1)).toBe(true);
    expect(demoPackage.isPerfectSquare(4)).toBe(true);
    expect(demoPackage.isPerfectSquare(9)).toBe(true);
    expect(demoPackage.isPerfectSquare(16)).toBe(true);
    expect(demoPackage.isPerfectSquare(25)).toBe(true);
    expect(demoPackage.isPerfectSquare(36)).toBe(true);
    expect(demoPackage.isPerfectSquare(49)).toBe(true);
    expect(demoPackage.isPerfectSquare(64)).toBe(true);
    expect(demoPackage.isPerfectSquare(81)).toBe(true);
  });

  it('should return false for non-perfect squares', () => {
    expect(demoPackage.isPerfectSquare(2)).toBe(false);
    expect(demoPackage.isPerfectSquare(3)).toBe(false);
    expect(demoPackage.isPerfectSquare(5)).toBe(false);
    expect(demoPackage.isPerfectSquare(6)).toBe(false);
    expect(demoPackage.isPerfectSquare(7)).toBe(false);
    expect(demoPackage.isPerfectSquare(8)).toBe(false);
    expect(demoPackage.isPerfectSquare(10)).toBe(false);
    expect(demoPackage.isPerfectSquare(11)).toBe(false);
    expect(demoPackage.isPerfectSquare(12)).toBe(false);
    expect(demoPackage.isPerfectSquare(13)).toBe(false);
  });
});

describe('isPerfectCube', () => {
  it('should return true for perfect cubes', () => {
    expect(demoPackage.isPerfectCube(0)).toBe(true);
    expect(demoPackage.isPerfectCube(1)).toBe(true);
    expect(demoPackage.isPerfectCube(8)).toBe(true);
    expect(demoPackage.isPerfectCube(27)).toBe(true);
    expect(demoPackage.isPerfectCube(64)).toBe(true);
    expect(demoPackage.isPerfectCube(125)).toBe(true);
    expect(demoPackage.isPerfectCube(216)).toBe(true);
    expect(demoPackage.isPerfectCube(343)).toBe(true);
    expect(demoPackage.isPerfectCube(512)).toBe(true);
    expect(demoPackage.isPerfectCube(729)).toBe(true);
  });

  it('should return false for non-perfect cubes', () => {
    expect(demoPackage.isPerfectCube(2)).toBe(false);
    expect(demoPackage.isPerfectCube(3)).toBe(false);
    expect(demoPackage.isPerfectCube(5)).toBe(false);
    expect(demoPackage.isPerfectCube(6)).toBe(false);
    expect(demoPackage.isPerfectCube(7)).toBe(false);
    expect(demoPackage.isPerfectCube(9)).toBe(false);
    expect(demoPackage.isPerfectCube(10)).toBe(false);
    expect(demoPackage.isPerfectCube(11)).toBe(false);
    expect(demoPackage.isPerfectCube(12)).toBe(false);
    expect(demoPackage.isPerfectCube(13)).toBe(false);
  });
});

describe('isPowerOfTwo', () => {
  it('should return true for powers of two', () => {
    expect(demoPackage.isPowerOfTwo(1)).toBe(true);
    expect(demoPackage.isPowerOfTwo(2)).toBe(true);
    expect(demoPackage.isPowerOfTwo(4)).toBe(true);
    expect(demoPackage.isPowerOfTwo(8)).toBe(true);
    expect(demoPackage.isPowerOfTwo(16)).toBe(true);
    expect(demoPackage.isPowerOfTwo(32)).toBe(true);
    expect(demoPackage.isPowerOfTwo(64)).toBe(true);
    expect(demoPackage.isPowerOfTwo(128)).toBe(true);
    expect(demoPackage.isPowerOfTwo(256)).toBe(true);
    expect(demoPackage.isPowerOfTwo(512)).toBe(true);
  });

  it('should return false for non-powers of two', () => {
    expect(demoPackage.isPowerOfTwo(3)).toBe(false);
    expect(demoPackage.isPowerOfTwo(5)).toBe(false);
    expect(demoPackage.isPowerOfTwo(6)).toBe(false);
    expect(demoPackage.isPowerOfTwo(7)).toBe(false);
    expect(demoPackage.isPowerOfTwo(9)).toBe(false);
    expect(demoPackage.isPowerOfTwo(10)).toBe(false);
    expect(demoPackage.isPowerOfTwo(11)).toBe(false);
    expect(demoPackage.isPowerOfTwo(12)).toBe(false);
    expect(demoPackage.isPowerOfTwo(13)).toBe(false);
    expect(demoPackage.isPowerOfTwo(14)).toBe(false);
    expect(demoPackage.isPowerOfTwo(15)).toBe(false);
  });
});

describe('isPowerOf', () => {
  it('should return true for powers of the same base', () => {
    expect(demoPackage.isPowerOf(2, 4)).toBe(true);
    expect(demoPackage.isPowerOf(2, 8)).toBe(true);
    expect(demoPackage.isPowerOf(2, 16)).toBe(true);
    expect(demoPackage.isPowerOf(2, 32)).toBe(true);
    expect(demoPackage.isPowerOf(2, 64)).toBe(true);
    expect(demoPackage.isPowerOf(2, 128)).toBe(true);
    expect(demoPackage.isPowerOf(2, 256)).toBe(true);
    expect(demoPackage.isPowerOf(2, 512)).toBe(true);
  });

  it('should return false for non-powers of the same base', () => {
    expect(demoPackage.isPowerOf(2, 3)).toBe(false);
    expect(demoPackage.isPowerOf(2, 5)).toBe(false);
    expect(demoPackage.isPowerOf(2, 6)).toBe(false);
    expect(demoPackage.isPowerOf(2, 7)).toBe(false);
    expect(demoPackage.isPowerOf(2, 9)).toBe(false);
    expect(demoPackage.isPowerOf(2, 10)).toBe(false);
    expect(demoPackage.isPowerOf(2, 11)).toBe(false);
    expect(demoPackage.isPowerOf(2, 12)).toBe(false);
    expect(demoPackage.isPowerOf(2, 13)).toBe(false);
    expect(demoPackage.isPowerOf(2, 14)).toBe(false);
    expect(demoPackage.isPowerOf(2, 15)).toBe(false);
  });
});

describe('nthRoot', () => {
  it('should return the correct value for positive integers', () => {
    expect(demoPackage.nthRoot(1, 1)).toBe(1);
    expect(demoPackage.nthRoot(4, 2)).toBe(2);
    expect(demoPackage.nthRoot(8, 3)).toBe(2);
    expect(demoPackage.nthRoot(27, 3)).toBe(3);
    expect(demoPackage.nthRoot(16, 4)).toBe(2);
    expect(demoPackage.nthRoot(32, 5)).toBe(2);
    expect(demoPackage.nthRoot(64, 6)).toBe(2);
    expect(demoPackage.nthRoot(128, 7)).toBe(2);
    expect(demoPackage.nthRoot(256, 8)).toBe(2);
    expect(demoPackage.nthRoot(512, 9)).toBe(2);
  });
});