import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalType {
  activeModal: string | null;
  openModal: (modalName: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalType | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
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
