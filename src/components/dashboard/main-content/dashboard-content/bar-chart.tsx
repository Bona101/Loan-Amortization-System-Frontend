"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { useAuth } from "@/logi";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


// const chartData = [
//   // { month: "March", desktop: user?. },
//   // { month: "April", desktop: 73 },
//   // { month: "May", desktop: 209 },
//   // { month: "June", desktop: 214 },
//   // { month: "July", desktop: 21 },
//   // { month: "August", desktop: 114 },
//   // { month: "September", desktop: 214 },
//   // { month: "October", desktop: 363 },
//   // { month: "November", desktop: 94 },
//   // { month: "December", desktop: 201 },
//   // { month: "January", desktop: 186 },
//   // { month: "February", desktop: 305 },
// ];

const chartConfig = {
  desktop: {
    label: "Contributions",
    color: "hsl(120, 100%, 50%);",
  },
  desktop2: {
    label: "Contributions",
    color: "hsl(0, 100%, 50%);",
  },
} satisfies ChartConfig;

export function BarChart_() {
  const { user } = useAuth();
  const chartData = [];
  for (let i =0; i< 10 && i < user?.Transactions?.length; i++){
    const amount = user?.Transactions[i].amount;
    const amountStr = new Intl.NumberFormat().format(amount);
    let color = "desktop"
    if(amount < 0){
      color = "desktop2";
    }
  chartData.push({month: "", [color]: amount})
}
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>March 2023 - February 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       
        <div className="leading-none text-muted-foreground">
          Showing contributions for the past year
        </div>
      </CardFooter>
    </Card>
  );
}
