import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/onboarding")({
  component: AccountOnboarding,
});

function AccountOnboarding() {
  return <div>Hello "/_authed/onboarding"!</div>;
}
