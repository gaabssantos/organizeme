import { useEffect, useState } from 'react';
import { IoAddSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { useBoards } from '../../context/useBoards';
import { useUserLogged } from '../../context/useUserLogged';
import { useBoardIndexId } from '../../hooks/useBoard';
import { BoardHeader, BoardLists, Card, Container, List } from './board.styles';

type BoardProps = {
  currentId: string | undefined;
};

interface IBoard {
  id: string;
  id_user: string;
  name: string;
  color: string;
}

const Board = ({ currentId }: BoardProps) => {
  const isUserLogged = useUserLogged();
  const [board, setBoard] = useState<IBoard>({
    id: '',
    id_user: '',
    name: '',
    color: '#000000',
  });

  const navigate = useNavigate();
  const boardsArr = useBoards();

  useEffect(() => {
    const fetchBoardsId = async () => {
      const boards = await useBoardIndexId(currentId as string);

      if (!boards.result) return false;

      setBoard(boards.result);
    };

    fetchBoardsId();
  }, [boardsArr?.boards, currentId, navigate]);

  return (
    <Container $color={board.color}>
      {isUserLogged?.isUserLogged() ? (
        <>
          <BoardHeader>
            <h1>{board?.name}</h1>
            <IoAddSharp />
          </BoardHeader>
          <BoardLists>
            <List>
              <h3>To do</h3>
              <Card>Project planning</Card>
              <Card>Teste</Card>
              <button>
                <IoAddSharp />
                Add card
              </button>
            </List>
            <List>
              <h3>To do</h3>
              <Card>Project planning</Card>
              <Card>Teste</Card>
              <button>
                <IoAddSharp />
                Add card
              </button>
            </List>
            <List>
              <h3>To do</h3>
              <Card>Project planning</Card>
              <Card>Teste</Card>
              <button>
                <IoAddSharp />
                Add card
              </button>
            </List>
            <List>
              <h3>To do</h3>
              <Card>Project planning</Card>
              <Card>Teste</Card>
              <button>
                <IoAddSharp />
                Add card
              </button>
            </List>
            <List>
              <h3>To do</h3>
              <Card>Project planning</Card>
              <Card>Teste</Card>
              <button>
                <IoAddSharp />
                Add card
              </button>
            </List>
          </BoardLists>
        </>
      ) : (
        <div>
          <h2>Você não está logado!</h2>
          <p>Logue-se para ter acesso aos seus boards.</p>
        </div>
      )}
    </Container>
  );
};

export default Board;
