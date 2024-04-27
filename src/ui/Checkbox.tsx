import styled from "styled-components";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

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

function Checkbox() {
  const { allSelected, setAllChecked } = useAppContext();
  const [checked, setChecked] = useState(false);

  function handleClick() {
    setChecked((prev) => !prev);
    setAllChecked(true);
  }

  return (
    <StyledCheckbox>
      <input type="checkbox" checked={checked} onChange={handleClick} />
    </StyledCheckbox>
  );
}

export default Checkbox;
