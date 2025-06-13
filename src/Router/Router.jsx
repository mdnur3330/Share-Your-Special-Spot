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



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index: true,
            element: <Home></Home>,
            loader: ()=> fetch(import.meta.env.VITE_api),
            hydrateFallbackElement: <h1>Looding.....</h1>
        },
        {
          path: '/add-artifacts',
          element: <AddArtifacts></AddArtifacts>
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
          path: '/my-artifact/:email',
          loader: ({params})=> fetch(`${import.meta.env.VITE_api}?email=${params.email}`),
          element: <MyArtifactsPage></MyArtifactsPage>
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


