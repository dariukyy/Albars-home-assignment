import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

const StyledTotalPersons = styled.div`
  font-size: 1.5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & div {
    font-weight: 500;
  }

  & span {
    color: #4b5563;
  }
`;

function TotalPersons() {
  const { memoizedDataLength } = useAppContext();

  return (
    <StyledTotalPersons>
      <div>Total:</div>
      <span>{memoizedDataLength}</span>
    </StyledTotalPersons>
  );
}

export default TotalPersons;
