import DashboardContent from '@/components/dashboard/main-content/dashboard-content'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/treasurer/')({
  component: DashboardContent,
})
