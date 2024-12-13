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
import { useEffect } from "react";


const Repayment: React.FC = () => {
  const { user } = useAuth();
  // useEffect(() => {
    console.log(user)
  // }, [])
  return (
    <div>
      <Table className="">
        <TableCaption></TableCaption>
        <TableHeader className="">
          <TableRow>
            <TableHead className="text-base font-normal">
              Next Repayment Date
            </TableHead>
            <TableHead className="text-base font-normal">Amount</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-2xl font-semibold">
              {user?.Transactions[0]?.next_payment}
            </TableCell>
            <TableCell className="text-3xl text-red-500 font-medium">
              ₦{user?.Balance * -1}
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
