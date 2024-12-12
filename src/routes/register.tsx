import { createFileRoute, redirect } from '@tanstack/react-router'
import { Navbar } from '@/components/webiste/navbar.tsx'
import { FormSelect } from '@/components/Form/formselect.tsx'
import { useState, useEffect } from 'react'
import { FormField } from '@/components/Form/formfield.tsx'
// import { DatePicker } from '@/components/ui/datepicker.tsx'
import { Button } from '@/components/ui/button'
import { useNavigate } from '@tanstack/react-router'
import { getRole } from '@/role'
import { useAuth } from '@/logi'

export default function Register() {
  const navigate = useNavigate()

  const [selectedOption, setSelectedOption] = useState<string>('')
  const [name, setName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  // Effect to update username based on first, middle, and last name
  useEffect(() => {
    setName(`${name}${middleName}${lastName}`)
  }, [name, middleName, lastName])

  //Creating a new user
  const addUser = async () => {
    const userData = {
      name,
      username,
      password,
      role: selectedOption,
      address,
      phone,
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      console.log(userData)
      const data = await response.json()
      // setUsers((prev) => [...prev, data]);
      navigate({ to: '/login' })
    } catch (err) {
      console.log(err)
      navigate({ to: '/login' })
    }
  }

  return (
    <div className="w-full gap-16 flex flex-col items-center">
      {/* <Navbar /> */}
      <div className="border flex flex-col items-center shadow rounded-3xl mb-16 py-8 px-12 w-[901px] h-auto">
        <section className="flex flex-col text-center items-center gap-6">
          <h1 className="text-5xl">Register</h1>
          <h2 className="text-lg font-light text-[#8C8C8C]">
            Join our community today! Create an account to unlock exclusive
            features and <br /> personalized experiences.
          </h2>
        </section>
        <div className="grid mt-8 grid-cols-2 gap-y-4 grid-rows-6 w-full justify-items-center items-center">
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Title</h3>
            <FormSelect
              id="title"
              options={['User', 'Treasurer']}
              selectedOption={selectedOption}
              onOptionSelect={(value) => setSelectedOption(value)}
              className="w-[342px] justify-between h-12 border border-bordered rounded"
              placeholder="Select Title"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">First Name</h3>
            <FormField
              id="fname"
              onChange={(e) => setName(e.target.value)}
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Last Name</h3>
            <FormField
              id="lname"
              onChange={(e) => setLastName(e.target.value)}
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Middle Name</h3>
            <FormField
              id="mname"
              onChange={(e) => setMiddleName(e.target.value)}
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Email</h3>
            <FormField
              id="email"
              onChange={(e) => setUsername(e.target.value)}
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Address</h3>
            <FormField
              id="address"
              className="w-[342px] h-12 border border-bordered rounded"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Password</h3>
            <div className="relative">
              <FormField
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-[342px] h-12 border border-bordered rounded pr-10" // Added padding for icon
                type={showPassword ? 'text' : 'password'} // Toggle type based on `showPassword`
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'} {/* Toggle text */}
              </button>
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Phone Number</h3>
            <FormField
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              className="w-[342px] h-12 border border-bordered rounded"
              type="number"
            />
          </section>
        </div>
        <Button
          onClick={addUser}
          className="mt-8 w-[310px] h-[63px] bg-[#343434] opacity-55 text-white text-lg rounded-full hover:opacity-80 hover:bg-[#343434]"
        >
          Register
        </Button>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/register')({
  component: Register,
  beforeLoad: async ({ context }) => {
    const { isLogged } = context.authentication
    if (!isLogged()) {
      throw redirect({ to: '/login' })
    }
    // later will add condition to check if treasurer or not
  },
})
