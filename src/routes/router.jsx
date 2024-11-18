import { createBrowserRouter, Navigate } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import CategoryNews from "../pages/CategoryNews";


const router =createBrowserRouter([
    {
        path:"/",
       element: <Homelayout></Homelayout>,
       children:[
        {
            path:'',
            element: <Navigate to={'/category/01'}></Navigate>

        },
        {
            path:"/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        },
       ],
    },
    {
        path:'/news',
        element: <h2>News Layout</h2> 
    },
    {
        path: '/auth',
        element: <h2>Login</h2>

    },
    {
        path: '*',
        element: <h2>Error</h2>

    }
])

export default router;