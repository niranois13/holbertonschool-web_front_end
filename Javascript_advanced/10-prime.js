function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }
  return (count);
}

function countPrimeNumbers100() {
  for (let y = 0; y < 100 ; y++) {
    countPrimeNumbers();
  }
}

let startTime = performance.now();
countPrimeNumbers100();
let endTime = performance.now();
let timeUsed = endTime - startTime;
console.log(`Execution time of calculating prime numbers 100 times was ${timeUsed} milliseconds.`);
