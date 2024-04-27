import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";

const StyledIcon = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  background-color: inherit;
  border-radius: 0.5rem;

  &:hover {
    background-color: #f3f4f6;
  }

  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

type RefreshIconProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
};

function RefreshIcon({ children, onClick, isLoading }: RefreshIconProps) {
  return (
    <StyledIcon disabled={isLoading} onClick={onClick}>
      {children}
    </StyledIcon>
  );
}

export default RefreshIcon;
