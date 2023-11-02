const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}
exports.factorial = factorial

exports.fibonacci = function(a) {
  let result = [0];
  if (a > 0) {
    result.push(1);
  }
  for (let i = 2; i <= a; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

exports.randomInt = function(a) {
  return Math.floor(Math.random() * a);
}

exports.randomIntBetween = function(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

exports.isPrime = function(a) {
  if (a === 1) {
    return false;
  } else if (a === 2) {
    return true;
  } else {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  }
}

exports.primeFactors = function(a) {
  let result = [];
  for (let i = 2; i <= a; i++) {
    while (a % i === 0) {
      result.push(i);
      a /= i;
    }
  }
  return result;
}

exports.gcd = function(a, b) {
  if (b === 0) {
    return a;
  } else {
    return exports.gcd(b, a % b);
  }
}

exports.lcm = function(a, b) {
  return (a * b) / exports.gcd(a, b);
}

exports.isEven = function(a) {
  return a % 2 === 0;
}

exports.isOdd = function(a) {
  return a % 2 !== 0;
}

exports.isDivisibleBy = function(a, b) {
  return a % b === 0;
}

exports.isMultipleOf = function(a, b) {
  return b % a === 0;
}

exports.isPerfectSquare = function(a) {
  return Math.sqrt(a) % 1 === 0;
}

exports.isPerfectCube = function(a) {
  return Math.cbrt(a) % 1 === 0;
}

exports.isPowerOfTwo = function(a) {
  return Math.log2(a) % 1 === 0;
}

exports.isPowerOf = function(base, num) {
  return Math.log(num) / Math.log(base) % 1 === 0;
}

exports.nthRoot = function(a, b) {
  return Math.pow(a, 1 / b);
}