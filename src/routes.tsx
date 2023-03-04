import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./screens/home";
import Auth from "./screens/auth";
import Verify from "./screens/verify";

  export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
      path: '/auth',
      element: <Auth />
  },
    {
      path: '/verify',
      element: <Verify />
  }
  ]); 