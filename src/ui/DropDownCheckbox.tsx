import styled from "styled-components";
import { useState } from "react";
import { StyledCheckbox } from "./styled-components/StyledCheckBox";

const StyledDropDownCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;
  transition: all 0.3s;
`;

function DropDownCheckbox() {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };
  return (
    <StyledDropDownCheckbox>
      <StyledCheckbox checked={checked} onChange={handleCheck} />
    </StyledDropDownCheckbox>
  );
}

export default DropDownCheckbox;
