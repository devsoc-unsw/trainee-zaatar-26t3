import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/invite/$inviteCode")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authed/invite/$inviteCode"!</div>;
}
