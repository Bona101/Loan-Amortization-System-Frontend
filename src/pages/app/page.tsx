import React, { useState } from "react";
import { FormDropdown } from "@/components/Form/formdropdown";
import { FormField } from "@/components/Form/formfield";

export default function LoanRequest() {
  // State to manage the selected dropdown option
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center m-10 w-[932px]">
      <h1 className="text-[43px] font-semibold">
        How Much Would You Like{" "}
        <span className="text-[#54D4A0]">To Borrow?</span>
      </h1>
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-col justify-normal">
          <FormField
            id="amount"
            label="Enter an Amount"
            className="w-[342px]"
            placeholder="₦ 60,000"
            type="number"
          />
          <FormDropdown
            label="Choose an option"
            id="dropdown-example"
            options={["Option 1", "Option 2", "Option 3"]}
            selectedOption={selectedOption}
            onOptionSelect={(value) => setSelectedOption(value)}
            className="custom-trigger-class"
            placeholder="30 Days"
          />
        </div>
        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
}
