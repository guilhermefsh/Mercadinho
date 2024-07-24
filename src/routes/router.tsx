import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts";
import { Home } from "../pages/Home";
import { Error404 } from "../pages/404";
import { PageProduct } from "../pages/PageProduct";



export const Router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/:id",
                element: <PageProduct />
            }
        ]
    }
])