import { createFileRoute } from '@tanstack/react-router'
import { Contribution } from '@/components/treasurer-dashboard/main-content/contributions'

export const Route = createFileRoute('/treasurer/contributions')({
  component: Contribution,
})
