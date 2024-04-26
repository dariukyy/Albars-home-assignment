import styled from "styled-components";
import Header from "./Header";

const StyledTable = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  background-color: white;
  font-size: 1.4rem;
  overflow: hidden;
  border-radius: 7px;
`;

function Table() {
  return (
    <StyledTable>
      <Header />
    </StyledTable>
  );
}

export default Table;
