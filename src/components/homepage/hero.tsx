import React from "react";
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col justify-center h-[500px] bg-red-500 p-[50px]">
        <h1 className="font-bold text-[48px] pb-4">
          Simple, Transparent, and Efficient
        </h1>
        <p className="w-[700px] pb-5">
          No more missed payments or complicated loan details! Our platform
          makes it easy for small traders and marketers to manage monthly
          repayments and contributions without the stress. With automatic
          tracking and an annual review to highlight your progress, staying on
          top of your finances has never been simpler. Let us help you take
          control and grow your business with ease.
        </p>
        <div className="flex gap-3 pt-5 mt-3">
          <Button className="bg-[#FFFFFF] rounded-[10px] text-[#343434] border border-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-transparent">
            Login
          </Button>
          <Button className="bg-transparent text-[#FFFFFF] border border-[#FFFFFFF] rounded-[10px] hover:bg-[#FFFFFF] hover:text-[#000000]">
            Open an account
          </Button>
        </div>
      </div>
    </div>
  );
};
