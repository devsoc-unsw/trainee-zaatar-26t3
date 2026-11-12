import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authed/cohorts/$cohortId/_member/settings",
)({
  component: Settings,
});

function Settings() {
  return <div>Hello "/_authed/cohorts/$cohortId/settings"!</div>;
}
