import styled from "styled-components";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  padding-top: 4.8rem;
  background-color: #f9fafb;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

function FullPageSpinner() {
  return (
    <FullPage>
      <Spinner />
    </FullPage>
  );
}

export default FullPageSpinner;
