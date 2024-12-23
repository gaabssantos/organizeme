import { PropsWithChildren } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { themes } from '../styles/themes.style';
import { BoardsProvider } from './useBoards';
import { CardsProvider } from './useCard';
import { CardMessageProvider } from './useCardMessage';
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
                <SkeletonTheme
                  baseColor={themes.sideColor}
                  highlightColor={themes.hoverColor}
                >
                  {children}
                </SkeletonTheme>
              </BoardsProvider>
            </CardsProvider>
          </BoardsProvider>
        </ModalProvider>
      </UserLoggedProvider>
    </CardMessageProvider>
  );
};

export default Context;
