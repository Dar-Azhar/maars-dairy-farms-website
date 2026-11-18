// Old or alternative addresses that must keep working, and where they go. Rules are matched
// against the path WITHOUT a trailing slash; the first match wins. `to: null` answers 410 Gone.
// Every entry here must also be in url-contract.json (pnpm verify:urls checks both).
// This site is one page: the usual page addresses lead to it.
import type { RedirectRule } from "@site/theme/worker";

export const redirects: RedirectRule[] = [
  { from: "/home", to: "/" },
  { from: "/index", to: "/" },
  { from: "/contact", to: "/" },
  { from: "/contact-us", to: "/" },
  { from: "/about", to: "/" },
  { from: "/services", to: "/" },
];
