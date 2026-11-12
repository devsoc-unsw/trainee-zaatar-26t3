import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/onboarding')({
  component: IdentityOnboarding,
});

function IdentityOnboarding() {
  return <div>Hello "/_authed/onboarding"!</div>;
}
