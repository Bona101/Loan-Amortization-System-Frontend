import React from "react";
import { Button } from "@/components/ui/button";
import {
  BloombergLogo,
  CNBCLogo,
  ForbesLogo,
  QuartzLogo,
  TechCrunchLogo,
} from "@/assets";

export const Brands: React.FC = () => {
  const logos = [
    { src: QuartzLogo, alt: "Quartz Logo", width: 200, height: 32.5 },
    { src: BloombergLogo, alt: "Bloomberg Logo", width: 200, height: 36.93 },
    { src: CNBCLogo, alt: "CNBC Logo", width: 79, height: 73.19 },
    { src: ForbesLogo, alt: "Forbes Logo", width: 140, height: 36.67 },
    { src: TechCrunchLogo, alt: "TechCrunch Logo", width: 109, height: 54.5 },
  ];
  return (
    <div className="flex justify-between p-[50px] bg-[#00A6A6] my-[40px]">
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className={`w-[${logo.width}px] h-[${logo.height}px]`}
        />
      ))}
    </div>
  );
};
