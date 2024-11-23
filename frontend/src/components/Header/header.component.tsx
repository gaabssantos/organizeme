import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { Container, Menu } from './header.styles';

const Header = () => {
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
          <button>
            <Link to={'/login'}>Login</Link>
          </button>
          <button id="btn-register">Cadastrar</button>
        </div>
      </Menu>
    </Container>
  );
};

export default Header;
