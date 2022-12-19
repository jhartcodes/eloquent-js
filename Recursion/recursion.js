// Recursion Examples.

// Example 1. This would be better with a simple loop.

function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Hooray");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}

// countDownRecursive(10);

// Example 2.

function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += 1;
  }
  console.log(total, "what is total");
  return total;
}

sumRange(12);
