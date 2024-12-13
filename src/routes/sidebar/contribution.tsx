import { createFileRoute } from '@tanstack/react-router'
import { Contribution } from '@/components/dashboard/main-content/contributions/contribution-request'

export const Route = createFileRoute('/sidebar/contribution')({
  component: Contribution,
})
