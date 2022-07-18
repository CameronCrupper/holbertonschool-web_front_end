function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = false;
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      ++count;
    }
  }
  return count;
}
let start = performance.now();
countPrimeNumbers();
let end = performance.now();

let final = end - start;
console.log(`Execution time of printing countPrimeNumbers was ${final} milliseconds.`);
