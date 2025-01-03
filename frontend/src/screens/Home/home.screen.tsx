import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { z } from 'zod';

import Board from '../../components/Board/board.component';
import { Flex } from '../../components/global.component';
import Header from '../../components/Header/header.component';
import Modal from '../../components/Modal/modal.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import { useBoards } from '../../context/useBoards';
import { useLists } from '../../context/useList';
import { useModal } from '../../context/useModal';
import { useBoardCreate, useBoardIndex } from '../../hooks/useBoard';
import { useListCreate, useListIndex } from '../../hooks/useList';
import { themes } from '../../styles/themes.style';

interface IBoard {
  id: string;
  id_user: string;
  name: string;
  color: string;
}

interface IList {
  id: string;
  board_id: string;
  name: string;
}

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, []);

  const params = useParams();
  const modal = useModal();
  const location = useLocation();

  const boardsContext = useBoards();
  const listsContext = useLists();

  const fetchBoards = async () => {
    const boards = await useBoardIndex();

    if (!boards.result) return false;

    boardsContext?.setBoards(boards.result as unknown as IBoard[]);
  };

  const fetchLists = async () => {
    const boardId = location.pathname.split('/')[2];

    const lists = await useListIndex(boardId);

    if (!lists.result) return false;

    listsContext?.setLists(lists.result as unknown as IList[]);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const BoardFormSchema = z.object({
    name: z
      .string()
      .trim()
      .min(5, { message: 'O nome deve ter, no mínimo, 5 caracteres.' }),
    color: z
      .string()
      .refine(
        (value) =>
          /^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/.test(value ?? ''),
        'A cor deve ser uma cor Hex.',
      ),
  });

  type BoardFormSchemaType = z.infer<typeof BoardFormSchema>;

  const boardFormik = useFormik<BoardFormSchemaType>({
    initialValues: {
      name: '',
      color: '#000000',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: async (values: any) => {
      await useBoardCreate(values);

      fetchBoards();

      modal?.closeModal();
      boardFormik.resetForm();
    },
    validate: withZodSchema(BoardFormSchema),
    validateOnChange: false,
    validateOnBlur: false,
  });

  // ----------------------------------------------------

  const ListFormSchema = z.object({
    name: z
      .string()
      .trim()
      .min(5, { message: 'O nome deve ter, no mínimo, 5 caracteres.' }),
  });

  type ListFormSchemaType = z.infer<typeof ListFormSchema>;

  const listFormik = useFormik<ListFormSchemaType>({
    initialValues: {
      name: '',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: async (values: any) => {
      const boardId = location.pathname.split('/')[2];

      await useListCreate({
        board_id: boardId,
        name: values.name,
      });

      fetchLists();

      modal?.closeModal();
      listFormik.resetForm();
    },
    validate: withZodSchema(ListFormSchema),
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <div>
      <Header />
      <Modal
        title="Criar um novo board"
        formik={boardFormik}
        isOpen={modal?.activeModal === 'board'}
        closeModal={() => modal?.closeModal()}
      >
        <input
          type="text"
          placeholder="Digite o nome do board"
          style={{
            width: '80%',
            padding: '0.5rem',
            margin: '0.5rem 0',
          }}
          {...boardFormik.getFieldProps('name')}
        />
        <p style={{ color: `${themes.error}` }}>{boardFormik.errors.name}</p>
        <input
          type="color"
          {...boardFormik.getFieldProps('color')}
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
      </Modal>
      <Modal
        title="Criar uma nova lista"
        formik={listFormik}
        isOpen={modal?.activeModal === 'list'}
        closeModal={() => modal?.closeModal()}
      >
        <input
          type="text"
          placeholder="Digite o nome da lista"
          style={{
            width: '80%',
            padding: '0.5rem',
            margin: '0.5rem 0',
          }}
          {...listFormik.getFieldProps('name')}
        />
        <p style={{ color: `${themes.error}` }}>{listFormik.errors.name}</p>
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
          Criar lista
        </button>
      </Modal>
      <Flex>
        <Sidebar />
        <Board currentId={params.boardId} />
      </Flex>
    </div>
  );
};

export default Home;
