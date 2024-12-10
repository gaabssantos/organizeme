import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalType {
  openModal: () => void;
  closeModal: () => void;
  modalIsOpen: boolean;
}

const ModalContext = createContext<ModalType | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModal must be used inside of a ModalContextProvider');
  }

  return context;
};
