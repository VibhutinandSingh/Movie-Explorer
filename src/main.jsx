import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layouts/Layout.jsx'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import MovieDetails from './Pages/MovieDetails.jsx'
import NotFound from './Pages/NotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='movie/:id' element={<MovieDetails/>} />
      <Route path='*' element={<NotFound/>} />
    </Route>
  ) 
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
