import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/cohorts/$cohortId/onboarding")({
  component: ApplicationOnboarding,
});

function ApplicationOnboarding() {
  return <div>Hello "/_authed/cohorts/$cohortId/onboarding"!</div>;
}
