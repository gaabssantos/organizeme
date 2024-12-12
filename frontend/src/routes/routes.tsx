import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import RedirectFunction from '../components/RedirectFunction/redirect-function.component';
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
  }, [boards]);

  return (
    <Routes>
      <Route path="/board/:id" element={<Home />} />
      <Route path="/verification/:code" element={<Verification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={<RedirectFunction to={`/board/${boards?.boards[0].id}`} />}
      />
    </Routes>
  );
};
