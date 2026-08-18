import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import { RootLayout } from '@/components/layout'
import { ROUTES } from '@/constants'

// Lazy so each page ships as its own chunk instead of one large bundle.
const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const NdtTraining = lazy(() => import('@/pages/NdtTraining'))
const NdtExaminations = lazy(() => import('@/pages/NdtExaminations'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.SERVICES, element: <Services /> },
      { path: ROUTES.NDT_TRAINING, element: <NdtTraining /> },
      { path: ROUTES.NDT_EXAMINATIONS, element: <NdtExaminations /> },
      { path: ROUTES.ABOUT, element: <About /> },
      { path: ROUTES.CONTACT, element: <Contact /> },
      { path: ROUTES.NOT_FOUND, element: <NotFound /> },
    ],
  },
])
