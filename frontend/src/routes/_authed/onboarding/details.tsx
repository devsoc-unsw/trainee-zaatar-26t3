import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/onboarding/details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/onboarding/details"!</div>
}
