import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/onboarding/identity")({
  component: OnboardingIdentity,
});

function OnboardingIdentity() {
  return <div>Hello "/_authed/onboarding/identity"!</div>;
}
