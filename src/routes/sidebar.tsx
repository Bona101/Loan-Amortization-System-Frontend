import Sidebar from '@/components/dashboard/sidebar/sidebar'
import { Outlet } from '@tanstack/react-router'
import { createFileRoute, redirect } from "@tanstack/react-router";
import { getLogIn } from "@/logi";

export const Route = createFileRoute("/sidebar")({
  component: RouteComponent,
  beforeLoad: () => {
    // const { isLogged } = context.authentication
    if (!getLogIn()) {
      throw redirect({
        to: "/website/login",
      });
    }
  },
});

function RouteComponent() {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  );
}
