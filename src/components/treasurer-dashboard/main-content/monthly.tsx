import { NairaGreen, NairaWhite } from "@/assets";
import { MonthlyTable } from "./monthly-table";

export const Monthly: React.FC = () => {
    const infos = [
      [
        {
          title: "Total Monthly Interest Collected",
          value: "10,000",
        },
        {
          title: "Total Monthly Money Collected",
          value: "911,250",
        },
        {
          title: "Total Money for April",
          value: "421,250",
        },
      ],
      [
        {
          title: "Total Loan Returned",
          value: "00",
        },
        {
          title: "Total Loan Borrowed",
          value: "500,000",
        },
        {
          title: "Total Money in Bank April",
          value: "881,250",
        },
      ],
    ];
  return (
    <div className="m-[40px] flex-grow">
      <p className="font-normal text-[24px]">Welcome back, Tabitha!</p>
      <MonthlyTable />
      <div className="mt-[70px] flex justify-between font-Poppins font-medium text-[20px]">
        <div className="flex flex-col gap-10">
          {infos[0].map((info, i) => (
            <div
              className={`w-[448px] h-[118px] rounded-[9px] flex items-center pl-7 gap-8 ${i % 2 !== 0 ? "bg-gray-50 shadow-xl" : "bg-[#00A6A6]"}`}
            >
              <img
                src={i % 2 !== 0 ? NairaGreen : NairaWhite}
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
              className={`w-[448px] h-[118px] rounded-[9px] flex items-center pl-7 gap-8 ${i % 2 !== 0 ? "bg-gray-50 shadow-xl" : "bg-[#00A6A6]"}`}
            >
              <img
                src={i % 2 !== 0 ? NairaGreen : NairaWhite}
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
