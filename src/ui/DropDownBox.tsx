import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const StyledDropDownBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.8rem;
  margin-right: -0.5rem;

  & svg {
    height: 2.1rem;
    width: 2.1rem;
    color: #9ca3af;
    font-weight: 300;
  }

  & div {
    font-weight: 600;
  }
`;

export const ArrowIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-left: -0.7rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d1d5db;
  }
`;

type DropwDownIconProps = {
  fullName: string;
  dropdownOpen: boolean;
  handleOpen: () => void;
};

function DropDownBox({
  fullName,
  dropdownOpen,
  handleOpen,
}: DropwDownIconProps) {
  return (
    <StyledDropDownBox>
      <ArrowIcon onClick={handleOpen}>
        {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </ArrowIcon>
      <div>{fullName}</div>
    </StyledDropDownBox>
  );
}

export default DropDownBox;
