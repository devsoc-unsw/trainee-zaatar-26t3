import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authed/admin/cohorts/$cohortId/members",
)({
  component: AdminMembers,
});

function AdminMembers() {
  return <div>Hello "/_authed/admin/cohorts/$cohortId/members"!</div>;
}
