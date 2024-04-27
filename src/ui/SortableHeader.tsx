import { ReactNode } from "react";
import { SortingFunctionTypes } from "../hooks/useSort";

type SortableHeaderProps = {
  field: SortingFunctionTypes;
  handleSort: (field: SortingFunctionTypes) => void;
  children: ReactNode;
};

function SortableHeader({ field, handleSort, children }: SortableHeaderProps) {
  return <div onClick={() => handleSort(field)}>{children}</div>;
}

export default SortableHeader;
