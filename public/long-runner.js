const longAddition = (number1, number2) => {
  const t0 = performance.now();
  const seconds = 1;
  const start = new Date().getTime();
  const delay = seconds * 1000;
  while (true) {
    if (new Date().getTime() - start > delay) {
      break;
    }
  }

  const total = number1 + number2;
  const t1 = performance.now();
  const perf = `Call to longAddition took ${t1 - t0} milliseconds.`;
  return { total, perf };
};

onmessage = (e) => {
  console.log(e);
  const { number1, number2 } = e.data;
  const { total, perf } = longAddition(number1, number2);
  postMessage({
    total,
    perf,
  });
};
