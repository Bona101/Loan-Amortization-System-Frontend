import { Navbar } from '@/components/webiste/navbar.tsx'
// import { FormField } from '@/components/Form/formfield.tsx'
import { Button } from '@/components/ui/button'
import { PasswordInput } from '@/components/Form/passwordinput'
import { SetStateAction, useState } from 'react'
import { Input } from '@/components/ui/input'
import { useNavigate } from '@tanstack/react-router'

import { Separator } from '@/components/ui/separator'
import { setRole } from '@/role'
import { useAuth } from '@/logi'
import { isAuthenticated, signIn, signOut } from '@/utils/auth'
import { createFileRoute, useRouter } from '@tanstack/react-router'

function Login() {
  const { setLogIn, setUser } = useAuth()

  const handleLogin = () => {
    setLogIn(true) // Mark the user as logged in
  }
  const router = useRouter()

  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [authMessage, setAuthMessage] = useState('')
  const navigate = useNavigate()

  const authenticateUser = async () => {
    const userData = {
      username,
      password,
    }
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/users/authenticate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        },
      )

      //all the database information you need
      const data = await response.json()
      console.log(data)
      console.log(data.User_ID)
      console.log(data.Name)
      console.log(data.Username)
      console.log(data.Password)
      console.log(data.Balance)
      console.log(data.Role)
      setRole(data.Role)

      //for when monthly payment is due Nigger
      console.log(
        `Next Payment Date: ${data.Transactions[data.Transactions.length - 1].date}`,
      )

      //for you to see all important information from transactions
      for (let i = 0; i < data.Transactions.length; i++) {
        console.log(`Transaction ${i + 1}:`)
        console.log(`Date: ${data.Transactions[i].date}`)
        console.log(`Amount: ${data.Transactions[i].amount}`)
        console.log(`State: ${data.Transactions[i].state}`)
      }
      if (data.message) {
        console.log('Data retrieval was successful')
        setAuthMessage('Login successful!')
        // setLogIn(true);
        localStorage.setItem("data", JSON.stringify(data)); 
setUser(data);
        signIn()
        s(true)
        router.invalidate()

        if (data.Role === 'User') {
          navigate({ to: '/sidebar' })
        } else if (data.Role === 'Treasurer') {
          navigate({ to: '/treasurer/all-transactions' })
        } else {
          navigate({ to: '/sidebar' })
        }
      } else {
        setAuthMessage(data.message || 'Authentication failed')
      }
    } catch (err) {
      console.log(err)
      setAuthMessage('Error: Authentication failed')
      navigate({ to: '/sidebar' })
    }
  }

  const unAuthenticateUser = () => {
    signOut()
    s(false)
    router.invalidate()
  }

  const [a, s] = useState(isAuthenticated());



  ///////

  {
    !a ? (
      <>
        <p>Hello user!</p>
        <button
          onClick={async () => {
            signOut()
            s(false)
            router.invalidate()
          }}
        >
          Sign out
        </button>
      </>
    ) : (
      <button
        onClick={async () => {
          signIn()
          s(true)
          router.invalidate()
        }}
      >
        Sign in
      </button>
    )
  }

  ///////

  return (
    <div>
      {!isAuthenticated() ? (
        <div className="w-full gap-16 flex flex-col items-center">
          {/* <Navbar /> */}
          <div className="border flex flex-col items-center shadow rounded-3xl mb-16 py-8 px-12 w-[901px] h-auto">
            <section className="flex flex-col text-center items-center gap-6">
              <h1 className="text-5xl">Sign In</h1>
              <h2 className="text-lg font-light text-[#8C8C8C]">
                Join our community today! Create an account to unlock exclusive
                features and <br /> personalized experiences.
              </h2>
            </section>
            <div className="flex flex-col py-8 gap-8 w-full h-auto items-center">
              <Input
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[342px] h-12 border placeholder:text-left border-bordered rounded-full"
                type="str"
                placeholder="Enter your username"
              />
              <PasswordInput
                id="password"
                value={password}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setPassword(e.target.value)
                }
                autoComplete="new-password"
                className="w-[342px] h-12 border placeholder:text-left border-bordered rounded-full"
                placeholder="Enter your password"
              />
            </div>
            <Button
              onClick={authenticateUser}
              className="mt-8 w-[270px] h-12 bg-[#343434] opacity-55 text-white text-lg rounded-full hover:opacity-80 hover:bg-[#343434]"
            >
              Login
            </Button>
            <p>{authMessage}</p>
            <div className="flex justify-center w-full items-center gap-4 my-8 whitespace-nowrap">
              <Separator className="w-[20%] bg-gray-300 h-[1px]" />
              <p className="text-[#B3B3B3] text-xs">Or Continue With</p>
              <Separator className="w-[20%] bg-gray-300 h-[1px]" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="88"
                  height="88"
                  rx="44"
                  fill="url(#paint0_linear_5_122)"
                  fill-opacity="0.05"
                />
                <rect
                  x="12"
                  y="12"
                  width="64"
                  height="64"
                  rx="32"
                  fill="url(#paint1_linear_5_122)"
                  fill-opacity="0.1"
                />
                <rect
                  x="12.5"
                  y="12.5"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="url(#paint2_linear_5_122)"
                  stroke-opacity="0.2"
                />
                <path
                  d="M53.8055 42.0415H53V42H44V46H49.6515C48.827 48.3285 46.6115 50 44 50C40.6865 50 38 47.3135 38 44C38 40.6865 40.6865 38 44 38C45.5295 38 46.921 38.577 47.9805 39.5195L50.809 36.691C49.023 35.0265 46.634 34 44 34C38.4775 34 34 38.4775 34 44C34 49.5225 38.4775 54 44 54C49.5225 54 54 49.5225 54 44C54 43.3295 53.931 42.675 53.8055 42.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M35.153 39.3455L38.4385 41.755C39.3275 39.554 41.4805 38 44 38C45.5295 38 46.921 38.577 47.9805 39.5195L50.809 36.691C49.023 35.0265 46.634 34 44 34C40.159 34 36.828 36.1685 35.153 39.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M44 54C46.583 54 48.93 53.0115 50.7045 51.404L47.6095 48.785C46.572 49.5745 45.3038 50.0014 44 50C41.399 50 39.1905 48.3415 38.3585 46.027L35.0975 48.5395C36.7525 51.778 40.1135 54 44 54Z"
                  fill="#4CAF50"
                />
                <path
                  d="M53.8055 42.0415H53V42H44V46H49.6515C49.2571 47.1082 48.5467 48.0766 47.608 48.7855L47.6095 48.7845L50.7045 51.4035C50.4855 51.6025 54 49 54 44C54 43.3295 53.931 42.675 53.8055 42.0415Z"
                  fill="#1976D2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_122"
                    x1="44"
                    y1="0"
                    x2="44"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="1" stop-color="#979797" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5_122"
                    x1="44"
                    y1="-30.3784"
                    x2="44"
                    y2="177.189"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="0.467671" stop-color="#9B9B9B" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_5_122"
                    x1="44"
                    y1="-99.1351"
                    x2="44"
                    y2="133.946"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CAFF33" />
                    <stop
                      offset="0.716291"
                      stop-color="#CAFF33"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="88"
                  height="88"
                  rx="44"
                  fill="url(#paint0_linear_5_129)"
                  fill-opacity="0.05"
                />
                <rect
                  x="12"
                  y="12"
                  width="64"
                  height="64"
                  rx="32"
                  fill="url(#paint1_linear_5_129)"
                  fill-opacity="0.1"
                />
                <rect
                  x="12.5"
                  y="12.5"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="url(#paint2_linear_5_129)"
                  stroke-opacity="0.2"
                />
                <path
                  d="M49.05 52.28C48.07 53.23 47 53.08 45.97 52.63C44.88 52.17 43.88 52.15 42.73 52.63C41.29 53.25 40.53 53.07 39.67 52.28C34.79 47.25 35.51 39.59 41.05 39.31C42.4 39.38 43.34 40.05 44.13 40.11C45.31 39.87 46.44 39.18 47.7 39.27C49.21 39.39 50.35 39.99 51.1 41.07C47.98 42.94 48.72 47.05 51.58 48.2C51.01 49.7 50.27 51.19 49.04 52.29L49.05 52.28ZM44.03 39.25C43.88 37.02 45.69 35.18 47.77 35C48.06 37.58 45.43 39.5 44.03 39.25Z"
                  fill="black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_129"
                    x1="44"
                    y1="0"
                    x2="44"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="1" stop-color="#979797" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5_129"
                    x1="44"
                    y1="-30.3784"
                    x2="44"
                    y2="177.189"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="0.467671" stop-color="#9B9B9B" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_5_129"
                    x1="44"
                    y1="-99.1351"
                    x2="44"
                    y2="133.946"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CAFF33" />
                    <stop
                      offset="0.716291"
                      stop-color="#CAFF33"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="88"
                  height="88"
                  rx="44"
                  fill="url(#paint0_linear_5_133)"
                  fill-opacity="0.05"
                />
                <rect
                  x="12"
                  y="12"
                  width="64"
                  height="64"
                  rx="32"
                  fill="url(#paint1_linear_5_133)"
                  fill-opacity="0.1"
                />
                <rect
                  x="12.5"
                  y="12.5"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="url(#paint2_linear_5_133)"
                  stroke-opacity="0.2"
                />
                <path
                  d="M46.613 37.9528V42.0605L48.05 42.9643C48.1019 42.9754 48.1556 42.9754 48.2075 42.9643L54.386 38.7988C54.3815 38.5966 54.3075 38.4021 54.1765 38.2481C54.0455 38.094 53.8655 37.9897 53.6667 37.9528H46.613Z"
                  fill="#0072C6"
                />
                <path
                  d="M46.613 43.5927L47.9232 44.4927C47.9845 44.5303 48.055 44.5501 48.1269 44.5501C48.1987 44.5501 48.2692 44.5303 48.3305 44.4927C48.1055 44.6285 54.3852 40.4592 54.3852 40.4592V48.0087C54.4016 48.1617 54.3844 48.3164 54.3347 48.462C54.285 48.6076 54.2041 48.7407 54.0977 48.8517C53.9913 48.9628 53.8618 49.0493 53.7185 49.1051C53.5751 49.161 53.4213 49.1848 53.2677 49.175H46.6122L46.613 43.5927ZM39.83 41.699C39.6123 41.698 39.3984 41.7559 39.2109 41.8665C39.0234 41.9772 38.8694 42.1364 38.765 42.3275C38.48 42.834 38.3433 43.4104 38.3705 43.991C38.3409 44.5703 38.4778 45.146 38.765 45.65C38.8689 45.8332 39.0191 45.9858 39.2007 46.0926C39.3823 46.1993 39.5887 46.2564 39.7993 46.2581C40.01 46.2598 40.2173 46.206 40.4005 46.1021C40.5838 45.9983 40.7365 45.848 40.8432 45.6665C41.1279 45.165 41.262 44.5922 41.2295 44.0165C41.262 43.4228 41.1323 42.8314 40.8545 42.3057C40.7549 42.1211 40.6069 41.9671 40.4264 41.8602C40.2459 41.7533 40.0397 41.6975 39.83 41.699Z"
                  fill="#0072C6"
                />
                <path
                  d="M33.6147 35.8663V51.9365L45.8397 54.5V33.5L33.6147 35.8663ZM41.7957 46.6182C41.5671 46.9407 41.263 47.2023 40.9101 47.3802C40.5571 47.5581 40.1659 47.647 39.7707 47.639C39.3855 47.6458 39.0043 47.5595 38.6596 47.3874C38.3149 47.2153 38.0168 46.9625 37.7907 46.6505C37.2547 45.902 36.9865 44.9947 37.0295 44.075C36.984 43.1102 37.257 42.1573 37.8065 41.363C38.0382 41.0346 38.3471 40.7682 38.706 40.5872C39.0648 40.4062 39.4627 40.3161 39.8645 40.325C40.2469 40.3176 40.6253 40.404 40.9666 40.5767C41.3078 40.7495 41.6015 41.0032 41.822 41.3157C42.3527 42.0805 42.6163 42.999 42.572 43.9288C42.6189 44.8866 42.3458 45.8328 41.7957 46.6182Z"
                  fill="#0072C6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_133"
                    x1="44"
                    y1="0"
                    x2="44"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="1" stop-color="#979797" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5_133"
                    x1="44"
                    y1="-30.3784"
                    x2="44"
                    y2="177.189"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="0.467671" stop-color="#9B9B9B" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_5_133"
                    x1="44"
                    y1="-99.1351"
                    x2="44"
                    y2="133.946"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CAFF33" />
                    <stop
                      offset="0.716291"
                      stop-color="#CAFF33"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full gap-16 flex flex-col items-center">
          {/* <Navbar /> */}
          <div className="border flex flex-col items-center shadow rounded-3xl mb-16 py-8 px-12 w-[901px] h-auto">
            <section className="flex flex-col text-center items-center gap-6">
              <h1 className="text-5xl">Sign In</h1>
              <h2 className="text-lg font-light text-[#8C8C8C]">
                Join our community today! Create an account to unlock exclusive
                features and <br /> personalized experiences.
              </h2>
            </section>
            <div className="flex flex-col py-8 gap-8 w-full h-auto items-center">
              {/* <Input
                id="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[342px] h-12 border placeholder:text-left border-bordered rounded-full"
                type="str"
                placeholder="Enter your username"
              />
              <PasswordInput
                id="password"
                value={password}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setPassword(e.target.value)
                }
                autoComplete="new-password"
                className="w-[342px] h-12 border placeholder:text-left border-bordered rounded-full"
                placeholder="Enter your password"
              /> */}
            </div>
            <Button
              onClick={unAuthenticateUser}
              className="mt-8 w-[270px] h-12 bg-[#343434] opacity-55 text-white text-lg rounded-full hover:opacity-80 hover:bg-[#343434]"
            >
              Logout
            </Button>
            {/* <p>{authMessage}</p> */}
            <div className="flex justify-center w-full items-center gap-4 my-8 whitespace-nowrap">
              <Separator className="w-[20%] bg-gray-300 h-[1px]" />
              <p className="text-[#B3B3B3] text-xs">Or Continue With</p>
              <Separator className="w-[20%] bg-gray-300 h-[1px]" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="88"
                  height="88"
                  rx="44"
                  fill="url(#paint0_linear_5_122)"
                  fill-opacity="0.05"
                />
                <rect
                  x="12"
                  y="12"
                  width="64"
                  height="64"
                  rx="32"
                  fill="url(#paint1_linear_5_122)"
                  fill-opacity="0.1"
                />
                <rect
                  x="12.5"
                  y="12.5"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="url(#paint2_linear_5_122)"
                  stroke-opacity="0.2"
                />
                <path
                  d="M53.8055 42.0415H53V42H44V46H49.6515C48.827 48.3285 46.6115 50 44 50C40.6865 50 38 47.3135 38 44C38 40.6865 40.6865 38 44 38C45.5295 38 46.921 38.577 47.9805 39.5195L50.809 36.691C49.023 35.0265 46.634 34 44 34C38.4775 34 34 38.4775 34 44C34 49.5225 38.4775 54 44 54C49.5225 54 54 49.5225 54 44C54 43.3295 53.931 42.675 53.8055 42.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M35.153 39.3455L38.4385 41.755C39.3275 39.554 41.4805 38 44 38C45.5295 38 46.921 38.577 47.9805 39.5195L50.809 36.691C49.023 35.0265 46.634 34 44 34C40.159 34 36.828 36.1685 35.153 39.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M44 54C46.583 54 48.93 53.0115 50.7045 51.404L47.6095 48.785C46.572 49.5745 45.3038 50.0014 44 50C41.399 50 39.1905 48.3415 38.3585 46.027L35.0975 48.5395C36.7525 51.778 40.1135 54 44 54Z"
                  fill="#4CAF50"
                />
                <path
                  d="M53.8055 42.0415H53V42H44V46H49.6515C49.2571 47.1082 48.5467 48.0766 47.608 48.7855L47.6095 48.7845L50.7045 51.4035C50.4855 51.6025 54 49 54 44C54 43.3295 53.931 42.675 53.8055 42.0415Z"
                  fill="#1976D2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_122"
                    x1="44"
                    y1="0"
                    x2="44"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="1" stop-color="#979797" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5_122"
                    x1="44"
                    y1="-30.3784"
                    x2="44"
                    y2="177.189"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="0.467671" stop-color="#9B9B9B" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_5_122"
                    x1="44"
                    y1="-99.1351"
                    x2="44"
                    y2="133.946"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CAFF33" />
                    <stop
                      offset="0.716291"
                      stop-color="#CAFF33"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="88"
                  height="88"
                  rx="44"
                  fill="url(#paint0_linear_5_129)"
                  fill-opacity="0.05"
                />
                <rect
                  x="12"
                  y="12"
                  width="64"
                  height="64"
                  rx="32"
                  fill="url(#paint1_linear_5_129)"
                  fill-opacity="0.1"
                />
                <rect
                  x="12.5"
                  y="12.5"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="url(#paint2_linear_5_129)"
                  stroke-opacity="0.2"
                />
                <path
                  d="M49.05 52.28C48.07 53.23 47 53.08 45.97 52.63C44.88 52.17 43.88 52.15 42.73 52.63C41.29 53.25 40.53 53.07 39.67 52.28C34.79 47.25 35.51 39.59 41.05 39.31C42.4 39.38 43.34 40.05 44.13 40.11C45.31 39.87 46.44 39.18 47.7 39.27C49.21 39.39 50.35 39.99 51.1 41.07C47.98 42.94 48.72 47.05 51.58 48.2C51.01 49.7 50.27 51.19 49.04 52.29L49.05 52.28ZM44.03 39.25C43.88 37.02 45.69 35.18 47.77 35C48.06 37.58 45.43 39.5 44.03 39.25Z"
                  fill="black"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_129"
                    x1="44"
                    y1="0"
                    x2="44"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="1" stop-color="#979797" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5_129"
                    x1="44"
                    y1="-30.3784"
                    x2="44"
                    y2="177.189"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="0.467671" stop-color="#9B9B9B" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_5_129"
                    x1="44"
                    y1="-99.1351"
                    x2="44"
                    y2="133.946"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CAFF33" />
                    <stop
                      offset="0.716291"
                      stop-color="#CAFF33"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="88"
                  height="88"
                  rx="44"
                  fill="url(#paint0_linear_5_133)"
                  fill-opacity="0.05"
                />
                <rect
                  x="12"
                  y="12"
                  width="64"
                  height="64"
                  rx="32"
                  fill="url(#paint1_linear_5_133)"
                  fill-opacity="0.1"
                />
                <rect
                  x="12.5"
                  y="12.5"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="url(#paint2_linear_5_133)"
                  stroke-opacity="0.2"
                />
                <path
                  d="M46.613 37.9528V42.0605L48.05 42.9643C48.1019 42.9754 48.1556 42.9754 48.2075 42.9643L54.386 38.7988C54.3815 38.5966 54.3075 38.4021 54.1765 38.2481C54.0455 38.094 53.8655 37.9897 53.6667 37.9528H46.613Z"
                  fill="#0072C6"
                />
                <path
                  d="M46.613 43.5927L47.9232 44.4927C47.9845 44.5303 48.055 44.5501 48.1269 44.5501C48.1987 44.5501 48.2692 44.5303 48.3305 44.4927C48.1055 44.6285 54.3852 40.4592 54.3852 40.4592V48.0087C54.4016 48.1617 54.3844 48.3164 54.3347 48.462C54.285 48.6076 54.2041 48.7407 54.0977 48.8517C53.9913 48.9628 53.8618 49.0493 53.7185 49.1051C53.5751 49.161 53.4213 49.1848 53.2677 49.175H46.6122L46.613 43.5927ZM39.83 41.699C39.6123 41.698 39.3984 41.7559 39.2109 41.8665C39.0234 41.9772 38.8694 42.1364 38.765 42.3275C38.48 42.834 38.3433 43.4104 38.3705 43.991C38.3409 44.5703 38.4778 45.146 38.765 45.65C38.8689 45.8332 39.0191 45.9858 39.2007 46.0926C39.3823 46.1993 39.5887 46.2564 39.7993 46.2581C40.01 46.2598 40.2173 46.206 40.4005 46.1021C40.5838 45.9983 40.7365 45.848 40.8432 45.6665C41.1279 45.165 41.262 44.5922 41.2295 44.0165C41.262 43.4228 41.1323 42.8314 40.8545 42.3057C40.7549 42.1211 40.6069 41.9671 40.4264 41.8602C40.2459 41.7533 40.0397 41.6975 39.83 41.699Z"
                  fill="#0072C6"
                />
                <path
                  d="M33.6147 35.8663V51.9365L45.8397 54.5V33.5L33.6147 35.8663ZM41.7957 46.6182C41.5671 46.9407 41.263 47.2023 40.9101 47.3802C40.5571 47.5581 40.1659 47.647 39.7707 47.639C39.3855 47.6458 39.0043 47.5595 38.6596 47.3874C38.3149 47.2153 38.0168 46.9625 37.7907 46.6505C37.2547 45.902 36.9865 44.9947 37.0295 44.075C36.984 43.1102 37.257 42.1573 37.8065 41.363C38.0382 41.0346 38.3471 40.7682 38.706 40.5872C39.0648 40.4062 39.4627 40.3161 39.8645 40.325C40.2469 40.3176 40.6253 40.404 40.9666 40.5767C41.3078 40.7495 41.6015 41.0032 41.822 41.3157C42.3527 42.0805 42.6163 42.999 42.572 43.9288C42.6189 44.8866 42.3458 45.8328 41.7957 46.6182Z"
                  fill="#0072C6"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_133"
                    x1="44"
                    y1="0"
                    x2="44"
                    y2="88"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="1" stop-color="#979797" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_5_133"
                    x1="44"
                    y1="-30.3784"
                    x2="44"
                    y2="177.189"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#979797" />
                    <stop offset="0.467671" stop-color="#9B9B9B" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_5_133"
                    x1="44"
                    y1="-99.1351"
                    x2="44"
                    y2="133.946"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CAFF33" />
                    <stop
                      offset="0.716291"
                      stop-color="#CAFF33"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const Route = createFileRoute('/login')({
  component: Login,
})
