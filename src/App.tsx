import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// importing defaults layout
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";

// importing pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Churches from './pages/Churches';

import "./scss/App.scss";
import Messages from './pages/Messages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/churches" element={<Churches />} />
            <Route path='/messages' element={<Messages />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App