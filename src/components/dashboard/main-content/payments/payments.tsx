import { LoanHistory } from "./loan-history";
import { Repayment } from "./repayment";
import { useAuth1 } from "@/AuthContent";

export const Payments = () => {
  const { user } = useAuth1();
  const transactions = user.Transactions

  const lastCreditTransaction = transactions.filter((transaction: { state: string; }) => transaction.state === 'Credit').pop();
  const lastDebitTransaction = transactions.filter((transaction: { state: string; }) => transaction.state === 'Debit').pop();
  return (
    <div className="m-[40px] flex-grow">
      <p className="font-regular text-[24px]">Welcome to Payments Page, {user.Name}!</p>
      <Repayment
        first={{ title: "Last Contribution", content:  lastCreditTransaction.date}}
        second={{ title: "Amount Contributed", content: `₦${lastCreditTransaction?.amount}` }}
        buttonText="New Contribution "

      />
      <Repayment
        first={{ title: "Last Loan Request", content: lastDebitTransaction?.date ?? "N/A" }}
        second={{ title: "Amount Borrowed", content: `₦${lastDebitTransaction?.amount ?? "0.00"}` }}
        buttonText="Pay Back Loan "
      />
      <LoanHistory />
    </div>
  );
};
