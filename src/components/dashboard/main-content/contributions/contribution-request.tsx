// import { useState } from "react";
// import { FormField } from "@/components/Form/formfield";
// import { FormSelect } from "@/components/Form/formselect.tsx";
// import { Separator } from "@/components/ui/separator.tsx";
// import { DatePicker } from "@/components/ui/datepicker.tsx";
// import { Button } from "@/components/ui/button.tsx";
// import { LoanHistory } from "./loan-history";

// export const LoanRequest = () => {
//   const [selectedOption, setSelectedOption] = useState<string>("");

//    const addTransaction = async (
//      userId: string,
//      transactionData: { amount: string; state: string; profile_id: number }
//    ) => {
//      try {
//        const response = await fetch(
//          `http://127.0.0.1:8000/api/users/create/trans/${userId}`,
//          {
//            method: "POST",
//            headers: {
//              "Content-Type": "application/json",
//            },
//            body: JSON.stringify(transactionData),
//          }
//        );

//        const data = await response.json();
//        console.log(`from backend: ${data}`);
//      } catch (err) {
//        console.log(err);
//      }
//    };

//   return (
//     <div className="flex flex-col w-full m-[40px] flex-grow">
//       <h1 className="text-[43px] text-center font-semibold">
//         How Much Would You Like{" "}
//         <span className="text-[#54D4A0]">To Borrow?</span>
//       </h1>
//       <div className="flex justify-evenly mt-6 gap-10 ">
//         <div className="flex flex-col mt-8 items-center justify-normal">
//           <section className="w-full flex flex-col items-center gap-8">
//             <FormField
//               id="amount"
//               label="Enter an Amount"
//               className="w-[342px] h-12 border border-bordered rounded"
//               placeholder="₦ 60,000"
//               type="number"
//             />
//             <FormSelect
//               label="Choose an option"
//               id="dropdown-example"
//               options={["60 days", "90 days", "120 days"]}
//               selectedOption={selectedOption}
//               onOptionSelect={(value) => setSelectedOption(value)}
//               className="w-[342px] h-12 border border-bordered rounded"
//               placeholder="30 Days"
//             />
//           </section>
//           <div className="w-full mt-32">
//             <div className="flex text-[#54D4A0] px-4 font-semibold text-xs justify-between w-full">
//               <p>Interest Rate %</p>
//               <p>Deposit Date</p>
//             </div>
//             <Separator className="w-full bg-gray-300 h-[1px]" decorative />
//             <div className="flex mt-4 justify-between items-center pl-4 pr-4 w-full">
//               <p>25%</p>
//               <DatePicker className="max-w-[140px] rounded border border-bordered" />
//             </div>
//           </div>
//         </div>
//         <Separator
//           orientation="vertical"
//           className="border border-gray h-full dashed-separator"
//         />
//         <div className="flex flex-col mt-8 items-center justify-center h-full">
//           <section className="w-full flex flex-col text-center items-center gap-12">
//             <div className="space-y-4">
//               <h2 className="font-black text-3xl">Total Ammount Borrowed</h2>
//               <h3 className="text-[#54D4A0] text-2xl font-semibold">
//                 ₦60,000.00
//               </h3>
//             </div>
//             <div className="space-y-4">
//               <h2 className="font-black text-3xl">Total Ammount To Be Paid</h2>
//               <h3 className="text-[#54D4A0] text-2xl font-semibold">
//                 ₦60,000.00
//               </h3>
//             </div>
//             <div className="w-full space-y-6">
//               <h2 className="font-black text-3xl">Due Date</h2>
//               <DatePicker className="w-full rounded border border-bordered" />
//               <Button className="w-full border border-[#54D4A0] rounded" onClick={() => {
//                 addTransaction(amount, "Debit", user?.ID)
//               }}>
//                 Request Loan
//               </Button>
//             </div>
//           </section>
//         </div>
//       </div>

//       <LoanHistory/>
//     </div>
//   );
// };

