import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type AppContextType = {
  cookie: string;
  setCookie: Dispatch<SetStateAction<string>>;
};

const DEFAULT_VALUE = {
  cookie: '',
  setCookie: () => null,
};

const AppContext = createContext<AppContextType>(DEFAULT_VALUE);

function AppContextProvider({ children }: { children: ReactNode }) {
  const [cookie, setCookie] = useState<string>('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ cookie, setCookie }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
