import React from "react";

import { Logo } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";



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
    <div className="flex justify-between bg-[#292929] text-[#FFFFFF] px-[4%] py-5">
      <img src={Logo} alt="Logo" />
      <div className="flex gap-5 items-center">
        {links.map((link) => (
          <Link to={link.route} className="">
            <p>{link.title}</p>
          </Link>
        ))}

        <div className="flex gap-3">
          <Button className="bg-[#292929] border border-[#FFFFFFF] rounded-[200px] hover:bg-[#FFFFFF] hover:text-[#292929]">
            Login
          </Button>
          <Button className="bg-[#FFFFFF] rounded-[200px] text-[#292929] border border-[#FFFFFFF] hover:text-[#FFFFFF]">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};
