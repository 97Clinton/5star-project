import { SigninForm } from "@/components/customui/auth/signin";
import { AuthLayout } from "@/components/customui/auth/layout";
export const SigninPage = () => {
  return (
    <AuthLayout
      route="/auth/signup"
      routeText={<h6>Not a Member yet? <span className="underline font-semibold">JOIN NOW</span></h6>}
    >
      <SigninForm />
    </AuthLayout>
  );
};
