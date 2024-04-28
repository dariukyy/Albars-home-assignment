import styled from "styled-components";
import { useAppContext } from "../context/useAppContext";

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
  const { checkedItemsCount, setCheckedItemsCount } = useAppContext();

  const handleCheck = (isChecked: boolean) => {
    const newCount = isChecked ? checkedItemsCount + 1 : checkedItemsCount - 1;
    setCheckedItemsCount(newCount);
  };
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        // checked={checked}
        onChange={(e) => handleCheck(e.target.checked)}
      />
    </StyledCheckbox>
  );
}

export default Checkbox;
