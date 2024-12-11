import { createFileRoute } from '@tanstack/react-router'
import { Payments } from "@/components/dashboard/main-content/payments/payments";

export const Route = createFileRoute('/sidebar/payments')({
  component: Payments,
})

