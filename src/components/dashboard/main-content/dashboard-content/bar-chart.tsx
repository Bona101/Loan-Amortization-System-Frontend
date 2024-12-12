"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { useAuth1 } from "@/AuthContent";

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

// Mocking `useAuth1` Transactions data
// Replace `mockTransactions` with `user.Transactions` in your actual code.
const mockTransactions = [
  { date: new Date().toISOString().split("T")[0], amount: 123 },
];


export function BarChart_() {
  const { user } = useAuth1();
  const alltransactions = user?.Transactions || mockTransactions; // Replace `mockTransactions` with `user.Transactions`

  // Transform transactions to match chartData format
  const chartData = alltransactions.map((transaction: { date: string | number | Date; amount: any; }) => {
    const date = new Date(transaction.date);
    const month = date.toLocaleString("default", { month: "long" }); // Extract full month name
    return {
      month,
      amount: transaction.amount,
    };
  });

  const chartConfig = {
    amount: {
      label: "Contributions",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

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
              tickFormatter={(value) => value.slice(0, 3)} // Abbreviate month names
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="amount" fill="var(--color-desktop)" radius={8}>
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
