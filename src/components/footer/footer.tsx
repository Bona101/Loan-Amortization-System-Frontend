import React from "react";

import { Logo } from "@/assets";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";

export const Footer: React.FC = () => {
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
    <div className="">
      <div className="flex">
        <img src={Logo} alt="" />
        <Button>Get Started</Button>
      </div>
      <hr />
      <div className="flex">
        <div>
          <p>Subscribe to our newsletter</p>
          <div className="flex">
            <Input id="email" type="email" placeholder="Email address" />
            <img src={arrow} alt="" />
          </div>
          <div className="flex">
            {socials.map((social) => (
              <a href={social.link}>
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p>Services</p>
          {services.map((service) => (
            <a href="">{service}</a>
          ))}
        </div>
        <div>
          <p>About</p>
          {abouts.map((about) => (
            <a href="">{about}</a>
          ))}
        </div>
      </div>
    </div>
  );
};
