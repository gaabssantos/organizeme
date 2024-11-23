import Header from '../../components/Header/header.component';
import { Divisor, LoginBox } from './login.styles';

const Login = () => {
  return (
    <div>
      <Header />
      <LoginBox>
        <h2>Logar em OrganizeMe</h2>
        <form>
          <input type="text" placeholder="Digite seu e-mail" />
          <input type="text" placeholder="Digite sua senha" />
          <button>Login</button>
          <Divisor />
          <a href="#">Registrar uma conta</a>
        </form>
      </LoginBox>
    </div>
  );
};

export default Login;
