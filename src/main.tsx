import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { AuthProvider } from "@/logi"; // Import AuthProvider
import { useAuth } from "@/hooks/useAuth";
import { AuthProvider1 } from "./AuthContent";

import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { Custom404 } from "./components/custom-404/custom-404";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <Custom404 />,
  context: { authentication: undefined! },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  const authentication = useAuth();
  root.render(
    <StrictMode>
      <AuthProvider>
        <AuthProvider1>
          <RouterProvider router={router} context={{ authentication }} />
        </AuthProvider1>
      </AuthProvider>
    </StrictMode>
  );
}
