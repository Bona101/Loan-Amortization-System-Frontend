import { useState } from "react";
import { FormField } from "@/components/Form/formfield";
import { FormSelect } from "@/components/Form/formselect.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { DatePicker } from "@/components/ui/datepicker.tsx";
import { Button } from "@/components/ui/button.tsx";
import { LoanHistory } from "./loan-history";

export const LoanRequest = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

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
            />
            <FormSelect
              label="Choose an option"
              id="dropdown-example"
              options={["60 days", "90 days", "120 days"]}
              selectedOption={selectedOption}
              onOptionSelect={(value) => setSelectedOption(value)}
              className="w-[342px] h-12 border border-bordered rounded"
              placeholder="30 Days"
            />
          </section>
          <div className="w-full mt-32">
            <div className="flex text-[#54D4A0] px-4 font-semibold text-xs justify-between w-full">
              <p>Interest Rate %</p>
              <p>Deposit Date</p>
            </div>
            <Separator className="w-full bg-gray-300 h-[1px]" decorative />
            <div className="flex mt-4 justify-between items-center pl-4 pr-4 w-full">
              <p>25%</p>
              <DatePicker className="max-w-[140px] rounded border border-bordered" />
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
              <h2 className="font-black text-3xl">Total Ammount Borrowed</h2>
              <h3 className="text-[#54D4A0] text-2xl font-semibold">
                ₦60,000.00
              </h3>
            </div>
            <div className="space-y-4">
              <h2 className="font-black text-3xl">Total Ammount To Be Paid</h2>
              <h3 className="text-[#54D4A0] text-2xl font-semibold">
                ₦60,000.00
              </h3>
            </div>
            <div className="w-full space-y-6">
              <h2 className="font-black text-3xl">Due Date</h2>
              <DatePicker className="w-full rounded border border-bordered" />
              <Button className="w-full border border-[#54D4A0] rounded">
                Request Loan
              </Button>
            </div>
          </section>
        </div>
      </div>

      <LoanHistory/>
    </div>
  );
};
