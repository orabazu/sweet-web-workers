import React, { useState } from "react";
import "./Form.scss";

const worker = new window.Worker("src/fib-worker.js");

export default function Form() {
  const num = 80;

  worker.postMessage({ num });
  worker.onerror = (err) => err;
  worker.onmessage = (e) => {
    const { time, fibNum } = e.data;
    console.log(time, fibNum);
  };

  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);

  // const total = useTakeALongTimeToAddTwoNumbers(number1, number2);

  const total = number1 + number2
  return (
    <div className="flex-container">
      <div className="row">
        <div className="form-wrapper">
            <h1>Web Workers in action!</h1>

            <div>
              <label>Number to add: </label>
              <input
                type="number"
                onChange={(e) => setNumber1(parseInt(e.target.value))}
                value={number1}
              />
            </div>
            <div>
              <label>Number to add: </label>
              <input
                type="number"
                onChange={(e) => setNumber2(parseInt(e.target.value))}
                value={number2}
              />
            </div>
            <h2>
              Total:{total || 0}
              {/* {total.isCalculating ? (
                <em>Calculating...</em>
              ) : (
                <strong>{total.total}</strong>
              )} */}
            </h2>
        </div>
      </div>
    </div>
  );
}
