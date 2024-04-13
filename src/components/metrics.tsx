"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function Metrics() {
  const metrics = useSelector((state: any) => state.dashboardReducer.metrics);

  return (
    <div className="ani grid grid-cols-4 max-[1240px]:grid-cols-2 max-[1024px]:grid-cols-1 gap-8 max-[1024px]:gap-4 select-none">
      {metrics.map(
        (metric: {
          label: string;
          currentValue: number;
          previousValue: number;
          prefix: string;
          suffix: string;
        }) => (
          <MetricCard key={metric.label} {...metric} />
        )
      )}
    </div>
  );
}

const MetricCard = ({
  label,
  currentValue,
  previousValue,
  prefix,
  suffix,
}: {
  label: string;
  currentValue: number;
  previousValue: number;
  prefix: string;
  suffix: string;
}) => {
  function formatNumber(number: number): string {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (parts[1]) {
      parts[1] = parts[1].slice(0, 2);
    }
    return parts.join(".");
  }
  return (
    <div className="flex-grow border hover:border-[#424242] box-border p-5 rounded-xl bg-[white] flex-col gap-8 shadow-custom">
      <div className="w-full flex flex-col">
        <div className="text-[#5F6980] text-[16px]">{label}</div>
        <div className="text-[26px] font-semibold">
          {prefix}
          {formatNumber(currentValue)}
          {suffix}
        </div>
      </div>

      <div className="flex flex-row w-full justify-start items-center gap-2 mt-8">
        <div
          className={` px-[10px] py-[2px] rounded-full text-[12px] font-semibold ${
            previousValue || previousValue === currentValue
              ? currentValue > previousValue
                ? "bg-[#DCFFF5] text-[#20C997]"
                : "bg-[#FFE0E3] text-[#DC3545]"
              : "bg-[#F2F4F7] text-[#5F6980]"
          }`}
        >
          {previousValue || previousValue === currentValue
            ? currentValue > previousValue
              ? "+" +
                formatNumber(
                  ((currentValue - previousValue) * 100) / previousValue
                ) +
                "%"
              : formatNumber(
                  ((currentValue - previousValue) * 100) / previousValue
                ) + "%"
            : "0.00"}
        </div>
        {previousValue !== 0 && (
          <div className="text-[12px] text-[#9D9FA1] font-semibold">
            From&nbsp;{prefix}
            {formatNumber(previousValue)}
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
};
