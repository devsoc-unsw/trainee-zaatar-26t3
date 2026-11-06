import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/admin/cohorts/$cohortId/teams')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/admin/cohorts/$cohortId/teams"!</div>
}
