import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/cohorts/$cohortId/onboarding")({
  component: IdentityOnboarding,
});

function IdentityOnboarding() {
  return <div>Hello "/_authed/onboarding/application"!</div>;
}
