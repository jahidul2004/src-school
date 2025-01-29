import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../home/home/Home";
import Login from "../login/Login";
import About from "../pages/aboutUs/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"about",
                element: <About></About>
            }
        ]
    },
]);

export default router;
