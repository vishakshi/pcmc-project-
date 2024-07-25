import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes,adminRoutes,userRoutes } from './route/routes'

const App = () => {
  return (
    <Routes>
      {publicRoutes.map(({element,path})=>(
        <Route key={path} path={path} element={element}/>
      ))}
      {adminRoutes.map(({element,path})=>(
        <Route key={path} path={path} element={element}/>
      ))}
      {userRoutes.map(({element,path})=>(
        <Route key={path} path={path} element={element}/>
      ))}
    </Routes>
  )
}

export default App
