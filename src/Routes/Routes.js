import AuthenticationPage from "../Layouts/AuthenticationPage";
import Main from "../Layouts/Main";
import ArticlePage from "../Pages/ArticlePage/ArticlePage";
import LogIn from "../Pages/Authetication/LogIn";
import SignUp from "../Pages/Authetication/SignUp";
import Homepage from "../Pages/Homepage/Homepage";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Homepage/>
    },
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/article/:id',
                element:<ArticlePage/>
            },
        ]
    },
    {
        path: '/user',
        element: <AuthenticationPage/>,
        // errorElement:<ErrorPage/>,
        children:[
            {
                path:'/user/signup',
                element:<SignUp/>
            },
            {
                path:'/user/login',
                element:<LogIn/>
            }
        ]
    },
])