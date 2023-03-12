import Login from "@/component/Auth/Login";
import React from "react";
import { useSession } from "next-auth/react";

function SignInPage() {
  const { data, status } = useSession();

  console.log("data...", data);
  console.log("status...", status);
  return <Login />;
}

export default SignInPage;
