import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/onboarding/application")({
  component: OnboardingApplication,
});

function OnboardingApplication() {
  return <div>Hello "/_authed/onboarding/application"!</div>;
}
