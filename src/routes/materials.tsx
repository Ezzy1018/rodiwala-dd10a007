import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/materials")({
  beforeLoad: () => {
    throw redirect({ to: "/buy-construction-material", replace: true });
  },
  component: () => null,
});
