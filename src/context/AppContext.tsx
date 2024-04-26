import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { Persons, data } from "../data/data";
import { REFRESH_DATA_TIMEOUT } from "../utils/constants";

type AppContextValue = {
  data: Persons;
  refreshData: () => void;

  refreshLoading: boolean;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextValue | null>(null);

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  const [, setVersion] = useState(0);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const memoizedData = useMemo(() => data, []);

  function refreshData() {
    setRefreshLoading(true);
    setTimeout(() => {
      setVersion((version) => version + 1);
      setRefreshLoading(false);
    }, REFRESH_DATA_TIMEOUT);
  }
  return (
    <AppContext.Provider
      value={{ data: memoizedData, refreshData, refreshLoading }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext)!;
  if (context === undefined)
    throw new Error("App context used outside of the timer context provider");

  return context;
}
