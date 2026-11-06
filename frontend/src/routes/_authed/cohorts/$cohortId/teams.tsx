import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/cohorts/$cohortId/teams')({
  component: Teams,
})

function Teams() {
  return <div>Hello "/_authed/cohorts/$cohortId/teams"!</div>
}
