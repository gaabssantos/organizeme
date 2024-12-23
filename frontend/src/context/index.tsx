import { PropsWithChildren } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { themes } from '../styles/themes.style';
import { BoardsProvider } from './useBoards';
import { CardsProvider } from './useCard';
import { CardMessageProvider } from './useCardMessage';
import { ListsProvider } from './useList';
import { ModalProvider } from './useModal';
import { UserLoggedProvider } from './useUserLogged';

import 'react-loading-skeleton/dist/skeleton.css';

const Context = ({ children }: PropsWithChildren) => {
  return (
    <CardMessageProvider>
      <UserLoggedProvider>
        <ModalProvider>
          <BoardsProvider>
            <CardsProvider>
              <BoardsProvider>
                <ListsProvider>
                  <SkeletonTheme
                    baseColor={themes.sideColor}
                    highlightColor={themes.hoverColor}
                  >
                    {children}
                  </SkeletonTheme>
                </ListsProvider>
              </BoardsProvider>
            </CardsProvider>
          </BoardsProvider>
        </ModalProvider>
      </UserLoggedProvider>
    </CardMessageProvider>
  );
};

export default Context;
