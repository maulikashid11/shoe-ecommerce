import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ProductContainer from './components/ProductContainer.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/',
            element: <ProductContainer />
          },
          {
            path: '/:shoe',
            element: <ProductDetails />
          }
        ]
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
