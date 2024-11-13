import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example-folder-1/child1')({
  component: Water,
})

function Water() {
  return <div className="p-2">Hello from child1!</div>
}
