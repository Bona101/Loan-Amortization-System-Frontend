import { LoanHistory } from "./loan-history";
import {Repayment} from "./repayment";

export const Payments = () => {
  return (
    <div className="m-[40px] flex-grow">
      <p className="font-regular text-[24px]">Welcome back, Abdullah!</p>
      <Repayment
        first={{ title: "Last Contribution", content: "November 11, 2023" }}
        second={{ title: "Amount Contributed", content: "₦ 10,000.00" }}
        buttonText="New Contribution "
        
      />
      <Repayment
        first={{ title: "Last Loan Request", content: "February 9, 2024" }}
        second={{ title: "Amount Borrowed", content: "₦ 200,000.00" }}
        buttonText="Pay Back Loan "
      />
      <LoanHistory/>
    </div>
  );
};
