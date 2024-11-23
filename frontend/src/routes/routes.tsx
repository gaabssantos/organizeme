import { Route, Routes } from 'react-router-dom';

import Home from '../screens/Home/home.screen';
import Login from '../screens/Login/login.screen';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
