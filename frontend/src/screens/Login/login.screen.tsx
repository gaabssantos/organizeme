import { Link } from 'react-router-dom';

import { Divisor, LoginRegisterBox } from '../../components/global.component';
import Header from '../../components/Header/header.component';

const Login = () => {
  return (
    <div>
      <Header />
      <LoginRegisterBox>
        <h2>Logar em OrganizeMe</h2>
        <form>
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />
          <button>Login</button>
          <Divisor />
          <Link to={'/register'}>Registrar uma conta</Link>
        </form>
      </LoginRegisterBox>
    </div>
  );
};

export default Login;
