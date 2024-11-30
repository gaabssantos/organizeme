import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header/header.component';
import useVerification from '../../hooks/useVerification';
import { Container } from './verification.styles';

const Verification = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState<{
    typeMessage: 'error' | 'success' | '';
    headerMessage: string | boolean;
    message: string | boolean;
  }>({
    typeMessage: '',
    headerMessage: '',
    message: '',
  });

  useEffect(() => {
    const fetchVerification = async () => {
      const response = await useVerification(params.code);

      if (response.error) {
        setMessage({
          typeMessage: 'error',
          headerMessage: 'Erro!',
          message: 'Este código está incorreto!',
        });
      } else {
        setMessage({
          typeMessage: 'success',
          headerMessage: 'Sucesso!',
          message: 'Conta verificada! Agora você já pode logar na sua conta.',
        });
      }
    };

    fetchVerification();
  }, [params.code]);

  return (
    <>
      <Header />
      <Container>
        <h1>{message.headerMessage}</h1>
        <p>{message.message}</p>
        {message.typeMessage !== 'error' && (
          <button onClick={() => navigate('/login')}>Logar na conta</button>
        )}
      </Container>
    </>
  );
};

export default Verification;
