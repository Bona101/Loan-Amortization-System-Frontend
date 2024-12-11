import { createFileRoute } from "@tanstack/react-router";
import { LoanRequest } from "@/components/dashboard/main-content/loan-request/loan-request";

export const Route = createFileRoute("/sidebar/loan-request")({
  component: LoanRequest,
});
