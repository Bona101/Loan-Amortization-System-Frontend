import React from "react";
import { Button } from "@/components/ui/button";
import { WorldMap } from "@/assets";

export const CoreValues: React.FC = () => {
    const cards = [
      {
        title: "Support and Guidance",
        content:
          "We offer ongoing support, resources, and insights to help our users stay on top of their repayments and make informed financial decisions.",
        color: "#A0A0A0",
      },
      {
        title: "Financial Inclusion",
        content:
          "We strive to make loan management tools available to underserved communities, supporting economic growth and independence for small business owners.",
        color: "#FFFFFF",
      },
      {
        title: "Transparency & Simplicity",
        content:
          "We prioritize the security of our users' information and transactions, utilizing the latest technology and best practices to keep your data safe.",
        color: "#A0A0A0",
      },
    ];
  return (
    <div className="relative h-[700px] flex flex-col justify-center">
      <div className="flex flex-col justify-center h-[700px] p-[50px]">
        <h1 className="font-medium text-[40px] pb-4">Our Core Values</h1>
        <p className="w-[700px] pb-5">
          With our user-friendly interface, you can initiate a transfer in just
          a few clicks. Our system uses the latest encryption technology to
          ensure your personal and financial information is kept safe and
          secure. Plus, our competitive exchange rates mean you get the most for
          your money.
        </p>
        <div className="flex gap-10 pt-5 mt-3">
          {cards.map((card, i) => (
            <div key={i} className={`p-5 rounded-[10px] bg-[${card.color}]`}>
              <p className="font-medium text-[36px] pb-5 w-[300px]">
                {card.title}
              </p>
              <p className="font-normal text-[14px] w-[400px]">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img
        className="w-full h-full absolute top-0 z-[-1]"
        src={WorldMap}
        alt="a map of the continents"
      />
    </div>
  );
};
