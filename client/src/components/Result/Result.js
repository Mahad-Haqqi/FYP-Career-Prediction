import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./result.css";
import { personality } from "./data";

const Result = ({ type, first, second, third, fourth }) => {
  const chartData1 = {
    labels: ["Extroversion", "Introversion"],
    datasets: [
      {
        data: [first.E, first.I],
        backgroundColor: ["red", "blue"],
      },
    ],
  };
  const chartData2 = {
    labels: ["Intuative", "sensing"],
    datasets: [
      {
        data: [second.N, second.S],
        backgroundColor: ["red", "blue"],
      },
    ],
  };
  const chartData3 = {
    labels: ["Feeling", "Thinking"],
    datasets: [
      {
        data: [third.F, third.T],
        backgroundColor: ["red", "blue"],
      },
    ],
  };
  const chartData4 = {
    labels: ["Judging", "Perceiveing"],
    datasets: [
      {
        data: [fourth.J, fourth.P],
        backgroundColor: ["red", "blue"],
      },
    ],
  };

  console.log("data", personality[type.type]);
  return (
    <>
      <div className="result1">
        <h1>Based On the Performance of Test</h1>
        <h2>Our Prediction is</h2>
        <h1>
          {type.type}
          <span>({personality[type.type][0]})</span>
        </h1>
        <p>{personality[type.type][1]}</p>
      </div>
      <div>
        <Doughnut data={chartData1} />
        <Doughnut data={chartData2} />
        <Doughnut data={chartData3} />
        <Doughnut data={chartData4} />
      </div>
    </>
  );
};

export default Result;
