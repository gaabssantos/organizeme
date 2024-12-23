import { createContext, ReactNode, useContext, useState } from 'react';

interface ICard {
  id: string;
  name: string;
  list_id: string;
}

interface CardsContextType {
  cards: ICard[];
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

const CardsContext = createContext<CardsContextType | null>(null);

interface CardsProviderProps {
  children: ReactNode;
}

export function CardsProvider({ children }: CardsProviderProps) {
  const [cards, setCards] = useState<ICard[]>([
    { id: '', name: '', list_id: '' },
  ]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCards = () => {
  const context = useContext(CardsContext);

  if (context === undefined) {
    throw new Error('useCards must be used inside of a CardsProvider');
  }

  return context;
};
