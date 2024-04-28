import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  height: 1.8rem;
  width: 1.8rem;
  outline-offset: 2px;
  transform-origin: 0;
  cursor: pointer;
  border: 1.3px solid #6b7280;
  border-radius: 3px;
  background: white;

  &:checked {
    background: var(--color-green-primary);
    border: none;
  }

  &:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: relative;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:disabled {
    background: white;
    border: 1px solid #ccc;
  }

  &:indeterminate {
    background-color: var(--color-green-primary);
    border: none;
  }
  &:indeterminate:after {
    content: "";
    display: block;
    width: 10px;
    height: 2px;
    background: white;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
