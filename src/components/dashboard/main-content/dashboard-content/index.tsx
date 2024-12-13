import React, { useEffect, useState } from "react";
import { AreaChart1 } from "@/components/dashboard/main-content/dashboard-content/area-chart";
import Repayment from "@/components/dashboard/main-content/dashboard-content/repayment";
import TransactionHistory from "@/components/dashboard/main-content/dashboard-content/transaction-history";
import { BarChart_ } from "./bar-chart";
import { PieChart_ } from "./pie-chart";
import { useAuth } from "@/logi";


const DashboardContent: React.FC = () => {
  const { user, setUser } = useAuth();
  // const { setLogIn, setUser } = useAuth();

  // console.log(user);


    // const authenticateUser = async () => {
    //   const userData = {
    //     username,
    //     password,
    //   };
    //   try {
    //     const response = await fetch(
    //       "http://127.0.0.1:8000/api/users/authenticate",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(userData),
    //       }
    //     );

    //     //all the database information you need
    //     const data = await response.json();
    //     console.log(data);
    //     console.log(data.User_ID);
    //     console.log(data.Name);
    //     console.log(data.Username);
    //     console.log(data.Password);
    //     console.log(data.Balance);
    //     console.log(data.Role);
    //     // setRole(data.Role);

    //     // //for when monthly payment is due Nigger
    //     // console.log(
    //     //   `Next Payment Date: ${data.Transactions[data.Transactions.length - 1].date}`
    //     // );

    //     //for you to see all important information from transactions
    //     for (let i = 0; i < data.Transactions.length; i++) {
    //       console.log(`Transaction ${i + 1}:`);
    //       console.log(`Date: ${data.Transactions[i].date}`);
    //       console.log(`Amount: ${data.Transactions[i].amount}`);
    //       console.log(`State: ${data.Transactions[i].state}`);
    //     }
    //     if (data.message) {
    //       console.log("Data retrieval was successful");
    //       // setAuthMessage("Login successful!");
    //       // setLogIn(true);
    //       setUser(data);
    //       // signIn();
    //       // s(true);
    //       // router.invalidate();

    //       // if (data.Role === "User") {
    //       //   navigate({ to: "/sidebar" });
    //       // } else if (data.Role === "Treasurer") {
    //       //   navigate({ to: "/treasurer/all-transactions" });
    //       // } else {
    //       //   navigate({ to: "/sidebar" });
    //       // }
    //     } else {
    //       // setAuthMessage(data.message || "Authentication failed");
    //     }
    //   } catch (err) {
    //     console.log(err);
    //     // setAuthMessage("Error: Authentication failed");
    //     // navigate({ to: "/sidebar" });
    //   }
    // };

  return (
    <div className="m-[40px] flex-grow">
      <div className="">
        <p className="text-2xl p-4 mb-5">Welcome back, {user?.Name}!</p>

        <Repayment />

        {/* <div className="flex gap-[100px]"> */}
        <div className="">
          <BarChart_/>
          {/* <PieChart_/> */}
        </div>

        <TransactionHistory />
      </div>
    </div>
  );
};

export default DashboardContent;
