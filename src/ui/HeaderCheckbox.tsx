import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import styled from "styled-components";

const StyledHeaderCheckBox = styled.div`
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
  }
`;

function HeaderCheckBox() {
  const { checkedItemsCount, allChecked } = useAppContext();

  useEffect(() => {}, [checkedItemsCount, allChecked]);

  return (
    <StyledHeaderCheckBox>
      <input
        type="checkbox"
        ref={(el) =>
          el && (el.indeterminate = checkedItemsCount > 0 && !allChecked)
        }
        checked={allChecked}
      />
    </StyledHeaderCheckBox>
  );
}

export default HeaderCheckBox;
