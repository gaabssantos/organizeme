import { IoAddSharp } from 'react-icons/io5';

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

  return (
    <Container>
      <SideItem>
        <span>Seus boards</span>
        <IoAddSharp onClick={modal?.openModal} />
      </SideItem>
      {isUserLogged?.isUserLogged() && (
        <>
          <Board className="active">
            <BoardColor />
            <BoardText>My Board</BoardText>
          </Board>
          <Board>
            <BoardColor />
            <BoardText>My Board</BoardText>
          </Board>
          <Board>
            <BoardColor />
            <BoardText>My Board</BoardText>
          </Board>
        </>
      )}
    </Container>
  );
};

export default Sidebar;
