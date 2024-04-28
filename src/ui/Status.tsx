import styled from "styled-components";
import { isFutureDate } from "../utils/helpers";
import { ObjectProps } from "./DropDownRows";

type StatusProps = {
  status?: boolean;
  code?: { date: string; status: string } | ObjectProps;
  canceled?: boolean;
};

const StyledStatus = styled.div<StatusProps>`
  background-color: ${(props) =>
    props.canceled
      ? "#d1d5db"
      : props.status
      ? "var(--color-green-primary)"
      : "var(--color-red-status)"};
  padding: 2px 12px;
  width: fit-content;
  border-radius: 20px;
  font-size: 1.2;
`;

function Status({ status, code }: StatusProps) {
  if (code) {
    const { date, status: codeStatus } = code;

    // Check if the date is in the future
    const isValid = isFutureDate(date);

    // Check the status of the code
    if (codeStatus === "expired") {
      return <StyledStatus status={isValid}>Expired</StyledStatus>;
    } else if (codeStatus === "valid") {
      return <StyledStatus status={isValid}>Valid</StyledStatus>;
    } else if (codeStatus === "canceled") {
      return <StyledStatus canceled>Canceled</StyledStatus>;
    }
  }

  // Check the status of the user
  const statusText = status ? "Active" : "Inactive";
  return <StyledStatus status={status}>{statusText}</StyledStatus>;
}

export default Status;
