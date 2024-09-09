import { SigninForm } from "@/components/customui/auth/signin";
import { AuthLayout } from "@/components/customui/auth/layout";
import { useState } from "react";


export const SigninPage = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = (email: string, password: string) => {
    setCredentials({ email, password });
  };

  return (
    <AuthLayout
      route="/auth/signup"
      routeText={<h6>Not a Member yet? <span className="underline font-semibold">JOIN NOW</span></h6>}
    >
      <SigninForm onLogin={handleLogin} />
    </AuthLayout>
  );
};
