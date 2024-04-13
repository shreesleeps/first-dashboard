"use client";
import Metrics from "@/components/metrics";
import PremiumBanner from "@/components/premiumBanner";
import ChartCard from "@/components/chartCard";
import InstalledApps from "@/components/installedApps";

export default function Page() {

  return (
    <div className="flex-grow overflow-auto w-full flex flex-col p-8 max-[1024px]:p-4 max-[1024px]:pt-2  gap-8 max-[1024px]:gap-4 box-border">
      <PremiumBanner />
      <Metrics />
      <ChartCard />
      <InstalledApps />
    </div>
  );
}

// const a = {obj} instead of const a = obj.a
