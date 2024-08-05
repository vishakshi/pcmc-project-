import { GoogleOAuthProvider } from "@react-oauth/google"
import AdminLogin from "../pages/admin/admin-login"
import Competition from "../pages/admin/competitions"
import Sidebar from "../pages/admin/sidebar"
import Users from "../pages/admin/users"
import UserLogin from "../pages/user/user-login"
import UserDashboard from "../pages/user/dashboard"
import CompetetionDetail from "../pages/admin/competetionDetail"
import Submission from "../pages/admin/submission"

export const adminRoutes = [
    {
        path:'/dashboard',
        element:<Sidebar><Users/></Sidebar>,
    },
    {
        path:'/competition',
        element:<Sidebar><Competition/></Sidebar>,
    },
    {
        path:'/competition/:id',
        element:<Sidebar><CompetetionDetail/></Sidebar>
    },
    {
        path:'/submission',
        element:<Sidebar><Submission/></Sidebar>,
    },
]

export const userRoutes = [
    {
        path:'/dashboard',
        element:<UserDashboard/>,
    },
]
