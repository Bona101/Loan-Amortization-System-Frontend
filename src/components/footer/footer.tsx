import React from "react";

import { Arrow, Logo } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { FacebookLogo, TwitterLogo, InstagramLogo } from "@/assets";

export const Footer: React.FC = () => {

  const socials = [
    {
      icon: FacebookLogo,
      link: "",
    },
    {
      icon: TwitterLogo,
      link: "",
    },
    {
      icon: InstagramLogo,
      link: "",
    },
  ];

  const services = ["Email Marketing", "Campaigns", "Branding", "Offline"];
  const abouts = ["Our Story", "Benefits", "Team", "Careers"];
  const helps = ["FAQs", "Contact Us"];
  return (
    <div className="bg-[#026464] px-[200px] py-[70px] text-[#FFFFFF]">
      <div className="flex justify-between pb-5">
        <img src={Logo} alt="" />
        <Button className="bg-[#FFFFFF] text-[#000000] rounded-[8px] w-[175px] h-[50px] text-[17px] font-normal hover:text-[#FFFFFF]">
          Get Started
        </Button>
      </div>
      <hr className="text-[10px]" />
      <div className="flex justify-between pr-[100px] pt-9">
        <div>
          <p className="font-normal text-[22px]">Subscribe to our newsletter</p>
          <div className="flex pt-[30px]">
            <Input
              className="border-none bg-transparent placeholder:text-[#FFFFFF] placeholder:opacity-50"
              id="email"
              type="email"
              placeholder="Email address"
            />
            <div className="cursor-pointer p-5 rounded-t-xl bg-[#FFFFFF]">
              <img src={Arrow} alt="" />
            </div>
          </div>
          <hr />
        </div>
        <div>
          <p className="text-[17px]">Services</p>
          {services.map((service) => (
            <a className="block text-[15px] pt-3" href="">
              {service}
            </a>
          ))}
        </div>
        <div>
          <p className="text-[17px]">About</p>
          {abouts.map((about) => (
            <a className="block text-[15px] pt-3" href="">
              {about}
            </a>
          ))}
        </div>
        <div>
          <p className="text-[17px]">Help</p>
          {helps.map((help) => (
            <a className="block text-[15px] pt-3" href="">
              {help}
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-10">
        {socials.map((social) => (
          <a href={social.link}>
            <img src={social.icon} alt="" />
          </a>
        ))}
      </div>
      <div className="flex justify-between pt-[70px]">
        <p>© 2023 GTCSYS. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};
