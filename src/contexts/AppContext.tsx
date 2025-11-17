import type { FC, ReactNode } from "react";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  isLoading: boolean;
  showModal: boolean;
  setLoading: (val: boolean) => void;
  setShowModal: (val: boolean) => void;
}

const defaultState: AppContextType = {
  isLoading: false,
  showModal: false,
  setLoading: () => {},
  setShowModal: () => {},
};

const AppContext = createContext<AppContextType>(defaultState);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        showModal,
        setLoading: setIsLoading,
        setShowModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useApp = () => useContext(AppContext);
