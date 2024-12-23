import { createContext, ReactNode, useContext, useState } from 'react';

interface IList {
  id: string;
  board_id: string;
  name: string;
}

interface ListsContextType {
  lists: IList[];
  setLists: React.Dispatch<React.SetStateAction<IList[]>>;
}

const ListsContext = createContext<ListsContextType | null>(null);

interface ListsProviderProps {
  children: ReactNode;
}

export function ListsProvider({ children }: ListsProviderProps) {
  const [lists, setLists] = useState<IList[]>([
    { id: '', board_id: '', name: '' },
  ]);

  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      {children}
    </ListsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLists = () => {
  const context = useContext(ListsContext);

  if (context === undefined) {
    throw new Error('useLists must be used inside of a ListsProvider');
  }

  return context;
};
