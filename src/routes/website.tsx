import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/website")({
  beforeLoad: () => {
    // const { isLogged } = context.authentication
    if (!true) {
      throw redirect({
        to: "/website/login",
      });
    }
  },
});
