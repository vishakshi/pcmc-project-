import { GoogleOAuthProvider } from "@react-oauth/google"
import AdminLogin from "../pages/admin/admin-login"
import UserLogin from "../pages/user/user-login"
import UserSignUp from "../pages/user/user-signup"
import LandingPage from "../pages/landing"
import ResetPassword from "../pages/user/reset-password"

export const publicRoutes = [
    {
        path:'/',
        element:<LandingPage/>
    },
    {
        path:'/*',
        element:<div>404 Page Not Found</div>
    },
    {
        path:'/reset-password/:token',
        element:<ResetPassword/>
    }
]

export const authRoutes = [
    {
        path:'/user-login',
        element:<GoogleOAuthProvider clientId='628932087895-3derv1ft2t9lq3uvie425s9ulmgni5a4.apps.googleusercontent.com'><UserLogin /></GoogleOAuthProvider>
    },
    {
        path:'/admin-login',
        element:<AdminLogin/>
    },
    {
        path:'/user-signup',
        element:<GoogleOAuthProvider clientId='796675710892-5kj36ctqkt2cbkr3a1ikajb35koecb24.apps.googleusercontent.com'><UserSignUp /></GoogleOAuthProvider>
    }
]