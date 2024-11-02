import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Homepage from './Pages/Homepage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <Homepage/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
