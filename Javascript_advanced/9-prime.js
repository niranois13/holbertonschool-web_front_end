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

let startTime = performance.now();
countPrimeNumbers();
let endTime = performance.now();
let timeUsed = endTime - startTime;
console.log(`Execution time of printing countPrimeNumbers was ${timeUsed} milliseconds.`);
