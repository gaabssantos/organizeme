import { createContext, ReactNode, useContext } from 'react';

interface UserLoggedContextType {
  isUserLogged: () => boolean;
}

const UserLoggedContext = createContext<UserLoggedContextType | null>(null);

interface UserLoggedProviderProps {
  children: ReactNode;
}

export function UserLoggedProvider({ children }: UserLoggedProviderProps) {
  const isUserLogged = () => {
    if (localStorage.getItem('orgazineme:userData')) {
      return true;
    }

    return false;
  };

  return (
    <UserLoggedContext.Provider value={{ isUserLogged }}>
      {children}
    </UserLoggedContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserLogged = () => {
  const context = useContext(UserLoggedContext);

  if (context === undefined) {
    throw new Error('useLogin must be used inside of a UserLoggedProvider');
  }

  return context;
};
