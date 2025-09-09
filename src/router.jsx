import { createBrowserRouter } from "react-router";
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/register";
import OurWorks from "./pages/OurWorks";
import Designers from "./pages/Designers";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import MyAccount from "./pages/MyAccount";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
import DesignerPage from "./pages/DesignerPage";
import StartProject from "./pages/StartProject";
import ArticlePage from "./pages/ArticlePage";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
              path: "/",
              element: <Home />
            },
            {
              path: "/login",
              element: <Login />
            },
            {
              path: "/register",
              element: <Register />
            },
            {
              path: "/myaccount",
              element: <MyAccount />
            },
            {
              path: "/dashboard",
              element: <Dashboard />
            },
            {
              path: "/notifications",
              element: <Notifications />
            },
            {
              path: "/ourworks",
              element: <OurWorks />
            },
            {
              path: "/designers",
              element: <Designers />
            },
            {
              path: "/pricing",
              element: <Pricing />
            },
            {
              path: "/aboutus",
              element: <AboutUs />
            },
            {
              path: "/contact",
              element: <Contact />
            },
            {
              path: "/blog",
              element: <Blog />
            },
            {
              path: "/blog/:id",
              element: <ArticlePage />
            },
            {
              path: "/designers/:id",
              element: <DesignerPage />
            },
            {
              path: "/start",
              element: <StartProject />
            }
        ]
    }
])