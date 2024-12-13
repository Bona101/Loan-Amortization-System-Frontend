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
import { useAuth } from "@/logi";

const TransactionHistory: React.FC = () => {
  const { user } = useAuth();

  const statusMessage = {
    success: "Successful",
    failure: "Failed",
  };
  const rows = [];
for (let i = 0; i < user?.Transactions?.length; i++){
rows.push({
  date: `${user?.Transactions[i].date}`,

  amount: user?.Transactions[i].amount,
});
}
  // const rows = [
  //   {
  //     bank: {
  //       name: "GTBank",
  //       ref: "Ref# 23974820445",
  //     },
  //     period: {
  //       date: "February 9, 2024",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 200,000.00",
  //     status: "Failed",
  //   },
  //   {
  //     bank: {
  //       name: "GTBank",
  //       ref: "Ref# 63792476203",
  //     },
  //     period: {
  //       date: "January 8, 2024",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 123,993.00",
  //     status: "Failed",
  //   },
  //   {
  //     bank: {
  //       name: "GTBank",
  //       ref: "Ref# 98765436789",
  //     },
  //     period: {
  //       date: "December 13, 2023",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 73,000.00",
  //     status: "Failed",
  //   },
  //   {
  //     bank: {
  //       name: "GTBank",
  //       ref: "Ref# 23456543213",
  //     },
  //     period: {
  //       date: "November 11, 2023",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 150,000.00",
  //     status: "Successful",
  //   },
  //   {
  //     bank: {
  //       name: "GTBank",
  //       ref: "Ref# 67873647204",
  //     },
  //     period: {
  //       date: "October 31, 2023",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 150,000.00",
  //     status: "Successful",
  //   },
  //   {
  //     bank: {
  //       name: "GTBank",
  //       ref: "Ref# 98765421234",
  //     },
  //     period: {
  //       date: "January 8, 2024",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 300,000.00",
  //     status: "Successful",
  //   },
  // ];

  return (
    <div>
      <p className="text-[#2C2E3E] font-medium text-[16px] p-5 pb-2 pl-2">
        Transaction History
      </p>
      <hr className="mb-2" />
      <Table className="">
        <TableCaption></TableCaption>

        <TableHeader className="">
          <TableRow>
            {/* <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Bank
            </TableHead> */}
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Date
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Amount
            </TableHead>
            {/* <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Status
            </TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              {/* <TableCell className="text-2xl font-semibold">
                <div>
                  <p className="text-[12.6px] font-semibold text-[#171B1E]">
                    {row.date}
                  </p>
                  <p className="mt-[-13px] font-bold text-[9.8px] text-[#717579]">
                    {row.bank.ref}
                  </p>
                </div>
              </TableCell> */}
              <TableCell className="text-3xl text-red-500 font-semibold">
                <div>
                  <p className="font-semibold text-[11.2px] text-[#171B1E]">
                    {row.date}
                  </p>
                  {/* <p className="mt-[-18px] font-bold text-[9.8px] text-[#717579]">
                    {row.period.time}
                  </p> */}
                </div>
              </TableCell>
              <TableCell className="text-3xl text-red-500 font-semibold">
                <p
                  className={`font-semibold text-[11.2px] ${row.amount < 0 ? "text-red-500" : "text-green-500"}`}
                >
                  ₦{row.amount < 0 ? row.amount * -1 : row.amount}
                </p>
              </TableCell>
              {/* <TableCell className="">
                <div
                  className={`flex items-center justify-center rounded-3xl w-[150px] h-[24px] text-[10px] font-Montserrat font-bold ${row.status === statusMessage.success ? "bg-green-200 text-green-900" : row.status === statusMessage.failure ? "bg-red-200 text-red-900" : "bg-yellow-200 text-yellow-900"}`}
                >
                  <p>{row.status}</p>
                </div>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
