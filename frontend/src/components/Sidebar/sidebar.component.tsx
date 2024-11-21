import { IoAddSharp } from 'react-icons/io5';

import {
  Board,
  BoardColor,
  BoardText,
  Container,
  SideItem,
} from './sidebar.styles';

const Sidebar = () => {
  return (
    <Container>
      <SideItem>
        <span>Seus boards</span>
        <IoAddSharp />
      </SideItem>
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
    </Container>
  );
};

export default Sidebar;
