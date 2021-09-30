const fib = (n: number):number => (n < 2 ? n : fib(n - 1) + fib(n - 2));

const onmessage = (e: any) => {
  const { num } = e.data;
  const startTime = new Date().getTime();
  const fibNum = fib(num);
  postMessage({
    fibNum,
    time: new Date().getTime() - startTime,
  });
};

export {onmessage}