import { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

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

type IconProps = ComponentPropsWithoutRef<"button"> & { children: ReactNode };

function Icon({ children }: IconProps) {
  const { refreshData, refreshLoading } = useAppContext();
  return (
    <StyledIcon disabled={refreshLoading} onClick={refreshData}>
      {children}
    </StyledIcon>
  );
}

export default Icon;
