import styled from "styled-components";
import { isFutureDate } from "../utils/helpers";

type StatusProps = {
  status?: boolean;
  date?: string;
};

const StyledStatus = styled.div<StatusProps>`
  background-color: ${(props) =>
    props.status ? "var(--color-green-primary)" : "var(--color-red-status)"};
  padding: 6px 12px;
  width: fit-content;
  border-radius: 20px;
`;

function Status({ status, date }: StatusProps) {
  if (date) {
    const isValid = isFutureDate(date);
    const statusText = isValid ? "Valid" : "Expired";
    return <StyledStatus status={isValid}>{statusText}</StyledStatus>;
  }

  const statusText = status ? "Active" : "Inactive";
  return <StyledStatus status={status}>{statusText}</StyledStatus>;
}

export default Status;
