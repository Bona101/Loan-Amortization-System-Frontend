import { Custom404 } from '@/components/custom-404/custom-404'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/treasurer/')({
  component: Custom404,
})
