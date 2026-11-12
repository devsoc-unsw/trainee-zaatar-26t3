import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed")({
  beforeLoad: ({ location }) => {
    const isSignedIn = true; // TODO: replace with real auth check
    const hasAccount = true; // TODO: has the user finished account onboarding?
    if (!isSignedIn) {
      throw redirect({
        to: "/sign-in",
        search: { redirect: location.href },
      });
    }

    if (hasAccount !== true && location.pathname !== "/onboarding") {
      throw redirect({ to: "/onboarding" });
    }
  },
});
