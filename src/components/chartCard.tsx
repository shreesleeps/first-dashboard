"use client";
import React from "react";
import ApexChart from "./Chart/apexChart";
// import ReactApexChart from "react-apexcharts";
// const ApexChart = ReactApexChart;

export default function ChartCard() {
  return (
    <div className="bg-[white] rounded-xl flex flex-col">
      <div className="w-full flex flex-row justify-between items-center max-[1024px]:px-4 max-[1024px]:py-[14px] p-5 border-b border-[#EAECF0]">
        <div className="select-none text-[#282828] text-[18px] font-semibold">
          Performance
        </div>
        <div className="w-[24px] h-[24px] hover:bg-[#F2F4F7] flex justify-center items-center relative select-none group">
          <img src="/icons/DotsVertical.svg" />
          <div className="absolute z-[10] w-[100px] hidden group-focus:block box-border top-0 right-0 shadow-lg bg-[white] rounded translate-y-8 border border-[#EAECF0]">
            <button className="w-full text-ellipsis text-[14px] px-3 py-2 hover:bg-[#F2F4F7]">
              Action 1
            </button>
            <button className="w-full text-ellipsis text-[14px] px-3 py-2 hover:bg-[#F2F4F7]">
              Action 2
            </button>
            <button className="w-full text-ellipsis text-[14px] px-3 py-2 hover:bg-[#F2F4F7]">
              Action 3
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center">
        <div className="p-5 max-[1024px]:p-0 w-full">
          <ApexChart
            height={356}
            type="area"
            series={[
              {
                name: "Instagram",
                data: [160, 250, 160, 140, 270, 150, 220],
              },
              {
                name: "Facebook",
                data: [200, 180, 320, 400, 200, 220, 180],
              },
            ]}
            options={{
              grid: {
                yaxis: {
                  lines: {
                    show: false,
                  },
                },
                xaxis: {
                  lines: {
                    show: false,
                  },
                },
              },
              colors: ["#679CF6", "#20C997"],
              chart: {
                type: "area",
                toolbar: {
                  show: false,
                  tools: {
                    zoom: false,
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
              stroke: {
                width: 3,
                curve: "smooth",
              },
              xaxis: {
                axisBorder: {
                  show: false,
                },
                labels: {
                  style: {
                    colors: "#9D9FA1",
                    fontSize: "12px",
                  },
                },
                type: "category",
                categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              },
              yaxis: {
                axisBorder: {
                  show: false,
                },
                labels: {
                  style: {
                    colors: "#9D9FA1",
                    fontSize: "12px",
                  },
                },
              },
              legend: {
                height: 48,
                position: "bottom",
                horizontalAlign: "center",
                itemMargin: { horizontal: 32, vertical: 0 },
                markers: {
                  offsetX: -5,
                },
                labels: {
                  colors: "#5F6980",
                },
                fontSize: "14px",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
