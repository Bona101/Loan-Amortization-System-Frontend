import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/webiste/navbar.tsx'

export const Route = createFileRoute('/website/')({
  component: Navbar,
})
