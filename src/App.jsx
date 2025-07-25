import { Routes, Route } from 'react-router-dom'
import routes from './routes'
import { Suspense } from 'react'
import './index.css'

function renderRoutes(routeList) {
  return routeList.map(({ path, element, children, index }, i) => (
    <Route key={i} path={path} element={element} index={index}>
      {children && renderRoutes(children)}
    </Route>
  ))
}

function App() {
  return (
    <Suspense>
      <Routes>{renderRoutes(routes)}</Routes>
    </Suspense>
  )
}

export default App
