import { useState } from "react";
import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;
  transition: all 0.3s;

  & input[type="checkbox"] {
    height: 1.8rem;
    width: 1.8rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-green-primary);
    cursor: pointer;
  }

  & input[type="checkbox"]:disabled {
    accent-color: white;
  }
`;

// type CheckBoxProps = {
//   checked: boolean;
//   onChange?: () => void;
//   disabled?: boolean;
//   id?: string;
// };

function Checkbox() {
  const [checked, setChecked] = useState(false);
  function handleCheck() {
    setChecked((prev) => !prev);
  }
  return (
    <StyledCheckbox>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
    </StyledCheckbox>
  );
}

export default Checkbox;
