import {SignupForm} from "@/components/customui/auth/register"
import { AuthLayout } from "@/components/customui/auth/layout"
export const SignupPage =()=>{
    return(
        <AuthLayout
            route="/auth/signin"
            routeText={<h6>Already a Member? <span className="underline font-semibold">LOG IN NOW</span></h6>}
        >
            <SignupForm/>
        </AuthLayout>
    )
}