import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './assets/Layouts/Root.jsx';

import Login from './assets/Components/Login/Login.jsx';
import Home from './assets/Components/Home/Home.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[{
      index:true,
      Component:Home
    },
    {
      path:'login',
      Component:Login,
    }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
