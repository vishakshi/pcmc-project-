import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { adminRoutes, userRoutes } from "./route/routes";
import { authRoutes, publicRoutes } from "./route/publicRoutes";
import ProtectedRoute from "./route/ProtectedRoute";
import AuthRoute from "./route/AuthRoute";
import ApiManager from "./apiManager/apiManager";
import { getDecodedToken } from "./utiils/utility";
import { useAuthContext } from "./context/authContext";

const App = () => {
  const userType = sessionStorage.getItem("@userType");
  const {setUserDetails} = useAuthContext();
  useEffect(()=>{
    const userType = sessionStorage.getItem("@userType");
    if(userType && userType === "user"){
      const userId = getDecodedToken();
      (async ()=>{
        const response = await ApiManager.getUserDetails(userId?._id);
        if(response.data.status){
          setUserDetails(response.data?.data)
          console.log(response.data)
        }
      })();
    }
  },[])
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
