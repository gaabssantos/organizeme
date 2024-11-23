import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { Container, Menu } from './header.styles';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Menu>
        <div>
          <h1>OrganizeMe</h1>
          <li>
            Recentes
            <IoIosArrowDown />
          </li>
          <li>
            Favoritos
            <IoIosArrowDown />
          </li>
          <button>Criar</button>
        </div>
        <div>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')} id="btn-register">
            Cadastrar
          </button>
        </div>
      </Menu>
    </Container>
  );
};

export default Header;
