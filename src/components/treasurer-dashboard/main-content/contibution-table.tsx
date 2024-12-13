import { useAuth } from "@/logi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";

interface Transaction {
  profile_name: string;
  amount: string;
  state: string;
  interest_on_loan: string;
  date: string; // Django date format (e.g., '2024-12-12')
}

export const ContributionTable: React.FC = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [sortBy, setSortBy] = useState<"date" | "profile_name">("date");
  const [monthFilter, setMonthFilter] = useState<number | null>(null);
  const [userFilter, setUserFilter] = useState<string>(""); // Filter by user name

  useEffect(() => {
    allUsersTransactions();
  }, []);

  const allUsersTransactions = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/trans");
      const data: Transaction[] = await response.json();
      if (data) {
        setTransactions(data);
        console.log("These are all transactions from DB:", data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const sortTransactions = (a: Transaction, b: Transaction) => {
    let comparison = 0;

    if (sortBy === "date") {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      comparison = dateA.getTime() - dateB.getTime();
    } else if (sortBy === "profile_name") {
      comparison = a.profile_name.localeCompare(b.profile_name);
    }

    return sortOrder === "asc" ? comparison : -comparison;
  };

  const handleSort = (field: "date" | "profile_name") => {
    if (sortBy === field) {
      const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
      setSortOrder(newSortOrder);
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  // Calculate total sum for amount and interest on loan
  const totalAmount = transactions
    .filter((transaction: { state: string }) => transaction.state === "Credit")
    .reduce((sum, row) => sum + parseFloat(row.amount.replace(/,/g, "")), 0);
  const totalAmountDr = transactions
    .filter((transaction: { state: string }) => transaction.state === "Debit")
    .reduce((sum, row) => sum + parseFloat(row.amount.replace(/,/g, "")), 0);
  const totalInterest = transactions.reduce(
    (sum, row) => sum + parseFloat(row.interest_on_loan.replace(/,/g, "")),
    0
  );

  // Filter transactions by the selected month and user filter
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const matchesMonth =
      monthFilter !== null ? transactionDate.getMonth() === monthFilter : true;
    const matchesUser = userFilter
      ? transaction.profile_name
          .toLowerCase()
          .includes(userFilter.toLowerCase())
      : true;
    return matchesMonth && matchesUser;
  });

  const positiveSum = transactions
    .filter(
      (transaction) => parseFloat(transaction.amount.replace(/,/g, "")) > 0
    )
    .reduce(
      (sum, transaction) =>
        sum + parseFloat(transaction.amount.replace(/,/g, "")),
      0
    );

  const negativeSum = transactions
    .filter(
      (transaction) => parseFloat(transaction.amount.replace(/,/g, "")) < 0
    )
    .reduce(
      (sum, transaction) =>
        sum + parseFloat(transaction.amount.replace(/,/g, "")),
      0
    );

  console.log("Positive Sum:", positiveSum);
  console.log("Negative Sum:", negativeSum);
let prev = 0;
  return (
    <div className="p-5">
      <p className="text-[#2C2E3E] font-medium text-[16px] pb-2">
        All Transactions by All Users
      </p>
      <hr className="mb-2" />

      {/* Month Filter Section */}
      <div className="mb-4">
        <label htmlFor="monthFilter" className="mr-2 text-sm">
          Filter by Month:{" "}
        </label>
        <select
          id="monthFilter"
          value={monthFilter ?? ""}
          onChange={(e) =>
            setMonthFilter(e.target.value ? parseInt(e.target.value, 10) : null)
          }
          className="border p-2 rounded"
        >
          <option value="">All Months</option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i}>
              {new Date(2024, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>

      {/* User Filter Section */}
      <div className="mb-4">
        <label htmlFor="userFilter" className="mr-2 text-sm">
          Filter by User Name:{" "}
        </label>
        <input
          type="text"
          id="userFilter"
          value={userFilter}
          onChange={(e) => setUserFilter(e.target.value)}
          placeholder="Enter user name"
          className="border p-2 rounded"
        />
      </div>

      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              S/N
            </TableHead>
            <TableHead
              className="text-base text-[10px] font-semibold font-Montserrat text-gray-500 cursor-pointer"
              onClick={() => handleSort("profile_name")}
            >
              Member Name
              {sortBy === "profile_name" && (sortOrder === "asc" ? " ↑" : " ↓")}
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Amount
            </TableHead>
            <TableHead
              className="text-base text-[10px] font-semibold font-Montserrat text-gray-500 cursor-pointer"
              onClick={() => handleSort("date")}
            >
              Date
              {sortBy === "date" && (sortOrder === "asc" ? " ↑" : " ↓")}
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              State
            </TableHead>
            <TableHead className="text-base text-[10px] font-semibold font-Montserrat text-gray-500">
              Interest
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.sort(sortTransactions).map((row, i) => {
            const amount = parseFloat(row.amount.replace(/,/g, ""));
if (amount < 0){
  return ;
}
  prev = prev + 1;
            const interest_on_loan = parseFloat(
              row.interest_on_loan.replace(/,/g, "")
            );
            return (
              <TableRow key={i}>
                <TableCell>{prev}</TableCell>
                <TableCell>{row.profile_name || "N/A"}</TableCell>
                <TableCell
                  className={
                    // row.state === "Debit" ? "text-red-500" : "text-green-500"
                    amount < 0 ? "text-red-500" : "text-green-500"
                  }
                >
                  ₦
                  {amount < 0
                    ? (amount * -1).toLocaleString("en-NG") || "0"
                    : amount.toLocaleString("en-NG") || "0"}
                </TableCell>
                <TableCell>{new Date(row.date).toLocaleDateString()}</TableCell>
                <TableCell className="font-semibold">
                  <span
                    className={
                      // row.state === "Debit"
                      //   ? "text-red-500"
                      //   : row.state === "Credit"
                      //     ? "text-green-500"
                      //     : "text-black"
                      amount < 0 ? "text-red-500" : "text-green-500"
                    }
                  >
                    {amount < 0 ? "Loan" : "Contribution"}
                  </span>
                </TableCell>
                <TableCell
                  className={
                    // interest_on_loan === 0 ? "text-red-500" : "text-green-500"
                    "text-yellow-500"
                  }
                >
                  ₦{interest_on_loan.toLocaleString("en-NG") || "0"}
                </TableCell>
              </TableRow>
            );
          })}
          {/* Final Row for Totals */}
          <TableRow>
            <TableCell colSpan={2} className=" font-bold text-2xl">
              Total contributed:{" "}
              <span className="text-green-500">
                ₦{positiveSum.toLocaleString("en-NG") || "0"}
              </span>
            </TableCell>
            <TableCell className="font-bold text-2xl">
              {/* Total loaned:{" "}
              <span className="text-red-500">
                ₦{(-negativeSum).toLocaleString("en-NG") || "0"}
              </span> */}
            </TableCell>
            <TableCell className="font-bold text-2xl">
              Total amount:{" "}
              <span className="text-yellow-500">
                ₦{(positiveSum + negativeSum).toLocaleString("en-NG") || "0"}
              </span>
            </TableCell>
            <TableCell className="font-semibold text-lg"></TableCell>
          </TableRow>

          {/* Displaying the Top Contributor and Top Loaner */}
          <TableRow>
            <TableCell colSpan={2} className="font-semibold text-lg">
              <span className="text-black">Top Contributor: </span>
              <span className="text-green-500">
                {
                  transactions.reduce(
                    (top, row) =>
                      row.state === "Credit" &&
                      parseFloat(row.amount.replace(/,/g, "")) >
                        parseFloat(top.amount.replace(/,/g, ""))
                        ? row
                        : top,
                    { profile_name: "N/A", amount: "0" }
                  ).profile_name
                }
              </span>
            </TableCell>
            <TableCell></TableCell>
            <TableCell colSpan={2} className="font-semibold text-lg">
              <span className="text-black">Top Loaner: </span>
              <span className="text-red-500">
                {
                  transactions.reduce(
                    (top, row) =>
                      row.state === "Debit" &&
                      parseFloat(row.amount.replace(/,/g, "")) >
                        parseFloat(top.amount.replace(/,/g, ""))
                        ? row
                        : top,
                    { profile_name: "N/A", amount: "0" }
                  ).profile_name
                }
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
