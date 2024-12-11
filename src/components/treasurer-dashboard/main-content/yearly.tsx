import { CoinStacks, MoneyBag, NairaGreen, NairaWhite } from "@/assets";
import { YearlyTable } from "./yearly-table";

export const Yearly: React.FC = () => {
  const infos = [
    [
      {
        title: "Top contributor",
        value: "Mrs. Abigor",
      },
      {
        title: "Total Yearly Contributions",
        value: "8,738,750",
      },
      {
        title: "Total Yearly Loan Borrowed",
        value: "3,250,000",
      },
      {
        title: "Total Yearly Loan Returned",
        value: "680,000",
      },
    ],
    [
      {
        title: "Largest outstanding loan",
        value: "Mr. Austin Aikhiome Ohiole",
      },
      {
        title: "Total Yearly Interest Collected",
        value: "210,000",
      },
      {
        title: "Total Yearly Interest Gained",
        value: "524,325",
      },
      {
        title: "Total Money for the Year",
        value: "8,948,750",
      },
    ],
  ];
  return (
    <div className="m-[40px] flex-grow">
      <p className="font-normal text-[24px]">Welcome back, Tabitha!</p>
      <YearlyTable />
      <div className="mt-[70px] flex justify-between font-Poppins font-medium text-[20px]">
        <div className="flex flex-col gap-10">
          {infos[0].map((info, i) => (
            <div
              className={`w-[448px] h-[118px] rounded-[9px] flex items-center pl-7 gap-8 ${i % 2 === 0 ? "bg-gray-50 shadow-xl" : "bg-[#00A6A6]"}`}
            >
              <img
                src={
                  i % 2 === 0 ? (i === 0 ? CoinStacks : NairaGreen) : NairaWhite
                }
                alt="Naira Symbol"
              />
              <div>
                <p>{info.title}</p>
                <p>{info.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          {infos[1].map((info, i) => (
            <div
              className={`w-[448px] h-[118px] rounded-[9px] flex items-center pl-7 gap-8 ${i % 2 === 0 ? "bg-gray-50 shadow-xl" : "bg-[#00A6A6]"}`}
            >
              <img
                src={
                  i % 2 === 0 ? (i === 0 ? MoneyBag : NairaGreen) : NairaWhite
                }
                alt="Naira Symbol"
              />
              <div>
                <p>{info.title}</p>
                <p>{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
