import Sidebar from '@/components/dashboard/sidebar/sidebar'
import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/sidebar')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet />
    </div>
  );
}
