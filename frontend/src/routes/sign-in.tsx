import { createFileRoute, useNavigate } from "@tanstack/react-router";

type SignInSearch = {
  redirect?: string;
};

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
  validateSearch: (search: Record<string, unknown>): SignInSearch => ({
    redirect: typeof search.redirect === "string" ? search.redirect : undefined,
  }),
});

function SignIn() {
  const { redirect } = Route.useSearch();
  const navigate = useNavigate();

  function handleSignIn() {
    // TODO: signIn logic
    navigate({ href: redirect ?? "/" });
  }

  return (
    <div>
      <h1>Hello "/sign-in"!</h1>
      <button onClick={handleSignIn}> Sign in </button>
    </div>
  );
}
