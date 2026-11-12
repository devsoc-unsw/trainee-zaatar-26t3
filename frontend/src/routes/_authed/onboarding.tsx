import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/onboarding')({
  component: ApplicationOnboarding,
});

function ApplicationOnboarding() {
  return <div>Hello "/_authed/onboarding"!</div>;
}
