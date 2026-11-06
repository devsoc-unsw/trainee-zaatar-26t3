import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/cohorts/$cohortId/members')({
  component: Members,
})

function Members() {
  return <div>Hello "/_authed/cohorts/$cohortId/members"!</div>
}
