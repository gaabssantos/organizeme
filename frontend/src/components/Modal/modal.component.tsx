import ReactModal from 'react-modal';

import { useModal } from '../../context/useModal';

const Modal = () => {
  const modal = useModal();

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '2px solid #000',
      backgroundColor: '#282e33',
      color: '#ffffff',
      width: '30%',
      textAlign: 'center' as const,
    },

    overlay: {
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
  };

  return (
    <ReactModal
      isOpen={modal?.modalIsOpen as boolean}
      onRequestClose={modal?.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 style={{ lineHeight: '3rem' }}>Board</h2>
      <span>Criar um novo board</span>
      <form>
        <input
          type="text"
          placeholder="Digite o nome do board"
          style={{
            width: '80%',
            padding: '0.5rem',
            margin: '0.5rem 0',
          }}
        />
        <input type="color" style={{ width: '80%', margin: '0.5rem 0' }} />
      </form>
    </ReactModal>
  );
};

export default Modal;
