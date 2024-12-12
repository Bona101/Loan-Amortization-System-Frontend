import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuth1 } from "@/AuthContent";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const TransactionHistory: React.FC = () => {
  const { user } = useAuth1();

  // Transactions data from user
  const alltransactions = user?.Transactions || [];

  return (
    <div>
      <p className="text-[#2C2E3E] font-medium text-[16px] p-5 pb-2 pl-2">
        Transaction History
      </p>
      <hr className="mb-2" />
      <Table className="">
        <TableCaption>Showing all transactions</TableCaption>

        <TableHeader className="">
          <TableRow>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Date
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Amount
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alltransactions.map((transaction: { date: string | number | Date; amount: { toLocaleString: () => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; state: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }, index: Key | null | undefined) => (
            <TableRow key={index}>
              {/* Date */}
              <TableCell className="text-2xl font-semibold">
                <div>
                  <p className="text-[12.6px] font-semibold text-[#171B1E]">
                    {new Date(transaction.date).toLocaleDateString()}
                  </p>
                  <p className="mt-[-13px] font-bold text-[9.8px] text-[#717579]">
                    {new Date(transaction.date).toLocaleTimeString()}
                  </p>
                </div>
              </TableCell>

              {/* Amount */}
              <TableCell className="text-3xl font-semibold">
                <p className="font-semibold text-[11.2px] text-[#171B1E]">
                  ₦{transaction.amount.toLocaleString()}
                </p>
              </TableCell>

              {/* Status */}
              <TableCell className="">
                <div
                  className={`flex items-center justify-center rounded-3xl w-[150px] h-[24px] text-[10px] font-Montserrat font-bold ${
                    transaction.state === "Credit"
                      ? "bg-green-200 text-green-900"
                      : "bg-red-200 text-red-900"
                  }`}
                >
                  <p>{transaction.state}</p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
