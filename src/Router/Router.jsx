import {
  createBrowserRouter
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Registration from "../Page/Registration";
import AddArtifacts from "../Page/AddArtifacts";
import ViewDatils from "../Page/ViewDatils";
import MyArtifactsPage from "../Page/MyArtifactsPage";
import Updae from "../Page/Updae";
import MyLikedItems from "../Page/MyLikedItems";
import AllArtifact from "../Page/AllArtifact";
import PriveteRoute from "../Authantication/PriveteRoute";
import Looding from "../Authantication/Looding";
import ErrorPage from "../Page/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            element: <Home></Home>,
        },
        {
          path: '/add-artifacts',
          element: <PriveteRoute><AddArtifacts></AddArtifacts></PriveteRoute>
        },
        {
          path :'/all-artifact',
            loader: ()=> fetch(`${import.meta.env.VITE_api}artifacts/`),
            hydrateFallbackElement: <Looding></Looding>,
            element: <AllArtifact></AllArtifact>
        },
        {
          path: '/details/:id',
          loader: ({params})=> fetch(`${import.meta.env.VITE_api}artifacts/${params.id}`),
          element: <PriveteRoute><ViewDatils></ViewDatils></PriveteRoute>
        },
        {
          path: '/update/:id',
          loader: ({params})=> fetch(`${import.meta.env.VITE_api}artifacts/${params.id}`),
          element: <Updae></Updae>
        },
        {
          path: '/liked-items/:email',
          element: <MyLikedItems></MyLikedItems>
        },
        {
          path: '/my-artifact/:email',
          element: <PriveteRoute><MyArtifactsPage></MyArtifactsPage></PriveteRoute>
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
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>
  }
]);


