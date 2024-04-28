import { useAppContext } from "../context/useAppContext";
import styled from "styled-components";
import { StyledCheckbox } from "./styled-components/StyledCheckBox";

const StyledHeaderCheckBox = styled.div`
  display: flex;
  gap: 1.6rem;
  transition: all 0.3s;
`;

function IndeterminateCheckbox() {
  const {
    checkedItemsCount,
    setAllItemsChecked,
    setCheckedItemsCount,
    allItemsChecked,
    memoizedDataLength,
  } = useAppContext();

  // Check if all items are checked
  const allChecked = checkedItemsCount === memoizedDataLength;

  // Function to handle the checkbox state
  function handleAllCheck() {
    setAllItemsChecked(!allItemsChecked);

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      const input = checkbox as HTMLInputElement;
      if (allItemsChecked) {
        input.checked = false;
        setCheckedItemsCount(0);
      } else {
        input.checked = true;
        setCheckedItemsCount(memoizedDataLength);
      }
    });
  }

  return (
    <StyledHeaderCheckBox>
      <StyledCheckbox
        ref={(el) =>
          el &&
          (el.indeterminate =
            checkedItemsCount > 0 && checkedItemsCount < memoizedDataLength)
        }
        onClick={handleAllCheck}
        checked={allChecked}
      />
    </StyledHeaderCheckBox>
  );
}
export default IndeterminateCheckbox;
