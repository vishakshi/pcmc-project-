import { GoogleOAuthProvider } from "@react-oauth/google"
import AdminLogin from "../pages/admin/admin-login"
import UserLogin from "../pages/user/user-login"

export const publicRoutes = [
    {
        path:'/',
        element:<div>Landing page</div>
    },
    {
        path:'/user-login',
        element:<GoogleOAuthProvider clientId='628932087895-3derv1ft2t9lq3uvie425s9ulmgni5a4.apps.googleusercontent.com'><UserLogin /></GoogleOAuthProvider>
    },
    {
        path:'/admin-login',
        element:<AdminLogin/>
    }
]