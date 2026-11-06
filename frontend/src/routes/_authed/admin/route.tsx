import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/admin")({
  beforeLoad: () => {
    const isAdmin = true; // TODO: replace with real admin check
    if (!isAdmin) {
      throw redirect({ to: "/" });
    }
  },
});