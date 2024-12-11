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

export const MonthlyTable: React.FC = () => {


const rows = [
  {
    memberName: "Mrs. Felicia Imade",
    monthlyPayment: "₦ 20,000.00",
    loanGiven: "₦ 00.00",
    previousLoanBalance: "₦ 00.00",
    interestOnLoan: "₦ 00.00",
    interestPaid: "₦ 00.00",
    interestOwed: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    newInterest: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    monthlyPayment: "₦ 20,000.00",
    loanGiven: "₦ 00.00",
    previousLoanBalance: "₦ 00.00",
    interestOnLoan: "₦ 00.00",
    interestPaid: "₦ 00.00",
    interestOwed: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    newInterest: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    monthlyPayment: "₦ 20,000.00",
    loanGiven: "₦ 00.00",
    previousLoanBalance: "₦ 00.00",
    interestOnLoan: "₦ 00.00",
    interestPaid: "₦ 00.00",
    interestOwed: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    newInterest: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    monthlyPayment: "₦ 20,000.00",
    loanGiven: "₦ 00.00",
    previousLoanBalance: "₦ 00.00",
    interestOnLoan: "₦ 00.00",
    interestPaid: "₦ 00.00",
    interestOwed: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    newInterest: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    monthlyPayment: "₦ 20,000.00",
    loanGiven: "₦ 00.00",
    previousLoanBalance: "₦ 00.00",
    interestOnLoan: "₦ 00.00",
    interestPaid: "₦ 00.00",
    interestOwed: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    newInterest: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    monthlyPayment: "₦ 20,000.00",
    loanGiven: "₦ 00.00",
    previousLoanBalance: "₦ 00.00",
    interestOnLoan: "₦ 00.00",
    interestPaid: "₦ 00.00",
    interestOwed: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    newInterest: "₦ 00.00",
  },
  {
    memberName: "Mrs. Felicia Imade",
    monthlyPayment: "₦ 20,000.00",
    loanGiven: "₦ 00.00",
    previousLoanBalance: "₦ 00.00",
    interestOnLoan: "₦ 00.00",
    interestPaid: "₦ 00.00",
    interestOwed: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    newInterest: "₦ 00.00",
  },
  {
    memberName: "Total Payments:",
    monthlyPayment: "₦ 20,000.00",
    loanGiven: "₦ 00.00",
    previousLoanBalance: "₦ 00.00",
    interestOnLoan: "₦ 00.00",
    interestPaid: "₦ 00.00",
    interestOwed: "₦ 00.00",
    loanReturned: "₦ 00.00",
    loanBalance: "₦ 00.00",
    newInterest: "₦ 00.00",
  },
];

  return (
    <div>
      <p className="text-[#2C2E3E] font-medium text-[16px] p-5 pb-2 pl-2">
        Monthly Contribution Amortization for April 2024
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
              Monthly Payment
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Loan Given
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Previous Loan Bal.
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Interest on Loan
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Interest Paid
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Interest Owed
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Loan Returned
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Loan Balance
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              New Interest
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
                <p>{row.monthlyPayment}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.loanGiven}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.previousLoanBalance}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.interestOnLoan}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.interestPaid}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.interestOwed}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.loanReturned}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.loanBalance}</p>
              </TableCell>
              <TableCell className="">
                <p>{row.newInterest}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};