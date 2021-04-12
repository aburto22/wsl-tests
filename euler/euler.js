function divisibleTriangleNumber(n) {
  const getDiv = (num) => {
    if (num == 1) return 1;
    const divs = [1, num];
    for (let i = 2; i < num / 2; i++) {
      if (num % i == 0 && !divs.includes(i)) {
        divs.push(i);
        divs.push(num / i);
      }
    }
    return divs.length;
  };

  const getTriang = (n, count = 1) => {
    if (count == n) return count;
    return count + getTriang(n, count + 1);
  };

  const checkTriang = (num) => {
    for (let i = 1; num > 0; i++) {
      num -= i;
    }

    return num == 0;
  };

  let min = 0;
  let max = 10000;

  while (getDiv(max) < n) {
    min += 10000;
    max += 10000;
  }

  let num = 0;

  for (let i = min; i < max; i++) {
    if (checkTriang(i)) {
      if (getDiv(i) > n) {
        num = i;
        break;
      }
    }
  }

  return num;
}

console.log(divisibleTriangleNumber(500));
