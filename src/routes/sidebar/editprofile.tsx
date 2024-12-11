import { createFileRoute } from "@tanstack/react-router";
import { EditProfile } from "@/components/dashboard/main-content/editprofile";

export const Route = createFileRoute("/sidebar/editprofile")({
  component: EditProfile,
});
