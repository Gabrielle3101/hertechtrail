import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./screens/home";
import Auth from "./screens/auth";
import Verify from "./screens/verify";
import Info from "./screens/info";
import Location from "./screens/location";
import Success from "./screens/success";

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
  },
    {
      path: '/info',
      element: <Info />
  },
    {
      path: '/location',
      element: <Location />
  },
    {
      path: '/success',
      element: <Success />
  }
  ]); 