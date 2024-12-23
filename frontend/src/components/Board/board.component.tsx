/* eslint-disable react-hooks/exhaustive-deps */
import { useFormik } from 'formik';
import { withZodSchema } from 'formik-validator-zod';
import { useEffect, useState } from 'react';
import { IoAddSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { useBoards } from '../../context/useBoards';
import { useCards } from '../../context/useCard';
import { useModal } from '../../context/useModal';
import { useUserLogged } from '../../context/useUserLogged';
import { useBoardIndexId } from '../../hooks/useBoard';
import { useCardCreate, useCardIndex } from '../../hooks/useCard';
import { useListIndex } from '../../hooks/useList';
import { themes } from '../../styles/themes.style';
import SkeletonCard from '../SkeletonCard/skeleton-card.component';
import {
  BoardHeader,
  BoardLists,
  Card,
  CardInput,
  Container,
  List,
} from './board.styles';

type BoardProps = {
  currentId: string | undefined;
};

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

interface ICard {
  id: string;
  name: string;
  list_id: string;
}

const Board = ({ currentId }: BoardProps) => {
  const isUserLogged = useUserLogged();
  const [board, setBoard] = useState<IBoard>({
    id: '',
    id_user: '',
    name: '',
    color: '#000000',
  });

  const cardContext = useCards();

  const [list, setList] = useState<IList[]>([]);
  const [isInputShow, setIsInputShow] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ListFormSchema = z.object({
    name: z
      .string()
      .trim()
      .min(5, { message: 'O nome deve ter, no mínimo, 5 caracteres.' }),
  });

  type ListFormSchemaType = z.infer<typeof ListFormSchema>;

  const fetchCards = async () => {
    const cards = await useCardIndex();

    if (!cards.result) return false;

    cardContext?.setCards(cards.result as ICard[]);
  };

  const handleAddCard = async (listId: string) => {
    setIsInputShow(listId);

    if (isInputShow !== '') {
      formik.validateForm().then(async (errors) => {
        if (Object.keys(errors).length === 0) {
          formik.submitForm();
          setIsInputShow('');
          await useCardCreate({
            name: formik.values.name,
            list_id: listId,
          });

          formik.resetForm();

          fetchCards();
        }
      });
    }
  };

  const formik = useFormik<ListFormSchemaType>({
    initialValues: {
      name: '',
    },
    onSubmit: async () => handleAddCard,
    validate: withZodSchema(ListFormSchema),
    validateOnChange: false,
    validateOnBlur: false,
  });

  const navigate = useNavigate();
  const boardsArr = useBoards();
  const modal = useModal();

  useEffect(() => {
    const fetchBoardsId = async () => {
      const boards = await useBoardIndexId(currentId as string);

      if (!boards.result) return false;

      setBoard(boards.result);
    };

    const fetchLists = async () => {
      const boardId = location.pathname.split('/')[2];

      const lists = await useListIndex(boardId);

      if (!lists.result) return false;

      setList(lists.result as IList[]);
    };

    fetchBoardsId();
    fetchLists();
    fetchCards();
  }, [boardsArr?.boards, currentId, navigate]);

  return (
    <Container $color={board.name !== '' ? board.color : themes.black}>
      {isUserLogged?.isUserLogged() ? (
        board.name !== '' ? (
          <>
            <BoardHeader>
              <h1>{board?.name}</h1>
              <IoAddSharp onClick={() => modal?.openModal('list')} />
            </BoardHeader>
            <BoardLists>
              {list.map((lst) => (
                <List key={lst.id}>
                  <h3>{lst.name}</h3>
                  {cardContext?.cards
                    .filter((cardFilter) => cardFilter.list_id === lst.id)
                    .map((cardMap) => (
                      <Card key={cardMap.id}>{cardMap.name}</Card>
                    ))}
                  {isInputShow === lst.id && (
                    <form>
                      <div>
                        <CardInput
                          type="text"
                          {...formik.getFieldProps('name')}
                          autoFocus
                        />
                      </div>
                    </form>
                  )}
                  <button onClick={() => handleAddCard(lst.id)}>
                    <IoAddSharp />
                    Add card
                  </button>
                </List>
              ))}
            </BoardLists>
          </>
        ) : (
          <>
            <SkeletonCard />
          </>
        )
      ) : (
        <div>
          <h2>Você não está logado!</h2>
          <p>Logue-se para ter acesso aos seus boards.</p>
        </div>
      )}
    </Container>
  );
};

export default Board;
