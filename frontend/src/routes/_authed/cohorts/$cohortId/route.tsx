import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/cohorts/$cohortId")({
  component: CohortLayout,
});

function CohortLayout() {
  return (
    <div className="flex">
      {/* TODO: nav bar for non-admin users */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
