import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

export default function PieChart() {
  const [chartData, setChartData] = useState({});
  const fetchMarketData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/global"
      );
      const marketData = data.data.market_cap_percentage;
      const mdata = Object.values(marketData)
        .map((c) => Math.floor(c))
        .slice(0, 2);
      mdata.push(100 - mdata.reduce((acc, num) => acc + num, 0));
      const mlabel = Object.keys(marketData).slice(0, 2);
      mlabel.push("other");
      const marketCapData = {
        labels: mlabel,
        datasets: [
          {
            label: "Market Cap",
            data: mdata,
            backgroundColor: [
              "rgb(152, 216, 158)",
              "rgb(238, 132, 132)",
              "rgb(246, 220, 125)",
            ],
            hoverOffset: 4,
          },
        ],
      };

      setChartData(marketCapData);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  useEffect(() => {
    fetchMarketData();
  }, []);

  return (
    <div className="bg-white p-4 w-full h-full flex flex-col rounded-3xl gap-2 shadow-sm">
      <div className="flex justify-between items-center px-8">
        {" "}
        <h1 className="font-bold text-lg w-full font-mono capitalize">
          Top coins
        </h1>
        <h2 className="text-xs font-mono text-[#858585]">Today</h2>
      </div>
      {chartData.labels ? (
        <div className="grid grid-cols-2 w-full h-full  place-items-center">
          <div className="w-full felx flex-col h-full">
            <Pie
              data={chartData}
              options={{
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
          <div className="flex flex-col justify-between">
            <div className="flex gap-1 items-start">
              <span className="text-[10px] w-[10px] h-[10px] rounded-full bg-[#98D89E] inline-block m-1"></span>
              <h1 className=" text-[12px] font-bold font-mono">
                {chartData.labels[0].toUpperCase()}
                <br />
                <span className="text-xs font-sans text-[#858585]">
                  {" "}
                  {chartData.datasets[0].data[0]}%
                </span>
              </h1>
            </div>
            <div className="flex gap-1 items-start">
              <span className="text-[10px] w-[10px] h-[10px] rounded-full bg-[#EE8484] inline-block m-1"></span>
              <h1 className=" text-[12px] font-bold font-mono">
                {chartData.labels[1].toUpperCase()}
                <br />
                <span className="text-xs font-sans text-[#858585]">
                  {" "}
                  {chartData.datasets[0].data[1]}%
                </span>
              </h1>
            </div>
            <div className="flex gap-1 items-start">
              <span className="text-[10px] w-[10px] h-[10px] rounded-full bg-[#F6DC7D] inline-block m-1"></span>
              <h1 className=" text-[12px] font-bold font-mono capitalize">
                {chartData.labels[2]}
                <br />
                <span className="text-xs font-sans text-[#858585]">
                  {" "}
                  {chartData.datasets[0].data[2]}%
                </span>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
