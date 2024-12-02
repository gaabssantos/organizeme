import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { Link } from 'react-router-dom';
import z from 'zod';

import CardMessage from '../../components/CardMessage/card-message.component';
import {
  Divisor,
  ErrorMessage,
  LoginRegisterBox,
} from '../../components/global.component';
import Header from '../../components/Header/header.component';
import { useCardMessage } from '../../context/useCardMessage';
import useRegister from '../../hooks/useRegister';

const RegisterFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, { message: 'O nome deve ter, pelo menos, 3 caracteres.' }),
    email: z.string().email({ message: 'Digite um e-mail válido.' }),
    password: z
      .string()
      .trim()
      .min(8, { message: 'A senha deve ter, pelo menos, 8 caracteres.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'A senhas não coincidem',
    path: ['confirmPassword'],
  });

type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

type ResponseType = {
  errCode: string;
};

const Register = () => {
  const { message, setCardMessage } = useCardMessage();

  const formik = useFormik<RegisterFormSchemaType>({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values, actions) => {
      const response = await useRegister(values);

      if (response.error) {
        const data = response.error.response?.data as ResponseType;

        setCardMessage({
          typeMessage: 'error',
          headerMessage: data.errCode === 'email_exists' && 'E-mail já existe',
          message:
            data.errCode === 'email_exists' &&
            'Este e-mail já existe, tente utilizar outro',
        });
      } else {
        setCardMessage({
          typeMessage: 'success',
          headerMessage: 'Conta criada',
          message:
            'Sua conta foi criada com sucesso, agora apenas cheque seu e-mail para verificar ela.',
        });
      }

      actions.resetForm();
    },
    validate: withZodSchema(RegisterFormSchema),
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
        <h2>Registre uma conta</h2>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            {...formik.getFieldProps('name')}
            autoFocus
          />

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

          <input
            type="password"
            placeholder="Confirme sua senha"
            {...formik.getFieldProps('confirmPassword')}
          />

          {!formik.isValid && (
            <ErrorMessage>
              <ul>
                {formik.errors.name && formik.touched.name && (
                  <li>{formik.errors.name}</li>
                )}
                {formik.errors.email && formik.touched.email && (
                  <li>{formik.errors.email}</li>
                )}
                {formik.errors.password && formik.touched.password && (
                  <li>{formik.errors.password}</li>
                )}
                {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword && (
                    <li>{formik.errors.confirmPassword}</li>
                  )}
              </ul>
            </ErrorMessage>
          )}

          <button type="submit">Registrar</button>
          <Divisor />
          <Link to={'/login'}>Já tem uma conta? Clique para entrar nela</Link>
        </form>
      </LoginRegisterBox>
    </div>
  );
};

export default Register;
