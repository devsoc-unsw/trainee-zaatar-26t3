import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/admin/cohorts/cohort')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/admin/cohorts/cohort"!</div>
}
