import { type Metadata } from "next";
import { Login } from "@/components/login";

export const metadata: Metadata = {
  title: "login",
  description: "login fields",
};

export default function LoginPage() {
  return <Login />;
}
