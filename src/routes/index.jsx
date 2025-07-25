import Layout from '../presentation/components/Layout/Layout'
import Home from '../presentation/pages/Home'
import NotFound from '../presentation/pages/NotFound'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
