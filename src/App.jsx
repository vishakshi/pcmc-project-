import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { adminRoutes, userRoutes } from "./route/routes";
import { authRoutes, publicRoutes } from "./route/publicRoutes";
import ProtectedRoute from "./route/ProtectedRoute";
import AuthRoute from "./route/AuthRoute";
import ApiManager from "./apiManager/apiManager";

const App = () => {
  const userType = sessionStorage.getItem("@userType");
  // useEffect(()=>{
  //   const userType = sessionStorage.getItem("@userType");
  //   if(userType && userType === "user"){
  //     ;(async ()=>{
  //       const response = await ApiManager.getUserDetails();
        
  //     })();
  //   }
  // },[])
  return (
    <Routes>
      {publicRoutes.map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
        {authRoutes.map(({element,path})=>(
          <Route key={path} element={<AuthRoute />} >
          <Route path={path} element={element} />
          </Route>
        ))
        }
      {userType === "admin" &&
        adminRoutes.map(({ element, path }) => (
          <Route key={path} element={<ProtectedRoute />} >
            <Route exact path={path} element={element} />
          </Route>
        ))}
      {userType === "user" &&
        userRoutes.map(({ element, path }) => (
          <Route key={path} element={<ProtectedRoute />}>
            <Route path={path} element={element} />
          </Route>
        ))}
    </Routes>
  );
};

export default App;
