import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed")({
  beforeLoad: () => {
    const isAuthenticated = true; // TODO: replace with real auth check
    if (!isAuthenticated) {
      throw redirect({ to: "/sign-in" });
    }
  },
});
