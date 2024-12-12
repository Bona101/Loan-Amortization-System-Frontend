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

export const YearlyTable: React.FC = () => {


const rows = [
  {
    memberName: "Mrs. Felicia Imade",
    yearlyPayment: "₦ 20,000.00",
    interestGained: "₦ 00.00",
    totalLoan: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    totalPayment: "₦ 00.00",
    remark: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    yearlyPayment: "₦ 20,000.00",
    interestGained: "₦ 00.00",
    totalLoan: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    totalPayment: "₦ 00.00",
    remark: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    yearlyPayment: "₦ 20,000.00",
    interestGained: "₦ 00.00",
    totalLoan: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    totalPayment: "₦ 00.00",
    remark: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    yearlyPayment: "₦ 20,000.00",
    interestGained: "₦ 00.00",
    totalLoan: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    totalPayment: "₦ 00.00",
    remark: "₦ 00.00",
  },
];

  return (
    <div className="">
      <p className="text-[#2C2E3E] font-medium text-[16px] p-5 pb-2 pl-2">
        Yearly Contribution Amortization for April 2024
      </p>
      <hr className="mb-2" />
      <Table className="">
        <TableCaption></TableCaption>

        <TableHeader className="">
          <TableRow>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Member Names
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Yearly Payment
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Interest Gained
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Total Loan
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Loan Returned
            </TableHead>

            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Loan Balance
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Total Payment
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Remark
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow>
              <TableCell
                className={`${i === rows.length - 1 ? "font-bold" : ""}`}
              >
                <p>{row.memberName}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.yearlyPayment}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.interestGained}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.totalLoan}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.loanReturned}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.loanBalance}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.totalPayment}</p>
              </TableCell>
              <TableCell className="">
                <div
                  className={`w-[150px] h-[24px] flex items-center justify-center ${row.remark === "Ok" ? "bg-green-200" : row.remark === "Debtor" ? "bg-red-200" : "bg-yellow-200"}`}
                >
                  <p>{row.remark}</p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};