import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { Persons, data } from "../data/data";
import { REFRESH_DATA_TIMEOUT } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

type AppContextValue = {
  data: Persons;
  refreshData: () => void;
  refreshLoading: boolean;
  allSelected: boolean | null;
  setAllChecked: (checked: boolean) => void;
  memoizedDataLength: number;
  totalPages: number;
  ShowPersonsPerPageValue: number;
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
  const [allSelected, setAllSelected] = useState<boolean | null>(null);

  const [searchParams] = useSearchParams();

  const memoizedData = useMemo(() => data, []);
  const memoizedDataLength = useMemo(() => data.length, []);

  const ShowPersonsPerPageValue = Number(searchParams.get("show"));
  const totalPages =
    Math.ceil(memoizedDataLength / Number(ShowPersonsPerPageValue)) ?? "1";

  function refreshData() {
    setRefreshLoading(true);

    setTimeout(() => {
      setVersion((version) => version + 1);
      setRefreshLoading(false);
      setAllSelected(null);
    }, REFRESH_DATA_TIMEOUT);
  }

  function setAllChecked() {
    setAllSelected((prev) => (prev === null ? false : true));
  }
  return (
    <AppContext.Provider
      value={{
        data: memoizedData,
        refreshData,
        refreshLoading,
        allSelected,
        setAllChecked,
        memoizedDataLength,
        totalPages,
        ShowPersonsPerPageValue,
      }}
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
