import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

export const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center m-10 w-full">
      <p className="font-bold text-[150px] mb-[-20px]">404</p>
      <p className="text-[30px]">Page does not exist</p>
      <Link to="/">
        <Button className="mt-10 bg-green-200 rounded-xl p-7 text-[20px]">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};