import { useState } from "react";
import { FormField } from "@/components/Form/formfield";
import { FormSelect } from "@/components/Form/formselect.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { DatePicker } from "@/components/ui/datepicker.tsx";
import { Button } from "@/components/ui/button.tsx";
import { LoanHistory } from "./contribution-history";
import { useAuth } from "@/logi";
import { parse } from "path";

export const Contribution = () => {
  const { user } = useAuth();

  // State variables to store the input values
  const [amount, setAmount] = useState<string>(""); // To capture the loan amount
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Handle the change for amount input field
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  // Handle the change for the dropdown
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };

  const addTransaction = async (
    userId: string,
    transactionData: { amount: string; state: string; profile_id: number }
  ) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/users/create/trans/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transactionData),
        }
      );

      const data = await response.json();
      console.log(`from backend: ${data}`);
    } catch (err) {
      console.log(err);
    }
  };

  const [as,c] = useState("Contribute")

  return (
    <div className="flex flex-col w-full m-[40px] flex-grow">
      <h1 className="text-[43px] text-center font-semibold">
        How Much Would You Like{" "}
        <span className="text-[#54D4A0]">To Contribute?</span>
      </h1>
      <div className="flex justify-evenly mt-6 gap-10 ">
        <div className="flex flex-col mt-8 items-center justify-normal">
          <section className="w-full flex flex-col items-center gap-8">
            {/* Amount input field */}
            <FormField
              id="amount"
              label="Enter an Amount"
              className="w-[342px] h-12 border border-bordered rounded"
              placeholder="₦ 60,000"
              type="number"
              value={amount} // Bind to state
              onChange={handleAmountChange} // Update state on change
            />
            <Button
              className="w-full border border-[#54D4A0] rounded"
              onClick={() => {
                addTransaction(user?.User_ID, {
                  amount: parseFloat(amount).toString(),
                  state: "Debit",
                  profile_id: user?.User_ID,
                });
                c("Contribute 👍");
              }}
            >
              {as}
            </Button>
            {/* Dropdown select */}
            {/* <FormSelect
              label="Choose an option"
              id="dropdown-example"
              options={["60 days", "90 days", "120 days"]}
              selectedOption={selectedOption}
              onOptionSelect={handleOptionSelect} // Update selected option
              className="w-[342px] h-12 border border-bordered rounded"
              placeholder="30 Days"
            /> */}
          </section>
          <div className="w-full mt-32">
            <div className="flex text-[#54D4A0] px-4 font-semibold text-xs justify-between w-full">
              <p>Interest Rate %</p>
              {/* <p>Deposit Date</p> */}
            </div>
            <Separator className="w-full bg-gray-300 h-[1px]" decorative />
            <div className="flex mt-4 justify-between items-center pl-4 pr-4 w-full">
              <p>2.5%</p>
              {/* <DatePicker className="max-w-[140px] rounded border border-bordered" /> */}
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
              <h2 className="font-black text-3xl">Amount being contributed</h2>
              <h3 className="text-[#54D4A0] text-2xl font-semibold">
                ₦
                {parseFloat(amount).toLocaleString("en-NG") !== "NaN"
                  ? parseFloat(amount).toLocaleString("en-NG")
                  : "0.00"}
              </h3>
            </div>
            <div className="space-y-4">
              <h2 className="font-black text-3xl">Interest to be gained</h2>
              <h3 className="text-[#54D4A0] text-2xl font-semibold">
                ₦
                {((parseFloat(amount) * 2.5) / 100).toLocaleString("en-NG") !==
                "NaN"
                  ? ((parseFloat(amount) * 2.5) / 100).toLocaleString("en-NG")
                  : "0.00"}
              </h3>
            </div>
            <div className="w-full space-y-6">
              {/* <h2 className="font-black text-3xl">Due Date</h2>
              <DatePicker className="w-full rounded border border-bordered" /> */}
            </div>
          </section>
        </div>
      </div>

      <LoanHistory />
    </div>
  );
};
