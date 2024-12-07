import { createFileRoute } from "@tanstack/react-router";
import { FormField } from "@/components/Form/formfield.tsx";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PasswordInput } from "@/components/Form/passwordinput";
import { Separator } from "@/components/ui/separator";

function SignUp() {
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="w-full gap-16 flex flex-col items-center">
      <div className="border flex flex-col items-center shadow rounded-3xl mb-16 py-8 px-12 w-[901px] h-auto">
        <section className="flex flex-col text-center items-center gap-6">
          <h1 className="text-5xl">Sign Up</h1>
          <h2 className="text-lg font-light text-[#8C8C8C]">
            Join our community today! Create an account to unlock exclusive
            features and <br /> personalized experiences.
          </h2>
        </section>
        <div className="flex flex-col py-4 gap-8 w-full h-auto items-center">
          <section className="flex flex-col gap-4">
            <FormField
              id="email"
              className="w-[342px] placeholder:text-left h-12 border border-bordered rounded-full"
              type="email"
              placeholder="Enter your email"
            />
            <PasswordInput
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              className="w-[342px] h-12 border placeholder:text-left border-bordered rounded-full"
              placeholder="Enter your password"
            />
            <PasswordInput
              id="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              className="w-[342px] h-12 border placeholder:text-left border-bordered rounded-full"
              placeholder="Confirm your password"
            />
          </section>
        </div>
        <Button className="mt-4 w-[342px] h-12 bg-[#343434] opacity-55 text-white text-lg rounded-full hover:opacity-80 hover:bg-[#343434]">
          Sign Up
        </Button>
        <p className="text-lg mt-4 text-[#B3B3B3]">
          Already have an account? <span className="text-[#3FA3CE]">Login</span>
        </p>
        <div className="flex justify-center my-4 w-full items-center gap-4 whitespace-nowrap">
          <Separator className="w-[20%] bg-gray-300 h-[1px]" />
          <p className="text-[#B3B3B3]">Or</p>
          <Separator className="w-[20%] bg-gray-300 h-[1px]" />
        </div>
        <button className="flex border rounded-full  pl-16 gap-4 items-center w-[342px] h-[75px]">
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.863525"
              y="0.363632"
              width="47.2727"
              height="47.2727"
              rx="23.6364"
              fill="url(#paint0_linear_144_717)"
              fill-opacity="0.1"
            />
            <rect
              x="1.23284"
              y="0.73295"
              width="46.5341"
              height="46.5341"
              rx="23.267"
              stroke="url(#paint1_linear_144_717)"
              stroke-opacity="0.2"
              stroke-width="0.738636"
            />
            <path
              d="M31.7426 22.5534H31.1476V22.5227H24.4999V25.4773H28.6743C28.0653 27.1972 26.4288 28.4318 24.4999 28.4318C22.0524 28.4318 20.0681 26.4475 20.0681 24C20.0681 21.5525 22.0524 19.5682 24.4999 19.5682C25.6296 19.5682 26.6574 19.9944 27.44 20.6905L29.5293 18.6013C28.2101 17.3718 26.4455 16.6136 24.4999 16.6136C20.4208 16.6136 17.1135 19.9209 17.1135 24C17.1135 28.0791 20.4208 31.3864 24.4999 31.3864C28.579 31.3864 31.8863 28.0791 31.8863 24C31.8863 23.5047 31.8353 23.0213 31.7426 22.5534Z"
              fill="#FFC107"
            />
            <path
              d="M17.9651 20.562L20.3919 22.3418C21.0485 20.716 22.6388 19.5682 24.4998 19.5682C25.6295 19.5682 26.6574 19.9944 27.4399 20.6905L29.5292 18.6013C28.21 17.3718 26.4454 16.6136 24.4998 16.6136C21.6627 16.6136 19.2023 18.2154 17.9651 20.562Z"
              fill="#FF3D00"
            />
            <path
              d="M24.4998 31.3864C26.4077 31.3864 28.1413 30.6562 29.452 29.4689L27.1659 27.5344C26.3995 28.1175 25.4628 28.4328 24.4998 28.4318C22.5786 28.4318 20.9473 27.2068 20.3328 25.4972L17.9241 27.353C19.1465 29.7451 21.6291 31.3864 24.4998 31.3864Z"
              fill="#4CAF50"
            />
            <path
              d="M31.7425 22.5534H31.1475V22.5227H24.4998V25.4773H28.6742C28.3828 26.2958 27.8581 27.0111 27.1648 27.5347L27.1659 27.534L29.4519 29.4685C29.2902 29.6155 31.8861 27.6932 31.8861 24C31.8861 23.5047 31.8352 23.0213 31.7425 22.5534Z"
              fill="#1976D2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_144_717"
                x1="24.4999"
                y1="-30.9386"
                x2="24.4999"
                y2="122.378"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#979797" />
                <stop offset="0.467671" stop-color="#9B9B9B" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_144_717"
                x1="24.4999"
                y1="-81.7248"
                x2="24.4999"
                y2="90.4373"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CAFF33" />
                <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p>Continue with Google</p>
        </button>
        <button className="flex border rounded-full items-center pl-16 mt-4 gap-4 w-[342px] h-[75px]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.564941"
              y="0.364998"
              width="47.27"
              height="47.27"
              rx="23.635"
              fill="url(#paint0_linear_144_726)"
              fill-opacity="0.1"
            />
            <rect
              x="0.934238"
              y="0.734295"
              width="46.5314"
              height="46.5314"
              rx="23.2657"
              stroke="url(#paint1_linear_144_726)"
              stroke-opacity="0.2"
              stroke-width="0.738594"
            />
            <path
              d="M27.9299 30.1156C27.206 30.8172 26.4157 30.7064 25.655 30.3741C24.8499 30.0343 24.1113 30.0195 23.2619 30.3741C22.1984 30.832 21.637 30.699 21.0018 30.1156C17.3975 26.4004 17.9293 20.7428 22.0211 20.536C23.0182 20.5877 23.7125 21.0826 24.296 21.1269C25.1675 20.9496 26.0021 20.44 26.9328 20.5064C28.048 20.5951 28.89 21.0382 29.444 21.8359C27.1396 23.2171 27.6861 26.2527 29.7985 27.1021C29.3775 28.21 28.8309 29.3105 27.9225 30.1229L27.9299 30.1156ZM24.2221 20.4917C24.1113 18.8446 25.4482 17.4856 26.9845 17.3527C27.1987 19.2582 25.2561 20.6763 24.2221 20.4917Z"
              fill="black"
            />
            <defs>
              <linearGradient
                id="paint0_linear_144_726"
                x1="24.1999"
                y1="-30.9354"
                x2="24.1999"
                y2="122.373"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#979797" />
                <stop offset="0.467671" stop-color="#9B9B9B" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_144_726"
                x1="24.1999"
                y1="-81.7187"
                x2="24.1999"
                y2="90.4335"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CAFF33" />
                <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p>Continue with Apple</p>
        </button>
        <button className="flex border rounded-full items-center pl-16 mt-4 gap-4 w-[342px] h-[75px]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.564941"
              y="0.365"
              width="47.27"
              height="47.27"
              rx="23.635"
              fill="url(#paint0_linear_144_732)"
              fill-opacity="0.1"
            />
            <rect
              x="0.934238"
              y="0.734297"
              width="46.5314"
              height="46.5314"
              rx="23.2657"
              stroke="url(#paint1_linear_144_732)"
              stroke-opacity="0.2"
              stroke-width="0.738594"
            />
            <path
              d="M26.1299 19.5335V22.5675L27.1912 23.235C27.2296 23.2432 27.2692 23.2432 27.3076 23.235L31.871 20.1584C31.8676 20.0091 31.813 19.8655 31.7163 19.7517C31.6195 19.6379 31.4866 19.5609 31.3397 19.5335H26.1299Z"
              fill="#0072C6"
            />
            <path
              d="M26.1301 23.6992L27.0978 24.3639C27.1431 24.3917 27.1951 24.4063 27.2482 24.4063C27.3013 24.4063 27.3534 24.3917 27.3986 24.3639C27.2324 24.4642 31.8706 21.3848 31.8706 21.3848V26.9608C31.8827 27.0738 31.87 27.1881 31.8333 27.2956C31.7966 27.4032 31.7369 27.5014 31.6583 27.5835C31.5796 27.6655 31.484 27.7294 31.3782 27.7706C31.2723 27.8119 31.1586 27.8295 31.0452 27.8222H26.1295L26.1301 23.6992ZM21.1202 22.3005C20.9594 22.2998 20.8014 22.3425 20.663 22.4243C20.5245 22.506 20.4107 22.6236 20.3336 22.7647C20.1231 23.1388 20.0222 23.5646 20.0422 23.9934C20.0204 24.4212 20.1215 24.8464 20.3336 25.2187C20.4103 25.354 20.5213 25.4668 20.6554 25.5456C20.7895 25.6244 20.942 25.6666 21.0976 25.6678C21.2531 25.6691 21.4063 25.6293 21.5416 25.5526C21.677 25.4759 21.7897 25.365 21.8686 25.2309C22.0788 24.8605 22.1779 24.4374 22.1539 24.0122C22.1779 23.5737 22.0821 23.1369 21.8769 22.7486C21.8034 22.6123 21.6941 22.4985 21.5608 22.4195C21.4274 22.3406 21.2751 22.2994 21.1202 22.3005Z"
              fill="#0072C6"
            />
            <path
              d="M16.5295 17.9925V29.8618L25.5588 31.7552V16.2448L16.5295 17.9925ZM22.572 25.9338C22.4031 26.172 22.1785 26.3652 21.9178 26.4966C21.6571 26.628 21.3682 26.6936 21.0763 26.6877C20.7918 26.6928 20.5102 26.6291 20.2556 26.5019C20.001 26.3748 19.7809 26.1881 19.6139 25.9576C19.218 25.4048 19.0199 24.7347 19.0517 24.0554C19.0181 23.3428 19.2197 22.639 19.6255 22.0523C19.7967 21.8098 20.0248 21.613 20.2899 21.4793C20.5549 21.3456 20.8488 21.2791 21.1456 21.2857C21.428 21.2802 21.7075 21.344 21.9595 21.4716C22.2116 21.5992 22.4285 21.7866 22.5914 22.0174C22.9833 22.5823 23.178 23.2606 23.1453 23.9474C23.18 24.6548 22.9783 25.3537 22.572 25.9338Z"
              fill="#0072C6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_144_732"
                x1="24.1999"
                y1="-30.9354"
                x2="24.1999"
                y2="122.373"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#979797" />
                <stop offset="0.467671" stop-color="#9B9B9B" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_144_732"
                x1="24.1999"
                y1="-81.7187"
                x2="24.1999"
                y2="90.4335"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CAFF33" />
                <stop offset="0.716291" stop-color="#CAFF33" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <p>Continue with Outlook</p>
        </button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/website/signup")({
  component: SignUp,
});
