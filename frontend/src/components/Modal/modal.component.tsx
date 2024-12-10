import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import ReactModal from 'react-modal';
import { z } from 'zod';

import { useModal } from '../../context/useModal';
import { useBoardCreate } from '../../hooks/useBoard';
import { themes } from '../../styles/themes.style';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BoardFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: 'O nome deve ter, no mínimo, 5 caracteres.' }),
  color: z
    .string()
    .refine(
      (value) => /^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/.test(value ?? ''),
      'A cor deve ser uma cor Hex.',
    ),
});

type BoardFormSchemaType = z.infer<typeof BoardFormSchema>;

const Modal = () => {
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

  const modal = useModal();

  const formik = useFormik<BoardFormSchemaType>({
    initialValues: {
      name: '',
      color: '#000000',
    },
    onSubmit: async (values) => {
      await useBoardCreate(values);

      modal?.closeModal();
      formik.resetForm();
    },
    validate: withZodSchema(BoardFormSchema),
    validateOnChange: false,
    validateOnBlur: false,
  });

  ReactModal.setAppElement('#root');

  return (
    <ReactModal
      isOpen={modal?.modalIsOpen as boolean}
      onRequestClose={modal?.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2 style={{ lineHeight: '3rem' }}>Board</h2>
      <span>Criar um novo board</span>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome do board"
          style={{
            width: '80%',
            padding: '0.5rem',
            margin: '0.5rem 0',
          }}
          {...formik.getFieldProps('name')}
        />
        <p style={{ color: `${themes.error}` }}>{formik.errors.name}</p>
        <input
          type="color"
          {...formik.getFieldProps('color')}
          style={{ width: '80%', margin: '0.5rem 0' }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.5rem 0',
            background: `${themes.primaryColor}`,
            border: 0,
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Criar board
        </button>
      </form>
    </ReactModal>
  );
};

export default Modal;
