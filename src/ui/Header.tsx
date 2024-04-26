import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 7% 30% 7% 10% 10% 12.5% 19% 8% 5.5%;
`;

function Header() {
  return <StyledHeader></StyledHeader>;
}

export default Header;
