import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed/admin/cohorts/$cohortId')({
  component: AdminNavBar,
})

function AdminNavBar() {
  return <div>Hello "/_authed/admin/cohorts/$cohortId"!</div>
}
