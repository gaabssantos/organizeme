import { IoAddSharp } from 'react-icons/io5';

import { useUserLogged } from '../../context/useUserLogged';
import { BoardHeader, BoardLists, Card, Container, List } from './board.styles';

const Board = () => {
  const isUserLogged = useUserLogged();

  return (
    <Container>
      {isUserLogged?.isUserLogged() ? (
        <>
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
