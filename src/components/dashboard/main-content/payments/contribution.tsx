import { useState } from "react";
import { FormField } from "@/components/Form/formfield";
// import { FormSelect } from "@/components/Form/formselect.tsx";
import { Separator } from "@/components/ui/separator.tsx";
// import { DatePicker } from "@/components/ui/datepicker.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ContributionHistory } from "./contributions-history";
import { useAuth1 } from "@/AuthContent";

export const Contribution = () => {
    const { user } = useAuth1();
    const pk = user.User_ID;
    const pk1 = parseInt(pk, 10);
    const balance = user.Balance;
    const [amount, setAmount] = useState<string>("");
    const [state, setState] = useState<string>("Credit");

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
                <span className="text-[#54D4A0]">To Contribute?</span>
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
                                setState("Credit"); // State set here
                            }}
                        />
                    </section>
                    <div className="mt-6">
                        <Button
                            className="w-full border border-[#54D4A0] rounded"
                            onClick={() =>
                                addTransaction(pk, { amount, state, profile_id: pk1 }) // Pass dynamic data here
                            }
                        >
                            Make Contribution
                        </Button>
                    </div>
                </div>
                <Separator
                    orientation="vertical"
                    className="border border-gray h-full dashed-separator"
                />
                <div className="flex flex-col mt-8 items-center justify-center h-full">
                    <section className="w-full flex flex-col text-center items-center gap-12">
                        <div className="space-y-4">
                            <h2 className="font-black text-3xl">Current Balance</h2>
                            <h3 className="text-[#54D4A0] text-2xl font-semibold">
                                ₦{balance}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            <h2 className="font-black text-3xl">Balance after payment</h2>
                            <h3 className="text-[#54D4A0] text-2xl font-semibold">
                                ₦{parseFloat(amount) + balance}
                            </h3>
                        </div>
                    </section>
                </div>
            </div>

            <ContributionHistory />
        </div>
    );
};
