import { createFileRoute } from '@tanstack/react-router'
import { Transactions } from '@/components/treasurer-dashboard/main-content/transactions'

export const Route = createFileRoute('/treasurer/all-transactions')({
  component: Transactions,
})
