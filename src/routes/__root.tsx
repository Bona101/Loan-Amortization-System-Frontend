import { Footer } from "@/components";
import { Header } from "@/components/header/header";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth";
const activeProps = {
  style: {
    fontWeight: "bold",
  },
};

type RouterContext = {
  authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />

      <TanStackRouterDevtools />
    </>
  ),
});
