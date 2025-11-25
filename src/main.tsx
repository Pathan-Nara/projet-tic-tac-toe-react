import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './route/home'
import Versus from './route/versus'
import Layout from './components/Layout'


const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/versus/:vs', element: <Versus /> },
    ]
  },
])

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router} />

)
