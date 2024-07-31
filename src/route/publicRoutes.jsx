import { GoogleOAuthProvider } from "@react-oauth/google"
import AdminLogin from "../pages/admin/admin-login"
import UserLogin from "../pages/user/user-login"
import UserSignUp from "../pages/user/user-signup"

export const publicRoutes = [
    {
        path:'/',
        element:<div>Welcome to Landing page</div>
    },
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