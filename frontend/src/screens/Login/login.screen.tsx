import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import CardMessage from '../../components/CardMessage/card-message.component';
import { Divisor, LoginRegisterBox } from '../../components/global.component';
import Header from '../../components/Header/header.component';
import { useCardMessage } from '../../context/useCardMessage';
import useSession from '../../hooks/useSession';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type ResponseType = {
  errorCode: string;
};

type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

const Login = () => {
  const { message, setCardMessage } = useCardMessage();
  const navigate = useNavigate();

  const formik = useFormik<LoginFormSchemaType>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const response = await useSession(values);

      if (response.error) {
        const data = response.error.response?.data as ResponseType;

        setCardMessage({
          typeMessage: 'error',
          headerMessage:
            (data.errorCode === 'email_password_incorrect' &&
              'Dados incorretos') ||
            (data.errorCode === 'account_not_actived' && 'Conta não ativada'),
          message:
            (data.errorCode === 'email_password_incorrect' &&
              'Este e-mail ou senha estão incorretos.') ||
            (data.errorCode === 'account_not_actived' &&
              'Esta conta ainda não foi ativada pelo e-mail.'),
        });
      } else {
        let count = 3;

        setCardMessage({
          typeMessage: 'success',
          headerMessage: 'Sucesso!',
          message: `Você está logado! Redirecionando em: ${count}`,
        });

        const interval = setInterval(() => {
          count = count - 1;

          setCardMessage({
            typeMessage: 'success',
            headerMessage: 'Sucesso!',
            message: `Você está logado! Redirecionando em: ${count}`,
          });

          if (count === 0) {
            navigate('/');

            setCardMessage({ typeMessage: '', headerMessage: '', message: '' });
            clearInterval(interval);
          }
        }, 1000);
      }

      console.log(response);
    },
    validate: withZodSchema(LoginFormSchema),
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div>
      <Header />

      {message.typeMessage !== '' &&
        message.headerMessage !== '' &&
        message.message !== '' && (
          <CardMessage
            typeMessage={message.typeMessage}
            headerMessage={message.headerMessage}
            message={message.message}
          />
        )}

      <LoginRegisterBox>
        <h2>Logar em OrganizeMe</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            {...formik.getFieldProps('email')}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            {...formik.getFieldProps('password')}
          />
          <button type="submit">Login</button>
          <Divisor />
          <Link to={'/register'}>Registrar uma conta</Link>
        </form>
      </LoginRegisterBox>
    </div>
  );
};

export default Login;
