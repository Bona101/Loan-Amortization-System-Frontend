import React from "react";

import { Logo } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
// import { getLogIn, setLogIn } from "@/logi";

export const Header: React.FC = () => {
  const links = [
    {
      title: "About",
      route: "/about",
    },
    {
      title: "Features",
      route: "/features",
    },
    {
      title: "Blogs",
      route: "/blogs",
    },
    {
      title: "Contact",
      route: "/contact",
    },
  ];
  return (
    <div className="flex justify-between bg-[#026464] text-[#FFFFFF] px-[4%] py-5">
      <Link to="/">
        <img className="w-[60px]" src={Logo} alt="Logo" />
      </Link>
      <div className="flex gap-5 items-center">
        {links.map((link, i) => (
          <Link key={i} to={link.route} className="">
            <p>{link.title}</p>
          </Link>
        ))}
        {/* <div
          onClick={() => {
            // console.log(getLogIn());
            // setLogIn(true);
            // console.log(getLogIn());
          }}
        >
          Log
        </div> */}
        {/* <div onClick={() => setLogIn(false)}>Log out</div> */}
        <div className="flex gap-3">
          <Link to="/login">
            <Button className="bg-[#292929] border border-[#FFFFFFF] rounded-[200px] hover:bg-[#FFFFFF] hover:text-[#292929]">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-[#FFFFFF] rounded-[200px] text-[#292929] border border-[#FFFFFFF] hover:text-[#FFFFFF]">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
