import { useState } from "react";
import { ColumnType } from "../types/Column";

type UseColumsProps = {
  initialColumns: ColumnType[];
  defaultWidth: string;
};

export function useColums({ initialColumns, defaultWidth }: UseColumsProps) {
  const [columns, setColumns] = useState<ColumnType[]>(initialColumns);

  function handleResize(name: string, width: number) {
    const updatedColumns = [...columns];

    const foundColumnIndex = updatedColumns.findIndex(
      ({ name: columnName }) => columnName === name
    );

    if (foundColumnIndex === -1) return;

    updatedColumns[foundColumnIndex].width = `${width}px`;
    // Update the columns state with the new array
    setColumns(updatedColumns);
  }

  const getColumnWidth = (name: string): number => {
    const foundColumn = columns.find(
      ({ name: columnName }) => columnName === name
    );
    if (foundColumn) return parseFloat(foundColumn.width);

    return parseFloat(defaultWidth);
  };

  return { columns, setColumns, handleResize, getColumnWidth };
}
