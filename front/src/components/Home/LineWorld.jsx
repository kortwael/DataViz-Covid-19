import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = data[casesType][date] - lastDataPoint;
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};
const getdates = (data) => {
  let ChartData = [];
  for (let date in data.cases) {
    ChartData.push(date);
  }
  return ChartData;
};

function LineWorld() {
  const [recovered, setrecovered] = useState();
  const [deaths, setdeaths] = useState();
  const [confirmed, setConfirmed] = useState();
  const [dates, setDates] = useState();
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/all?lastdays=150")
      .then((response) => {
        setrecovered(buildChartData(response.data, "recovered"));
        setdeaths(buildChartData(response.data, "deaths"));
        setConfirmed(buildChartData(response.data, "cases"));
        setDates(getdates(response.data));
      })
      .catch((e) => console.log(e));
  }, []);

  const lineChart = (
    <Line
      data={{
        labels: dates,
        datasets: [
          {
            data: confirmed,
            label: "Infected",
            borderColor: '#9B9ECE', 
            fill :false ,   
          },
          {
            data: deaths,
            label: "Deaths",
            borderColor:'#000500',
            backgroundColor:'black',
            fill :true ,   

          },
          {
            data: recovered,
            label: "recovered",
            borderColor: '#473BF0',
            fill :false ,   

          },
        ],
      }}
    />
  );

  return <div>{lineChart}</div>;
}

export default LineWorld;
