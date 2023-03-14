import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./screens/home";
import Auth from "./screens/auth";
import Verify from "./screens/verify";
import Info from "./screens/info";
import Location from "./screens/location";
import Success from "./screens/success";
import Email from "./screens/email";
import Status from "./screens/status";
import Lcs from "./screens/lcs";
import Login from "./screens/login";
import Verify2 from "./screens/verify2";
import Welcome from "./screens/welcome";
import Auth2 from "./screens/auth2";
import Select from "./screens/select";
import All from "./screens/all";
import Otp from "./screens/otp";
import Confirm from "./screens/confirm";
import Completed from "./screens/completed";

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
  },
    {
      path: '/email',
      element: <Email />
  },
    {
      path: '/status',
      element: <Status />
  },
    {
      path: '/lcs',
      element: <Lcs />
  },
    {
        path: '/login',
        element: <Login />
    },
    {
      path: '/verify2',
      element: <Verify2 />
  },
    {
      path: '/welcome',
      element: <Welcome />
  },
    {
      path: '/auth2',
      element: <Auth2 />
  },
    {
    path: '/select',
    element: <Select />
  },
    {
      path: '/all',
      element: <All />
  },
    {
      path: '/otp',
      element: <Otp />
  },
    {
      path: '/confirm',
      element: <Confirm />
  },
    {
      path: '/completed',
      element: <Completed />
  }
  ]); 