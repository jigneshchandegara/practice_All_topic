import React, { useCallback, useState } from "react";
import CallBacktest from "./CallBack2";

const Callback = () => {
  let [Count, setCount] = useState(0);

  let [Data, setData] = useState("jignesh");

  let print = useCallback(() => {
    console.log("print call");
  }, [Data]);
  return (
    <div className="App">
      <CallBacktest data={Data} Print ={print} />
      <h1>{Count}</h1>
      <button onClick={() => setCount(Count + 1)}>+</button>

      <button onClick={() => setData("callback")}>change Data</button>
    </div>
  );
};

export default Callback;
