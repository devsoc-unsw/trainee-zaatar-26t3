import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/cohorts/$cohortId/profile')({
  component: Profile,
});

function Profile() {
  return <div>Hello "/_authed/cohorts/$cohortId/profile"!</div>;
}
