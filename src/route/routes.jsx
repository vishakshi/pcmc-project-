import { GoogleOAuthProvider } from "@react-oauth/google"
import AdminLogin from "../pages/admin/admin-login"
import Competition from "../pages/admin/competitions"
import Sidebar from "../pages/admin/sidebar"
import Users from "../pages/admin/users"
import UserLogin from "../pages/user/user-login"

export const adminRoutes = [
    {
        path:'/dashboard',
        element:<Sidebar><Users/></Sidebar>,
    },
    {
        path:'/competition',
        element:<Sidebar><Competition/></Sidebar>,
    },
]

export const userRoutes = [
    {
        path:'/dashboard',
        element:<div>User Dashboard</div>,
    },
]
