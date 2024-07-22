import {ResetPasswordForm} from "@/components/customui/auth/resetpassword"
import { AuthLayout } from "@/components/customui/auth/layout"
export const ResetPage =()=>{
    return(
        <AuthLayout
            route="/auth/signup"
            routeText={<h6>Not a Member yet? <span className="underline font-semibold">JOIN NOW</span></h6>}
        >
            <ResetPasswordForm/>
        </AuthLayout>
    )
}