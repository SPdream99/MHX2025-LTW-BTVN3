function main() {
  const arr = [];
  const arr1 = [];
  let m = -Infinity;
  let n = 0;

  while (n <= 0 || isNaN(n)) {
    const userInput = prompt("Input quantity of Array: ");
    n = parseInt(userInput);
  }

  for (let i = 0; i < n; i++) {
    let t = NaN;
    
    while (isNaN(t)) {
      const userInput = prompt("Add number: ");
      t = parseInt(userInput);
    }

    arr.push(t);

    if (t > m) {
      m = t;
    }

    if (t > 0) {
      arr1.push(t);
    }
  }

  for (const t of arr) {
    if (t % 2 === 0) {
      console.log(t);
    }
  }

  console.log("Largest number: " + m);
  return arr1;
}

main();
