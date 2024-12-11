// import Sidebar from '@/components/dashboard/sidebar/sidebar'
// import { Outlet } from '@tanstack/react-router'
// import { createFileRoute, redirect } from "@tanstack/react-router";
// import { useAuth } from "@/logi";

// export const Route = createFileRoute("/sidebar")({
//   component: RouteComponent,
//   beforeLoad: () => {
//     const { loggedIn } = useAuth();
//     if (!loggedIn) {
//       throw redirect({ to: "/website/login" });
//     }
//   },
// });

// function RouteComponent() {
//   return (
//     <div className='flex'>
//       <Sidebar />
//       <Outlet />
//     </div>
//   );
// }
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { useAuth } from "@/logi";

export const Route = createFileRoute("/sidebar")({
  component: RouteComponent,
});

function RouteComponent() {
  // const { loggedIn } = useAuth();

  // if (!loggedIn) {
  //   throw redirect({ to: "/website/login" });
  // }

  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}