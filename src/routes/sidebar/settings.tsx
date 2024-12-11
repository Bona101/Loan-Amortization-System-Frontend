import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "@/components/dashboard/main-content/settings";

export const Route = createFileRoute("/sidebar/settings")({
  component: Settings,
});
