import { ReactNode } from "react";

export type ColumnType = {
  name: string;
  displayName: string | ReactNode;
  width: string;
};
