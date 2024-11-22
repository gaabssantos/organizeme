import { IoAddSharp } from 'react-icons/io5';

import { BoardHeader, BoardLists, Card, Container, List } from './board.styles';

const Board = () => {
  return (
    <Container>
      <BoardHeader>
        <h1>My Board</h1>
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
    </Container>
  );
};

export default Board;
