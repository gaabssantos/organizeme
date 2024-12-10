import { createContext, ReactNode, useContext, useState } from 'react';

interface IBoard {
  color: string;
  id: string;
  id_user: string;
  name: string;
}

interface BoardsContextType {
  boards: IBoard[];
  setBoards: React.Dispatch<React.SetStateAction<IBoard[]>>;
}

const BoardsContext = createContext<BoardsContextType | null>(null);

interface BoardsProviderProps {
  children: ReactNode;
}

export function BoardsProvider({ children }: BoardsProviderProps) {
  const [boards, setBoards] = useState<IBoard[]>([
    { name: '', color: '', id: '', id_user: '' },
  ]);

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useBoards = () => {
  const context = useContext(BoardsContext);

  if (context === undefined) {
    throw new Error('useBoards must be used inside of a BoardsProvider');
  }

  return context;
};
