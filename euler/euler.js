function divisibleTriangleNumber(n) {
  const getDiv = (num) => {
    if (num == 1) return 1;
    const divs = [1, num];
    for (let i = 2; i <= num / 3; i++) {
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
    let i = 1;
    for (i = 1; num > 0; i++) {
      num -= i;
    }

    if (num == 0) return i - 1;
    else return 0;
  };

  const getMinTriang = (num) => {
    let index = checkTriang(num);
    while (index === 0) {
      num++;
      index = checkTriang(num);
    }

    return [num, index];
  };

  let num = 0;
  let count = 1;

  for (let i = 1; i < 15000; i++) {
    num = num + i;
    count = i;
    if (getDiv(num) > n) break;
  }

  if (getDiv(num) < n) {
    for (let i = count; i < 15000; i++) {
      num = num + i;
      count = i;
      if (getDiv(num) > n) break;
    }
  }

  //console.log(getMinTriang(76576500));
  console.log(n);
  console.log(num);
  console.log(count);

  return num;
}

divisibleTriangleNumber(500);

const check = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
};

//check(12375)
