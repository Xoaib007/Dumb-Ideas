import Main from "../Layouts/Main";
import ArticlePage from "../Pages/ArticlePage/ArticlePage";
import Homepage from "../Pages/Homepage/Homepage";


const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element:<Homepage/>
            },
            {
                path: '/article/:id',
                element:<ArticlePage/>
            },
        ]
    }
])