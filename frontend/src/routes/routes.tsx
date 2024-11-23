import { Route, Routes } from 'react-router-dom';

import Home from '../screens/Home/home.screen';
import Login from '../screens/Login/login.screen';
import Register from '../screens/Register/register.screen';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
