import styled from "styled-components";
import { useAppContext } from "../context/useAppContext";
import { StyledCheckbox } from "./styled-components/StyledCheckBox";

const StyledRowCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;
  transition: all 0.3s;
`;

type RowCheckboxProps = {
  setRowCheckboxChecked: (isChecked: boolean) => void;
};

function RowCheckbox({ setRowCheckboxChecked }: RowCheckboxProps) {
  const { checkedItemsCount, setCheckedItemsCount } = useAppContext();

  const handleCheck = (isChecked: boolean) => {
    setRowCheckboxChecked(isChecked);

    const newCount = isChecked ? checkedItemsCount + 1 : checkedItemsCount - 1;
    setCheckedItemsCount(newCount);
  };
  return (
    <StyledRowCheckbox>
      <StyledCheckbox onChange={(e) => handleCheck(e.target.checked)} />
    </StyledRowCheckbox>
  );
}

export default RowCheckbox;
