import React, {PureComponent} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  {
    name: "15 Jan",
    arts: 17,
    commerce: 56,
  },
  {
    name: "Feb 00",
    arts: 45,
    commerce: 28,
  },
  {
    name: "15 Jan",
    arts: 28,
    commerce: 58,
  },
  {
    name: "Feb 00",
    arts: 54,
    commerce: 42,
  },
  {
    name: "15 Jan",
    arts: 28,
    commerce: 60,
  },
  {
    name: "Feb 00",
    arts: 46,
    commerce: 32,
  },
];

export default class BiaxialLineChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/zjb47e83/";

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />

        <Legend verticalAlign="top" height={36} />

        <Line yAxisId="left" type="monotone" dataKey="arts" stroke="#8884d8" />
        <Line yAxisId="right" type="monotone" dataKey="commerce" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
