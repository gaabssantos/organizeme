import { IoAddSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import { useBoards } from '../../context/useBoards';
import { useModal } from '../../context/useModal';
import { useUserLogged } from '../../context/useUserLogged';
import SkeletonBoard from '../SkeletonBoard/skeleton-board.component';
import {
  Board,
  BoardColor,
  BoardText,
  Container,
  SideItem,
} from './sidebar.styles';

const Sidebar = () => {
  const isUserLogged = useUserLogged();
  const modal = useModal();
  const boards = useBoards();
  const navigate = useNavigate();

  return (
    <Container>
      <SideItem>
        <span>Seus boards</span>
        <IoAddSharp onClick={() => modal?.openModal('board')} />
      </SideItem>
      {isUserLogged?.isUserLogged() && (
        <>
          {boards?.boards &&
            boards?.boards.length > 0 &&
            boards?.boards.map((board) =>
              board.name !== '' ? (
                <Board
                  key={board.id}
                  onClick={() => navigate(`/board/${board.id}`)}
                >
                  <BoardColor $color={board.color} />
                  <BoardText>{board.name}</BoardText>
                </Board>
              ) : (
                <>
                  <SkeletonBoard width={100} />
                  <SkeletonBoard width={100} />
                  <SkeletonBoard width={100} />
                  <SkeletonBoard width={100} />
                  <SkeletonBoard width={100} />
                  <SkeletonBoard width={100} />
                </>
              ),
            )}
        </>
      )}
    </Container>
  );
};

export default Sidebar;
