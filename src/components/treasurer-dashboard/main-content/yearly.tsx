// import { CoinStacks, MoneyBag, NairaGreen, NairaWhite } from "@/assets";
import { YearlyTable } from "./yearly-table";
import { useAuth1 } from "@/AuthContent";

export const Yearly: React.FC = () => {
  const { user } = useAuth1();
  return (
    <div className="m-[40px] flex-grow">
      <p className="font-normal text-[24px]">Welcome back, {user.Name}!</p>
      <YearlyTable />
    </div>
  );
};
