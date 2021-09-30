import React, { useState } from "react";
import "./Form.scss";

const worker = new window.Worker("./long-runner.js");

export default function Form() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);
  const [asyncTotal, setAsyncTotal] = useState(0);
  const [loading, setloading] = useState(false);

  const callWebWorker = () => {
    console.log("callWebworker");
    setloading(true);

    worker.postMessage({ number1, number2 });
    worker.onerror = (err) => {
      console.log(err);
    };
    worker.onmessage = (e) => {
      console.table(e.data);
      const { total, perf } = e.data;
      console.log("I am from other thread", perf);
      setAsyncTotal(total);
      setloading(false);
    };
  };

  const total = number1 + number2;
  return (
    <div className="flex-container">
      <div className={asyncTotal ? "row row-flat" : "row"}>
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
          <h2>Total:{total || 0}</h2>
          <h2>Async Total:{asyncTotal || 0}</h2>
          <button onClick={callWebWorker}>
            {loading ? "Loading ..." : "Call Web Worker"}
          </button>
        </div>
      </div>
    </div>
  );
}
