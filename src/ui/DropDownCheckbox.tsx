import styled from "styled-components";
import { useEffect, useState } from "react";
import { StyledCheckbox } from "./styled-components/StyledCheckBox";

const StyledDropDownCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;
  transition: all 0.3s;
`;

function DropDownCheckbox({
  rowCheckboxChecked,
}: {
  rowCheckboxChecked: boolean;
}) {
  const [checked, setChecked] = useState(rowCheckboxChecked);

  useEffect(() => {
    setChecked(rowCheckboxChecked);
  }, [rowCheckboxChecked]);

  const handleCheck = (isChecked: boolean) => {
    setChecked(isChecked);
  };
  return (
    <StyledDropDownCheckbox>
      <StyledCheckbox
        checked={checked}
        onChange={(e) => handleCheck(e.target.checked)}
      />
    </StyledDropDownCheckbox>
  );
}

export default DropDownCheckbox;
