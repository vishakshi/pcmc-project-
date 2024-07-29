export const publicRoutes = [
    {
        path:'/',
        element:<div>Landing page</div>
    },
    {
        path:'/user-login',
        element:<GoogleOAuthProvider clientId='796675710892-5kj36ctqkt2cbkr3a1ikajb35koecb24.apps.googleusercontent.com'><UserLogin /></GoogleOAuthProvider>
    },
    {
        path:'/admin-login',
        element:<AdminLogin/>
    }
]