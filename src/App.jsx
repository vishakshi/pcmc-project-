import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes,adminRoutes,userRoutes } from './route/routes'

const App = () => {
  const userType = sessionStorage.getItem('@userType');
  console.log(userType);
  return (
    <Routes>
      {publicRoutes.map(({element,path})=>(
        <Route key={path} path={path} element={element}/>
      ))}
      {userType === "admin" && adminRoutes.map(({element,path})=>(
        <Route key={path} path={path} element={element}/>
      ))}
      {userType === "user" && userRoutes.map(({element,path})=>(
        <Route key={path} path={path} element={element}/>
      ))}
    </Routes>
  )
}

export default App
