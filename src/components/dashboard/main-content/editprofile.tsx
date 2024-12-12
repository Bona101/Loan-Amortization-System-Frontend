import { FormField } from "@/components/Form/formfield.tsx";
import { useAuth1 } from "@/AuthContent";

export function EditProfile() {
  const {user} = useAuth1();
  return (
    <div className="w-full gap-16 flex flex-col items-center m-[40px] flex-grow">
      <div className="flex flex-col items-center rounded-3xl mb-16 py-8 px-12 w-[901px] h-auto">
        <section className="flex px-6 w-full justify-between my-6 items-center gap-6">
          <h1 className="text-5xl">View Profile</h1>
          <div className="relative w-[150px] h-[150px] rounded-full bg-[#C4C4C4]">
            <button className="absolute bottom-0 right-0">
              <svg
                width="50"
                height="48"
                viewBox="0 0 50 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.41537"
                  y="0.59744"
                  width="47.4407"
                  height="45.8577"
                  rx="20.6904"
                  fill="#F5F5FF"
                />
                <rect
                  x="1.41537"
                  y="0.59744"
                  width="47.4407"
                  height="45.8577"
                  rx="20.6904"
                  stroke="white"
                  stroke-width="1.18231"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2898 15.0646C12.5304 15.0646 11.104 16.491 11.104 18.2505V30.9938C11.104 32.7533 12.5304 34.1797 14.2898 34.1797H33.4049C35.1644 34.1797 36.5907 32.7533 36.5907 30.9938V18.2505C36.5907 16.491 35.1644 15.0646 33.4049 15.0646H30.8789C30.4564 15.0646 30.0512 14.8968 29.7525 14.5981L27.9663 12.8119C27.3689 12.2144 26.5585 11.8788 25.7136 11.8788H21.9811C21.1362 11.8788 20.3259 12.2144 19.7284 12.8119L17.9422 14.5981C17.6435 14.8968 17.2383 15.0646 16.8159 15.0646H14.2898ZM23.8474 29.4009C26.4866 29.4009 28.6261 27.2614 28.6261 24.6221C28.6261 21.9829 26.4866 19.8434 23.8474 19.8434C21.2081 19.8434 19.0686 21.9829 19.0686 24.6221C19.0686 27.2614 21.2081 29.4009 23.8474 29.4009Z"
                  fill="#0A0A0A"
                />
              </svg>
            </button>
          </div>
        </section>
        <div className="grid mt-8 grid-cols-2 gap-y-4 grid-rows-6 w-full justify-items-center items-center">
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Full Name</h3>
            <FormField
              id="fname"
              className="w-[342px] h-12 border border-bordered rounded-full"
              type="text"
              value = {user.Name}
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Administration</h3>
            <FormField
              id="lname"
              className="w-[342px] h-12 border border-bordered rounded-full"
              type="text"
              value = {user.Role}
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Phone Number</h3>
            <FormField
              id="mname"
              className="w-[342px] h-12 border border-bordered rounded-full"
              type="text"
              value = {user.Phone}
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Address</h3>
            <FormField
              id="gender"
              className="w-[342px] justify-between h-12 border border-bordered rounded-full"
              value = {user.Address}
            />
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-semibold">Email</h3>
            <FormField
              id="email"
              className="w-[342px] h-12 border border-bordered rounded-full"
              type="email"
              value = {user.Username}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
