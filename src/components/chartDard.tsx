"use client";
import { Area, Line } from "@ant-design/plots";
import React from "react";

export default function ChartCard() {
  const data = [
    { year: "1991", value: 3, type: "a" },
    { year: "1992", value: 4, type: "a" },
    { year: "1993", value: 3, type: "a" },
    { year: "1994", value: 5, type: "a" },
    { year: "1995", value: 4, type: "a" },
    { year: "1996", value: 6, type: "a" },
    { year: "1997", value: 7, type: "a" },
    { year: "1998", value: 9, type: "a" },
    { year: "1999", value: 3, type: "a" },
    { year: "1991", value: 2, type: "b" },
    { year: "1992", value: 5, type: "b" },
    { year: "1993", value: 6, type: "b" },
    { year: "1994", value: 4, type: "b" },
    { year: "1995", value: 7, type: "b" },
    { year: "1996", value: 3, type: "b" },
    { year: "1997", value: 1, type: "b" },
    { year: "1998", value: 7, type: "b" },
    { year: "1999", value: 1, type: "b" },
  ];

  const config = {
    data,
    xField: "year",
    yField: "value",
    colorField: "type",
  };

  return (
    <div className="w-full bg-[white] rounded-xl flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-[#282828] text-[18px] font-semibold p-5 border-b border-[#EAECF0]">
          Performance
        </div>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="p-5 w-full">
          <Line
            {...config}
            height={276}
            shapeField="smooth"
            style={{ outerWidth: "100%" }}
            interaction={{
              tooltip: {
                marker: false,
              },
            }}
            legend={{
              color: {
                itemMarker: "circle",
                title: false,
                position: "bottom",
                rowPadding: 5,
                layout: {
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
