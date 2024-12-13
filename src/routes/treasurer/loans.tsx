import { createFileRoute } from '@tanstack/react-router'
import { Loan } from '@/components/treasurer-dashboard/main-content/loans'

export const Route = createFileRoute('/treasurer/loans')({
  component: Loan,
})
