import React from "react";
import { Elements } from "@/components/typography/types";

export const TextUi = ({
  as = "p",
  className,
  children,
}: {
  as?: Elements;
  className?: string;
  children: React.ReactNode;
}) => {
  switch (as) {
    case "p":
      <p>{children}</p>;
      break;

    case "h1":
      <h1>{children}</h1>;
      break;

    default: {
      <p>{children}</p>;
      break;
    }
  }

  return <div>text.ui</div>;
};
