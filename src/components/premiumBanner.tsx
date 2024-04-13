"use client";
import React from "react";
export default function PremiumBanner() {
  return (
    <div className="w-full flex max-[1024px]:flex-col max-[1024px]:gap-6 justify-between items-center px-[36px] py-8 max-[1024px]:my-2 bg-[#282828] rounded-2xl text-[white] ani">
      <div className="flex flex-col gap-2 select-none">
        <div className="text-[28px] font-semibold">Unlock premium stats</div>
        <div className="text-[14px]">
          Get up to 10TB of storage for a limited time
        </div>
      </div>
      <button className="flex select-none flex-row px-6 py-[9px] gap-1 bg-[white] rounded-full border border-[black] hover:border-[white]">
        <img src="/icons/bolt.svg" />
        <div className="text-[black] text-[16px] font-bold ">Upgrade</div>
      </button>
    </div>
  );
}
