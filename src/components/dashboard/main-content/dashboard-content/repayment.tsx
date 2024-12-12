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
import { useAuth1 } from "@/AuthContent";

const Repayment: React.FC = () => {
  const { user } = useAuth1();
  return (
    <div>
      <Table className="">
        <TableCaption></TableCaption>
        <TableHeader className="">
          <TableRow>
            <TableHead className="text-base font-normal">
              Next Payment Date
            </TableHead>
            <TableHead className="text-base font-normal">Balance</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-2xl font-semibold">
              {user.Transactions[user.Transactions.length - 1].date}
            </TableCell>
            <TableCell
              className={`text-3xl font-medium ${user.Balance < 0 ? 'text-red-500' : 'text-green-500'
                }`}
            >
              ₦{user.Balance.toLocaleString('en-NG')}
            </TableCell>

            <TableCell className="">
              <Button className="bg-[#00CADC] rounded-3xl w-[205px] h-[48px] text-[#FFFFFF] hover:text-[#00CADC]">
                Make Repayment{" "}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Repayment;
