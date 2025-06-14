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
import SeexData from "../Page/sexData";
import MyLikedItems from "../Page/MyLikedItems";
import AllArtifact from "../Page/AllArtifact";
import PriveteRoute from "../Authantication/PriveteRoute";



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
            loader: ()=> fetch(import.meta.env.VITE_api),
            hydrateFallbackElement: <h1>Looding.....</h1>,
            element: <AllArtifact></AllArtifact>
        },
        {
          path: '/details/:id',
          loader: ({params})=> fetch(`${import.meta.env.VITE_api}/${params.id}`),
          element: <ViewDatils></ViewDatils>
        },
        {
          path: '/update/:id',
          loader: ({params})=> fetch(`${import.meta.env.VITE_api}/${params.id}`),
          element: <Updae></Updae>
        },
        {
          path: '/data',
          element: <SeexData></SeexData>
        },
        {
          path: '/liked-items/:email',
          loader: ({params})=>fetch(`http://localhost:4000/liked-artifacts?email=${params.email}`),
          element: <MyLikedItems></MyLikedItems>,
          hydrateFallbackElement: <h4>Looding.....</h4>
        },
        {
          path: '/my-artifact/:email',
          loader: ({params})=> fetch(`${import.meta.env.VITE_api}?email=${params.email}`),
          element: <PriveteRoute><MyArtifactsPage></MyArtifactsPage></PriveteRoute>
        },
        // {
        //   path: '/liked-artifact',
        //   element: <MyLikedItems></MyLikedItems>,
        // },
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


