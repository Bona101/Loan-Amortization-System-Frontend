import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Monthly } from "@/components/treasurer-dashboard/main-content/monthly";
import { Yearly } from "@/components/treasurer-dashboard/main-content/yearly";

export const Route = createFileRoute("/treasurer/tables/$month")({
  component: Month,
});

function Month() {
  const { month } = Route.useParams();

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const otherTables = ["yearly"];
  const monthTLC = month.toLowerCase(); // TLC = to lower case

  if (months.includes(monthTLC)) {
    return <Monthly />;
  } else if (otherTables.includes(monthTLC)) {
    switch (monthTLC) {
      case "yearly":
        return <Yearly />;
        break;
      default:
        return <div>Table does not exist</div>;
    }
  } else {
    return <div>Table does not exist</div>;
  }
}
