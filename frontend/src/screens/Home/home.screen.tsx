import { useParams } from 'react-router-dom';

import Board from '../../components/Board/board.component';
import { Flex } from '../../components/global.component';
import Header from '../../components/Header/header.component';
import Modal from '../../components/Modal/modal.component';
import Sidebar from '../../components/Sidebar/sidebar.component';

const Home = () => {
  const params = useParams();

  return (
    <div>
      <Header />
      <Modal />
      <Flex>
        <Sidebar />
        <Board currentId={params.id} />
      </Flex>
    </div>
  );
};

export default Home;
