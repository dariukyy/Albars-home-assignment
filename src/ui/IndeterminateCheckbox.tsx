import { useEffect } from "react";
import { useAppContext } from "../context/useAppContext";
import styled from "styled-components";
import { StyledCheckbox } from "./styled-components/StyledCheckBox";

const StyledHeaderCheckBox = styled.div`
  display: flex;
  gap: 1.6rem;
  transition: all 0.3s;

  /* & input[type="checkbox"] {
    height: 1.8rem;
    width: 1.8rem;
    outline-offset: 2px;
    transform-origin: 0;
    outline-offset: 2px;
    accent-color: var(--color-green-primary);
    cursor: pointer;
    position: relative;
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-green-primary);
  }

  & input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 0.3rem;
    width: 1rem;
    background-color: transparent;
  }

  & input[type="checkbox"]:indeterminate::before {
    background-color: green; // Change this to the color you want
  } */
`;

function IndeterminateCheckbox() {
  const { checkedItemsCount, allChecked, setAllItemsChecked, allItemsChecked } =
    useAppContext();

  useEffect(() => {}, [checkedItemsCount, allChecked]);

  return (
    <StyledHeaderCheckBox>
      <StyledCheckbox
        ref={(el) =>
          el && (el.indeterminate = checkedItemsCount > 0 && !allChecked)
        }
        checked={allChecked}
        // onChange={(e) => setAllItemsChecked(e.target.checked)}
      />
    </StyledHeaderCheckBox>
  );
}

export default IndeterminateCheckbox;
