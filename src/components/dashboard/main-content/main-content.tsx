import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MainContent: React.FC = () => {
    const tabs = []
 
  return (
    <div>
      <p>Welcome back, Abdullah!</p>

      <Table>
        <TableCaption></TableCaption>
        <TableHeader className="">
          <TableRow>
            <TableHead className="">Next Repayment Date</TableHead>
            <TableHead className="">Amount Due</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">June 4, 2020</TableCell>
            <TableCell>₦ 10,000.00</TableCell>
            <TableCell className="text-right"><Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default MainContent;
