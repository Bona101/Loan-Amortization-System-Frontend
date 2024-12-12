import { useState } from "react";
import { FormField } from "@/components/Form/formfield";
import { FormSelect } from "@/components/Form/formselect.tsx";
import { Separator } from "@/components/ui/separator.tsx";
// import { DatePicker } from "@/components/ui/datepicker.tsx";
import { Button } from "@/components/ui/button.tsx";
import { LoanHistory } from "./loan-history";
import { useAuth1 } from "@/AuthContent";

export const LoanRequest = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { user } = useAuth1();
  const pk = user.User_ID;
  const pk1 = parseInt(pk, 10);
  const [amount, setAmount] = useState<string>("");
  const [state, setState] = useState<string>("Debit");
  const today = new Date();
  today.setDate(today.getDate() + 30);
  const futureDate = today.toISOString().split('T')[0]; // Format it as yyyy-mm-dd

  // Add Transaction Function
  const addTransaction = async (userId: string, transactionData: { amount: string, state: string, profile_id: number }) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/users/create/trans/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      });

      const data = await response.json();
      console.log(`from backend: ${data}`)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-full m-[40px] flex-grow">
      <h1 className="text-[43px] text-center font-semibold">
        How Much Would You Like{" "}
        <span className="text-[#54D4A0]">To Borrow?</span>
      </h1>
      <div className="flex justify-evenly mt-6 gap-10 ">
        <div className="flex flex-col mt-8 items-center justify-normal">
          <section className="w-full flex flex-col items-center gap-8">
            <FormField
              id="amount"
              label="Enter an Amount"
              className="w-[342px] h-12 border border-bordered rounded"
              placeholder="₦ 60,000"
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
                setState("Debit"); // State set here
              }}
            />
            <FormSelect
              label="Choose an option"
              id="dropdown-example"
              options={["30 days", "60 days"]}
              selectedOption={selectedOption}
              onOptionSelect={(value) => {
                setSelectedOption(value);
              }}
              className="w-[342px] h-12 border border-bordered rounded"
              placeholder="30 Days"
            />
          </section>
          <div className="w-full mt-32">
            <div className="flex text-[#54D4A0] px-4 font-semibold text-xs justify-center w-full">
              <p>Interest Rate %</p>
            </div>
            <Separator className="w-full bg-gray-300 h-[1px]" decorative />
            <div className="flex mt-4 justify-center items-center pl-4 pr-4 w-full">
              <p className="text-center">2.5%</p>
            </div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="border border-gray h-full dashed-separator"
        />
        <div className="flex flex-col mt-8 items-center justify-center h-full">
          <section className="w-full flex flex-col text-center items-center gap-12">
            <div className="space-y-4">
              <h2 className="font-black text-3xl">Total Amount Borrowed</h2>
              <h3 className="text-[#54D4A0] text-2xl font-semibold">
                ₦{amount}
              </h3>
            </div>
            <div className="space-y-4">
              <h2 className="font-black text-3xl">Total Amount To Be Paid</h2>
              <h3 className="text-[#54D4A0] text-2xl font-semibold">
                ₦{(parseFloat(amount) + parseFloat(amount) * 25 / 1000).toFixed(2)}
              </h3>
            </div>

            <div className="w-full space-y-6">
              <h2 className="font-black text-3xl">Due Date</h2>
              <h2 style={{ fontSize: "48px", fontWeight: "bold" }}>
                <p>{futureDate}</p>
              </h2>
              <Button
                className="w-full border border-[#54D4A0] rounded"
                onClick={() =>
                  addTransaction(pk, { amount, state, profile_id: pk1 }) // Pass dynamic data here
                }
              >
                Request Loan
              </Button>
            </div>
          </section>
        </div>
      </div>

      <LoanHistory />
    </div>
  );
};
