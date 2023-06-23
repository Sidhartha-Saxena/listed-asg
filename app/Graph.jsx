import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const HistoricalChart = (id, days = 1, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${
    days === 1 ? "hourly" : "daily"
  }&precision=2`;

const coinId = ["staked-frax-ether", "rocket-pool-eth"];

export default function Graph() {
  const [historicData1, setHistoricData1] = useState();
  const [historicData2, setHistoricData2] = useState();
  const [days, setDays] = useState(7);
  const currency = "USD";
  const fetchHistoricData = async (id) => {
    const { data } = await axios.get(HistoricalChart(id, days, currency));
    id === "staked-frax-ether"
      ? setHistoricData1(data.prices)
      : setHistoricData2(data.prices);
  };
  useEffect(() => {
    fetchHistoricData(coinId[0]);
    fetchHistoricData(coinId[1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);
  return (
    <div
      className="w-full h-full flex items-center justify-center px-8 py-4 flex-col"
    >
      <div className="flex justify-between w-full">
        <div className="flex-col">
          <h1 className="text-[18px] font-mono font-bold">Activities</h1>
          <select
            required
            value={days}
            name="category"
            id="category"
            onChange={(e) => setDays(e.target.value)}
            className="w-full text-sm h-[14px] outline-none text-[#858585]"
          >
            <option value={1}>today</option>
            <option value={7}>
              week
            </option>
            <option value={30}>month</option>
          </select>
        </div>
        <div className="flex gap-4">
          <h1 className=" text-sm font-sans capitalize">
            <span className="text-[10px] w-[10px] h-[10px] rounded-full bg-[#9BDD7C] inline-block"></span>{" "}
            staked frax ether
          </h1>
          <h1 className=" text-sm font-sans capitalize">
            <span className="text-[10px] w-[10px] h-[10px] rounded-full bg-[#E9A0A0] inline-block"></span>{" "}
            rocket pool ether
          </h1>
        </div>
      </div>
      {historicData1 && historicData2 ? (
        <div className="h-full w-full">
          <Line
            id="chart"
            data={{
              labels: historicData1.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicData1.map((coin) => coin[1]),
                  borderColor: "#9BDD7C",
                  lineTension: 0.4,
                },
                {
                  data: historicData2.map((coin) => coin[1]),
                  borderColor: "#E9A0A0",
                  lineTension: 0.4,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
              scales: {
                x: { grid: { display: false } },
                y: { grid: { display: true } },
              },
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false, // Hide legend labels
                },
              },
            }}
          />
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
