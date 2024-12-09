import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import { useUserLogged } from '../../context/useUserLogged';
import { Container, Menu } from './header.styles';

const Header = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const isUserLogged = useUserLogged();

  useEffect(() => {
    if (localStorage.getItem('orgazineme:userData')) {
      setUserName(
        JSON.parse(localStorage.getItem('orgazineme:userData') as string).name,
      );
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('orgazineme:userData');

    location.reload();
  };

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

        {!isUserLogged?.isUserLogged() ? (
          <div>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')} id="btn-register">
              Cadastrar
            </button>
          </div>
        ) : (
          <>
            <span>Olá, {userName}!</span>
            <a href="#" onClick={logout}>
              Sair
            </a>
          </>
        )}
      </Menu>
    </Container>
  );
};

export default Header;
