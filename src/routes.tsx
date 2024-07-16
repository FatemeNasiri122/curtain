import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";

const Login = React.lazy(() => import("./pages/Login"));
const Shop = React.lazy(() => import("./pages/Shop"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Login /> },
            { path: "shop", element: <Shop /> },
            { path: "*", element: <NotFound /> },
        ]
    }
];

const CreateRouter = createBrowserRouter(routes);

export default CreateRouter;

