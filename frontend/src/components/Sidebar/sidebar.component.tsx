import { IoAddSharp } from 'react-icons/io5';

import { useBoards } from '../../context/useBoards';
import { useModal } from '../../context/useModal';
import { useUserLogged } from '../../context/useUserLogged';
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

  return (
    <Container>
      <SideItem>
        <span>Seus boards</span>
        <IoAddSharp onClick={modal?.openModal} />
      </SideItem>
      {isUserLogged?.isUserLogged() && (
        <>
          {boards?.boards.map((board) => (
            <Board key={board.id}>
              <BoardColor $color={board.color} />
              <BoardText>{board.name}</BoardText>
            </Board>
          ))}
        </>
      )}
    </Container>
  );
};

export default Sidebar;
