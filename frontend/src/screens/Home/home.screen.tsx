import Board from '../../components/Board/board.component';
import { Flex } from '../../components/global.component';
import Header from '../../components/Header/header.component';
import Modal from '../../components/Modal/modal.component';
import Sidebar from '../../components/Sidebar/sidebar.component';

const Home = () => {
  return (
    <div>
      <Header />
      <Modal />
      <Flex>
        <Sidebar />
        <Board />
      </Flex>
    </div>
  );
};

export default Home;
