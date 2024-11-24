import { Container } from './card-message.styles';

type CardMessageType = {
  typeMessage: 'error' | 'success' | '';
  headerMessage: string | boolean;
  message: string | boolean;
};

const CardMessage = ({
  typeMessage,
  headerMessage,
  message,
}: CardMessageType) => {
  return (
    <Container $typeMessage={typeMessage}>
      <h2>{headerMessage}</h2>
      {typeMessage === 'error' && <p>{message}</p>}
      {typeMessage === 'success' && <p>{message}</p>}
    </Container>
  );
};

export default CardMessage;
