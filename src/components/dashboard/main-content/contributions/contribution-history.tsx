import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth } from "@/logi";


export const LoanHistory: React.FC = () => {
  const { user } = useAuth();
console.log(user)
  const statusMessage = {
    success: "Paid",
    failure: "Not Paid",
  };

    const rows = [];
    for (let i = 0; i < user?.Transactions.length; i++) {
      if (parseFloat(user?.Transactions[i].amount) < 0){
        continue;
      }
        rows.push({
          date: `${user?.Transactions[i].date}`,

          amount: `₦ ${parseFloat(user?.Transactions[i].amount) * -1}`,
        });
    }

  // const rows = [
  //   {

  //     period: {
  //       date: "February 9, 2024",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 200,000.00",
  //     status: "Not Paid",
  //   },
  //   {

  //     period: {
  //       date: "January 8, 2024",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 123,993.00",
  //     status: "Not Paid",
  //   },
  //   {

  //     period: {
  //       date: "December 13, 2023",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 73,000.00",
  //     status: "Not Paid",
  //   },
  //   {

  //     period: {
  //       date: "November 11, 2023",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 150,000.00",
  //     status: "Paid",
  //   },
  //   {

  //     period: {
  //       date: "October 31, 2023",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 150,000.00",
  //     status: "Paid",
  //   },
  //   {

  //     period: {
  //       date: "January 8, 2024",
  //       time: "05:34:45 AM",
  //     },
  //     amount: "₦ 300,000.00",
  //     status: "Paid",
  //   },
  // ];

  return (
    <div>
      <p className="text-[#2C2E3E] font-medium text-[16px] p-5 pb-2 pl-2">
        Loan History
      </p>
      <hr className="mb-2" />
      <Table className="">
        <TableCaption></TableCaption>

        <TableHeader className="">
          <TableRow>
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
          {/* {rows.length === 0 ? (
            <div className="flex justify-center items-center">
              <p>No loans</p>
            </div>
          ) : (
            ""
          )} */}
          {rows.map((row) => (
            <TableRow>
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
                <p className="font-semibold text-[11.2px] text-green-500">
                  {row.amount}
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
        <TableFooter>
          {rows.length === 0 ? (
            <div className="flex justify-center items-center p-10">
              <p>No loans</p>
            </div>
          ) : (
            ""
          )}
        </TableFooter>
      </Table>
    </div>
  );
};
