import Main from "../Layouts/Main";
import ArticlePage from "../Pages/ArticlePage/ArticlePage";
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
    }
])