import { createFileRoute, redirect } from "@tanstack/react-router";
import { getLogIn } from "@/logi";

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
