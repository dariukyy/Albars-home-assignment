import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import { useEffect, useRef } from "react";

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
  const { allSelected, setAllChecked } = useAppContext();
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = allSelected === false;
    }
  }, [allSelected]);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setAllChecked(target.checked);
    console.log(target.checked);
  };

  return (
    <StyledHeaderCheckBox>
      <input
        type="checkbox"
        ref={checkboxRef}
        checked={allSelected === true}
        onChange={handleCheck}
      />
    </StyledHeaderCheckBox>
  );
}

export default HeaderCheckBox;
