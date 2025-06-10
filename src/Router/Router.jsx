import {
  createBrowserRouter
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Registration from "../Page/Registration";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        }
    ]
  },
]);


