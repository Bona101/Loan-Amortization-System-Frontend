import { TreasurerSidebar } from "@/components/treasurer-dashboard/sidebar/sidebar";
import { useAuth } from "@/logi";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/treasurer")({
  // beforeLoad: () => {
  //   const { loggedIn } = useAuth();
  //   if (!loggedIn) {
  //     throw redirect({ to: "/website/login" });
  //   }
  // },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex">
      <TreasurerSidebar />
      <Outlet />
    </div>
  );
}
