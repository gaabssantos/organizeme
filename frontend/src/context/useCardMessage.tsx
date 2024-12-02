import React, { createContext, useState, ReactNode, useContext } from 'react';

interface CardMessageType {
  typeMessage: 'error' | 'success' | '';
  headerMessage: string | boolean;
  message: string | boolean;
}

interface CardMessageContextType {
  message: CardMessageType;
  setCardMessage: React.Dispatch<React.SetStateAction<CardMessageType>>;
}

const CardMessageContext = createContext<CardMessageContextType | undefined>(
  undefined,
);

interface CardMessageProviderProps {
  children: ReactNode;
}

const initialState: CardMessageType = {
  typeMessage: '',
  headerMessage: false,
  message: false,
};

export function CardMessageProvider({ children }: CardMessageProviderProps) {
  const [cardMessage, setCardMessage] = useState<CardMessageType>(initialState);

  const contextValue: CardMessageContextType = {
    message: cardMessage,
    setCardMessage,
  };

  return (
    <CardMessageContext.Provider value={contextValue}>
      {children}
    </CardMessageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCardMessage() {
  const context = useContext(CardMessageContext);

  if (context === undefined) {
    throw new Error('useCardMessage must be used within a CardMessageProvider');
  }

  return context;
}
