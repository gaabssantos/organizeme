import { useEffect, useState } from 'react';
import { IoAddSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { useBoards } from '../../context/useBoards';
import { useModal } from '../../context/useModal';
import { useUserLogged } from '../../context/useUserLogged';
import { useBoardIndexId } from '../../hooks/useBoard';
import { useListIndex } from '../../hooks/useList';
import { themes } from '../../styles/themes.style';
import SkeletonCard from '../SkeletonCard/skeleton-card.component';
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

interface IList {
  id: string;
  board_id: string;
  name: string;
}

const Board = ({ currentId }: BoardProps) => {
  const isUserLogged = useUserLogged();
  const [board, setBoard] = useState<IBoard>({
    id: '',
    id_user: '',
    name: '',
    color: '#000000',
  });

  const [list, setList] = useState<IList[]>([]);

  const navigate = useNavigate();
  const boardsArr = useBoards();
  const modal = useModal();

  useEffect(() => {
    const fetchBoardsId = async () => {
      const boards = await useBoardIndexId(currentId as string);

      if (!boards.result) return false;

      setBoard(boards.result);
    };

    const fetchLists = async () => {
      const boardId = location.pathname.split('/')[2];

      const lists = await useListIndex(boardId);

      if (!lists.result) return false;

      setList(lists.result as IList[]);
    };

    fetchBoardsId();
    fetchLists();
  }, [boardsArr?.boards, currentId, navigate]);

  return (
    <Container $color={board.name !== '' ? board.color : themes.black}>
      {isUserLogged?.isUserLogged() ? (
        board.name !== '' ? (
          <>
            <BoardHeader>
              <h1>{board?.name}</h1>
              <IoAddSharp onClick={() => modal?.openModal('list')} />
            </BoardHeader>
            <BoardLists>
              {list.map((lst) => (
                <List>
                  <h3>{lst.name}</h3>
                  <Card>Project planning</Card>
                  <Card>Teste</Card>
                  <button>
                    <IoAddSharp />
                    Add card
                  </button>
                </List>
              ))}
            </BoardLists>
          </>
        ) : (
          <>
            <SkeletonCard />
          </>
        )
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
