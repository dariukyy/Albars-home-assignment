import { ColumnType } from "../types/Column";

export const GRID_COL_SIZES =
  "0.4fr 2fr 0.4fr 0.7fr 0.7fr 1fr 0.6fr 0.8fr 0.3fr";
export const REFRESH_DATA_TIMEOUT = 1000;
export const SHOW_VALUES = [25, 50, 100];
export const COLUMNS: ColumnType[] = [
  {
    name: "fullName",
    displayName: "Full name / Health check",
    width: "20rem",
  },
  {
    name: "combinedStatus",
    displayName: "Code",
    width: "20rem",
  },
  {
    name: "dateCount",
    displayName: "Expiration",
    width: "20rem",
  },
  {
    name: "department",
    displayName: "Department",
    width: "20rem",
  },
  {
    name: "status",
    displayName: "User status",
    width: "20rem",
  },
  {
    name: "jobTitle",
    displayName: "Job title",
    width: "20rem",
  },
];

// | "dateCount"
// | "department"
// | "jobTitle"
// | "combinedStatus";
