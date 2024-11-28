import React from "react";
import { Button } from "@/components/ui/button";

export const CoreValues: React.FC = () => {
    const cards = [
      {
        title: "Support and Guidance",
        content:
          "We offer ongoing support, resources, and insights to help our users stay on top of their repayments and make informed financial decisions.",
        color: "A0A0A0",
      },
      {
        title: "Financial Inclusion",
        content:
          "We strive to make loan management tools available to underserved communities, supporting economic growth and independence for small business owners.",
        color: "FFFFFF",
      },
      {
        title: "Transparency & Simplicity",
        content:
          "We prioritize the security of our users' information and transactions, utilizing the latest technology and best practices to keep your data safe.",
        color: "A0A0A0",
      },
    ];
  return (
    <div>
      <div className="flex flex-col justify-center h-[500px] bg-[#2D2D2D] p-[50px]">
        <h1 className="font-medium text-[40px] pb-4">Our Core Values</h1>
        <p className="w-[700px] pb-5">
          With our user-friendly interface, you can initiate a transfer in just
          a few clicks. Our system uses the latest encryption technology to
          ensure your personal and financial information is kept safe and
          secure. Plus, our competitive exchange rates mean you get the most for
          your money.
        </p>
        <div className="flex gap-10 pt-5 mt-3">
          {cards.map((card) => (
            <div className={`p-5 rounded-[10px] bg-[#${card.color}]`}>
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
    </div>
  );
};
