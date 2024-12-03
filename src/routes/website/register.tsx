import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/webiste/navbar.tsx'
import { FormSelect } from '@/components/Form/formselect.tsx'
import { useState } from 'react'
import { FormField } from '@/components/Form/formfield.tsx'
import { DatePicker } from '@/components/ui/datepicker.tsx'
import { Button } from '@/components/ui/button'

export default function Register() {
  const [selectedOption, setSelectedOption] = useState<string>('')
  return (
    <div className="w-full gap-16 flex flex-col items-center">
      <Navbar />
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
              options={['Option 1', 'Option 2', 'Option 3']}
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
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Last Name</h3>
            <FormField
              id="lname"
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Middle Name</h3>
            <FormField
              id="mname"
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Date of Birth</h3>
            <DatePicker className=" w-[342px] h-12 rounded border border-bordered" />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Gender</h3>
            <FormSelect
              id="gender"
              options={['Male', 'Female']}
              selectedOption={selectedOption}
              onOptionSelect={(value) => setSelectedOption(value)}
              className="w-[342px] justify-between h-12 border border-bordered rounded"
              placeholder="Select Gender"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Occupation</h3>
            <FormField
              id="occupation"
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Address</h3>
            <FormField
              id="address"
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Email</h3>
            <FormField
              id="email"
              className="w-[342px] h-12 border border-bordered rounded"
              type="email"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Phone Number</h3>
            <FormField
              id="phone"
              className="w-[342px] h-12 border border-bordered rounded"
              type="number"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Account Number</h3>
            <FormField
              id="accountNo"
              className="w-[342px] h-12 border border-bordered rounded"
              type="number"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Bank Name</h3>
            <FormField
              id="bank"
              className="w-[342px] h-12 border border-bordered rounded"
              type="text"
            />
          </section>
        </div>
        <Button className="mt-8 w-[310px] h-[63px] bg-[#343434] opacity-55 text-white text-lg rounded-full hover:opacity-80 hover:bg-[#343434]">
          Register
        </Button>
      </div>
    </div>
  )
}
export const Route = createFileRoute('/website/register')({
  component: Register,
})
