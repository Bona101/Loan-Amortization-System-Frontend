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

const Repayment: React.FC = () => {
  return (
    <div>
      <Table className="">
        <TableCaption></TableCaption>
        <TableHeader className="">
          <TableRow>
            <TableHead className="text-base font-normal">
              Next Repayment Date
            </TableHead>
            <TableHead className="text-base font-normal">Amount Due</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-2xl font-semibold">
              June 4, 2020
            </TableCell>
            <TableCell className="text-3xl text-red-500 font-medium">
              ₦ 10,000.00
            </TableCell>
            <TableCell className="">
              <Button className="bg-[#00CADC] rounded-3xl w-[205px] h-[48px] text-[#FFFFFF]">
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
