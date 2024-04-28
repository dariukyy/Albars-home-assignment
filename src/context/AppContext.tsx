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
  // State to force a refresh of the data
  const [, setVersion] = useState(0);
  // State to show a loading spinner when refreshing the data
  const [refreshLoading, setRefreshLoading] = useState(false);
  // State to keep track of the checkbox state
  const [allSelected, setAllSelected] = useState<boolean | null>(null);

  // Get the search params from the URL
  const [searchParams] = useSearchParams();

  // Memoize the data and its length
  const memoizedData = useMemo(() => data, []);
  const memoizedDataLength = useMemo(() => data.length, []);

  // Get the number of persons to show per page
  const ShowPersonsPerPageValue = Number(searchParams.get("show"));
  // Calculate the total number of pages
  const totalPages =
    Math.ceil(memoizedDataLength / Number(ShowPersonsPerPageValue)) ?? "1";

  // Function to refresh the data
  function refreshData() {
    setRefreshLoading(true);

    setTimeout(() => {
      setVersion((version) => version + 1);
      setRefreshLoading(false);
      setAllSelected(null);
    }, REFRESH_DATA_TIMEOUT);
  }

  // Function to set the checkbox state
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
