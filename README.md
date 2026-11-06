Welcome to Tangles by team Za'atar!

## Setup

1. Install [Node.js](https://nodejs.org) **20.19+** (check with `node -v`).
2. Install pnpm: `npm install -g pnpm` (check with `pnpm -v`).
3. Make sure you can clone with SSH ([GitHub SSH setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)), or use the HTTPS link from the repo's **Code** button instead.
4. Clone and run:

```bash
git clone git@github.com:devsoc-unsw/trainee-zaatar-26t3.git
cd trainee-zaatar-26t3/frontend
pnpm install
pnpm dev
```

5. Open the URL the terminal prints (usually http://localhost:5173). Press **Ctrl+C** to stop.
6. In VS Code, open the **repo root** (`trainee-zaatar-26t3`) and click **Install** when it suggests the Prettier extension (formats on save).

> ⚠️ Run all `pnpm` commands inside `frontend/`.

## Before you commit

```bash
pnpm format   # formats code + runs ESLint fixes; fix anything it still reports
```

## Add a page

Create a file in `src/routes/` while `pnpm dev` is running. The file name is the URL:

- `routes/about.tsx` → `/about`
- `routes/projects/$id.tsx` → `/projects/123`

Link to it with `<Link to="/about">` from `@tanstack/react-router` (not `<a href>`).

## Rules

- **Use pnpm only.** Never commit a `package-lock.json`.
- **Don't edit `routeTree.gen.ts`.** It's auto-generated.
- **Keep TypeScript on `~6.0.3`.** `typescript-eslint` only supports TS below 6.1, because TS 7 (released July 2026) doesn't have the compiler API it needs yet. Upgrade only once `typescript-eslint` supports it (expected after TS 7.1).
- **Never use `--force`.** Ask on Discord instead.
