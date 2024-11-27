import { createFileRoute } from '@tanstack/react-router'

const Payments = () => {
  return <div>
    Payments
  </div>
}

export const Route = createFileRoute('/sidebar/payments')({
  component: Payments,
})

