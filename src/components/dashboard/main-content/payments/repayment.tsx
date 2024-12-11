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

export function Repayment({
  first,
  second,
  buttonText,
}: {
  first: {
    title: string;
    content: string;
  };
  second: {
    title: string;
    content: string;
  };
  buttonText: string;
}) {
  return (
    <div>
      <Table className="">
        <TableCaption></TableCaption>
        <TableHeader className="">
          <TableRow>
            <TableHead className="text-base font-normal">
              {first.title}
            </TableHead>
            <TableHead className="text-base font-normal">
              {second.title}
            </TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-2xl font-semibold text-[#1D4ED8]">
              {first.content}
            </TableCell>
            <TableCell
              className={`text-3xl text-red-500 font-medium ${second.title === "Amount Contributed" ? "text-[#00D007]" : ""}`}
            >
              {second.content}
            </TableCell>
            <TableCell className="">
              <Button className="bg-[#00CADC] rounded-3xl w-[205px] h-[48px] text-[#FFFFFF] hover:text-[#00CADC]">
                {buttonText}
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
