import { Link } from 'react-router-dom';

import { Divisor, LoginRegisterBox } from '../../components/global.component';
import Header from '../../components/Header/header.component';

const Register = () => {
  return (
    <div>
      <Header />
      <LoginRegisterBox>
        <h2>Registre uma conta</h2>
        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />
          <button>Registrar</button>
          <Divisor />
          <Link to={'/login'}>Já tem uma conta? Clique para entrar nela</Link>
        </form>
      </LoginRegisterBox>
    </div>
  );
};

export default Register;
