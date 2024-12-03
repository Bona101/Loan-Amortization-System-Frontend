import React from "react";
import { Hero } from "@/components/homepage/hero";
import { Brands } from "@/components/homepage/brands";
import { CoreValues } from "@/components/homepage/core-values";

export const HomePage: React.FC = () => {
  return (
    <div>
        <Hero />
        <Brands />
        <CoreValues />
    </div>
  );
};
