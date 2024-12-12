import { createFileRoute } from "@tanstack/react-router";
import { Contribution } from "@/components/dashboard/main-content/payments/contribution";

export const Route = createFileRoute("/sidebar/contribution")({
  component: Contribution,
});
