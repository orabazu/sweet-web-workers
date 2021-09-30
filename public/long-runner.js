const longAddition = (number1, number2) => {

  const total = 0
  const perf = ""  
  return {total,perf}
};

onmessage = (e) => {
  console.log(e)
  const { number1, number2 } = e.data;
  const {total, perf} = longAddition(number1, number2 );
  postMessage({
    total,
    perf,
  });
};

