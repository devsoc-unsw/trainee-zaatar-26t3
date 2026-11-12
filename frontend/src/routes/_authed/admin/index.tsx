import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/admin/")({
  component: Admin,
});

function Admin() {
  // admin dashboard with all the cohorts
  return <div>Hello "/_authed/admin/"!</div>;
}
