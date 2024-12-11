import {TreasurerSidebar} from '@/components/treasurer-dashboard/sidebar/sidebar'
import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/treasurer')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex">
      <TreasurerSidebar />
      <Outlet />
    </div>
  )
}
