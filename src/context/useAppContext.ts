import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useAppContext() {
  const context = useContext(AppContext)!;
  if (context === undefined)
    throw new Error("App context used outside of the timer context provider");

  return context;
}
