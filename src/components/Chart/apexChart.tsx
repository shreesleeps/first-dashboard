"use client";
import { useEffect, useState } from "react";

export default function ApexChart(props: any) {
  const [Chart, setChart] = useState<any>();
  const hasType = typeof props?.type !== "undefined";

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  return hasType && Chart && <Chart {...props} />;
}
// due to window not defined error this method is used to use ReactApexCharts
// https://blog.nirdeshpokhrel.com.np/nextjs-window-is-not-defined-react-apexcharts
