import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
import ProductPage from './Pages/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>,
      },
      {
        path: "/ourproducts",
        element: <ProductPage/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
