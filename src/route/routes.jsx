import { GoogleOAuthProvider } from "@react-oauth/google"
import AdminLogin from "../pages/admin/admin-login"
import Competition from "../pages/admin/competitions"
import Sidebar from "../pages/admin/sidebar"
import Users from "../pages/admin/users"
import UserLogin from "../pages/user/user-login"
import UserDashboard from "../pages/user/dashboard"
import CompetetionDetail from "../pages/admin/competetionDetail"
import Submission from "../pages/admin/submission"
import UserSidebar from "../pages/user/sidebar"
import UserCompetition from "../pages/user/competetion"
import Setting from "../pages/user/setting"
import Result from "../pages/user/result"
import Feedback from "../pages/admin/feedbacks"

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
    {
        path:'/feedback',
        element:<Sidebar><Feedback/></Sidebar>,
    },
]

export const userRoutes = [
    {
        path:'/dashboard',
        element:<UserSidebar><UserCompetition/></UserSidebar>,
    },
    {
        path:'/setting',
        element:<UserSidebar><Setting/></UserSidebar>,
    },
    {
        path:'/result',
        element:<UserSidebar><Result/></UserSidebar>,
    },
]
