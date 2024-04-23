import React, { memo } from "react";

const CallBacktest = ({ data, Print }) => {
  console.log(data);
  Print();
};

export default memo(CallBacktest);
