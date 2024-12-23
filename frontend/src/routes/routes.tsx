import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useBoards } from '../context/useBoards';
import { useBoardIndex } from '../hooks/useBoard';
import Home from '../screens/Home/home.screen';
import Login from '../screens/Login/login.screen';
import Register from '../screens/Register/register.screen';
import Verification from '../screens/Verification/verification.screen';

export const AppRoutes = () => {
  const boards = useBoards();

  interface IBoard {
    color: string;
    id: string;
    id_user: string;
    name: string;
  }

  useEffect(() => {
    const fetchBoards = async () => {
      const response = await useBoardIndex();

      boards?.setBoards(response.result as IBoard[]);
    };

    fetchBoards();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/verification/:code" element={<Verification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/board/:boardId" element={<Home />} />
    </Routes>
  );
};
