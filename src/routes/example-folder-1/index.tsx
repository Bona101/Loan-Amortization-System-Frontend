import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example-folder-1/')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /runna/!'
}
