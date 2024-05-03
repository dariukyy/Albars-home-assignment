import { ReactNode, createContext, useMemo, useState } from "react";
import { Persons, data } from "../data/data";
import { REFRESH_DATA_TIMEOUT } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

type AppContextValue = {
  data: Persons;
  refreshData: () => void;
  refreshLoading: boolean;
  checkedItemsCount: number;
  setCheckedItemsCount: (value: number) => void;
  memoizedDataLength: number;
  totalPages: number;
  ShowPersonsPerPageValue: number;
  setAllItemsChecked: (value: boolean) => void;
  allItemsChecked: boolean;
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextValue | null>(null);

export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  // State to force a refresh of the data
  const [, setVersion] = useState(0);
  // State to show a loading spinner when refreshing the data
  const [refreshLoading, setRefreshLoading] = useState(false);
  // State to keep track of the number of checked items
  const [checkedItemsCount, setCheckedItemsCount] = useState(0);
  // State to keep track of the checkbox state
  const [allItemsChecked, setAllItemsChecked] = useState(false);

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
    }, REFRESH_DATA_TIMEOUT);
  }

  return (
    <AppContext.Provider
      value={{
        data: memoizedData,
        refreshData,
        refreshLoading,
        checkedItemsCount,
        setCheckedItemsCount,
        memoizedDataLength,
        totalPages,
        ShowPersonsPerPageValue,
        allItemsChecked,
        setAllItemsChecked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
