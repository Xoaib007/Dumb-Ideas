import ArticlePage from "../Pages/ArticlePage/ArticlePage";
import LogIn from "../Pages/Authetication/LogIn/LogIn";
import SignUp from "../Pages/Authetication/SignUp/SignUp";
import Homepage from "../Pages/Homepage/Homepage";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Homepage/>
    },
    {
        path: '/article/:id',
        element:<ArticlePage/>
    },
    {
        path:'/user/signup',
        element:<SignUp/>
    },
    {
        path:'/user/login',
        element:<LogIn/>
    }
])