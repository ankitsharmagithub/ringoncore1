import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react";
import LoginSignUp from "./component/User/LoginSignUp";
// import '@mui/x-data-grid-pro/dist/index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import { ThemeProviderWrapper } from "./component/admin/ThemeContext";
import DashboardPage from "./component/admin/DashboardPage";
import UsersPage from "./component/admin/UsersPage";
import { useSelector } from "react-redux";
import { loadUser } from "./redux/actions/userAction";
import Login from './component/login/Login'


function App() {
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log('isAuthenticated', )
  const token = useSelector((state) => state.user.user)
   
   const tokenId = localStorage.getItem("token")
   console.log('tokenId', tokenId)
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      {/* <ThemeProviderWrapper>
      <AdminPanel />
    </ThemeProviderWrapper> */}

      <ThemeProviderWrapper>
        <Router>
          <Routes>
            {/* <Route exact path="/login" element={<LoginSignUp />} /> */}
          {tokenId === null ?(<> 
            <Route exact path="/login" element={<Login />} />
             
            </>):(<> 
            {/*  <Route
              element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
            > */}
              <Route exact path="/" element={<DashboardPage />} />
              <Route exact path="/users" element={<UsersPage />} />
            {/* </Route> */}</>)}
           
           
          </Routes>
        </Router>
      </ThemeProviderWrapper>

      {/* <LoginSignUp/> */}
    </>
  );
}

export default App;
