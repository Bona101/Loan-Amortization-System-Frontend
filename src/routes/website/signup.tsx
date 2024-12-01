import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/webiste/navbar.tsx";
import { FormSelect } from "@/components/Form/formselect.tsx";
import { FormField } from "@/components/Form/formfield.tsx";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function SignUp() {
   const [selectedOption, setSelectedOption] = useState<string>("");
  return (
    <div className="w-full gap-16 flex flex-col items-center">
      <Navbar />
      <div className="border flex flex-col items-center shadow rounded-3xl mb-16 py-8 px-12 w-[901px] h-auto">
        <section className="flex flex-col text-center items-center gap-6">
          <h1 className="text-5xl">Sign Up</h1>
          <h2 className="text-lg font-light text-[#8C8C8C]">
            Join our community today! Create an account to unlock exclusive
            features and <br /> personalized experiences.
          </h2>
        </section>
        <div className="flex flex-col py-8 gap-8 w-full h-auto items-center">
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Account Number</h3>
            <FormField
              id="account"
              className="w-[342px] h-12 border border-bordered rounded"
              type="number"
            />
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Bank Name</h3>
            <FormSelect
              id="bank"
              options={["Opay", "Palmpay", "Moniepoint"]}
              selectedOption={selectedOption}
              onOptionSelect={(value) => setSelectedOption(value)}
              className="w-[342px] justify-between h-12 border border-bordered rounded"
              placeholder="Select Bank"
            />
          </section>
        </div>
        <Button className="mt-8 w-[310px] h-[63px] bg-[#343434] opacity-55 text-white text-lg rounded-full hover:opacity-80 hover:bg-[#343434]">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/website/signup")({
  component: SignUp,
});
