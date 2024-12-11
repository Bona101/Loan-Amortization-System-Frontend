"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

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
const chartData = [
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 21 },
  { month: "August", desktop: 114 },
  { month: "September", desktop: 214 },
  { month: "October", desktop: 363 },
  { month: "November", desktop: 94 },
  { month: "December", desktop: 201 },
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
];

const chartConfig = {
  desktop: {
    label: "Contributions",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BarChart_() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Previous Contributions</CardTitle>
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
