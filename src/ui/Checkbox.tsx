import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;
  transition: all 0.3s;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-green-primary);
    cursor: pointer;
  }

  & input[type="checkbox"]:disabled {
    accent-color: white;
  }
`;

type CheckBoxProps = {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  id: string;
};

function Checkbox({ checked, onChange, disabled = false, id }: CheckBoxProps) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </StyledCheckbox>
  );
}

export default Checkbox;
