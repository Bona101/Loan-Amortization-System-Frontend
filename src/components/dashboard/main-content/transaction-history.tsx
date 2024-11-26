import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TransactionHistory: React.FC = () => {
  const statusMessage = {
    success: "Successful",
    failure: "Failed",
  };

  const rows = [
    {
      bank: {
        name: "GTBank",
        ref: "Ref# 23974820445",
      },
      period: {
        date: "February 9, 2024",
        time: "05:34:45 AM",
      },
      amount: "₦ 200,000.00",
      status:  "Failed",
    },
    {
      bank: {
        name: "GTBank",
        ref: "Ref# 23974820445",
      },
      period: {
        date: "February 9, 2024",
        time: "05:34:45 AM",
      },
      amount: "₦ 200,000.00",
      status:  "Failed",
    },
    {
      bank: {
        name: "GTBank",
        ref: "Ref# 23974820445",
      },
      period: {
        date: "February 9, 2024",
        time: "05:34:45 AM",
      },
      amount: "₦ 200,000.00",
      status:  "Failed",
    },
    {
      bank: {
        name: "GTBank",
        ref: "Ref# 23974820445",
      },
      period: {
        date: "February 9, 2024",
        time: "05:34:45 AM",
      },
      amount: "₦ 200,000.00",
      status:  "Failed",
    },
    {
      bank: {
        name: "GTBank",
        ref: "Ref# 23974820445",
      },
      period: {
        date: "February 9, 2024",
        time: "05:34:45 AM",
      },
      amount: "₦ 200,000.00",
      status:  "Failed",
    },
    {
      bank: {
        name: "GTBank",
        ref: "Ref# 23974820445",
      },
      period: {
        date: "February 9, 2024",
        time: "05:34:45 AM",
      },
      amount: "₦ 200,000.00",
      status:  "Successful",
    },
    {
      bank: {
        name: "GTBank",
        ref: "Ref# 23974820445",
      },
      period: {
        date: "February 9, 2024",
        time: "05:34:45 AM",
      },
      amount: "₦ 200,000.00",
      status:  "Failed",
    },
  ];

  return (
    <div>
      <Table className="">
        <TableCaption>Transaction History</TableCaption>
        <TableHeader className="">
          <TableRow>
            <TableHead className="text-base font-normal">Bank</TableHead>
            <TableHead className="text-base font-normal">Date/Time</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell className="text-2xl font-semibold">
                <div>
                  <p>{row.bank.name}</p>
                  <p>{row.bank.ref}</p>
                </div>
              </TableCell>
              <TableCell className="text-3xl text-red-500 font-semibold">
                <div>
                  <p>{row.period.date}</p>
                  <p>{row.period.time}</p>
                </div>
              </TableCell>
              <TableCell className="text-3xl text-red-500 font-semibold">
                {row.amount}
              </TableCell>
              <TableCell className="">
                <Button
                  className={`rounded-3xl w-[205px] h-[48px] text-[#FFFFFF] ${row.status === statusMessage.success ? "bg-green-200" : row.status === statusMessage.failure ? "bg-red-200" : "bg-yellow-200"}`}
                >
                  {row.status}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
