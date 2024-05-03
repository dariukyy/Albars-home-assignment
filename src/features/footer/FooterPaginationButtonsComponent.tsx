import styled from "styled-components";
import { ArrowIcon } from "../dropdown/DropDownBox";
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";
import { useState } from "react";
import { SHOW_VALUES } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useAppContext } from "../../context/useAppContext";

const StyledComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & p {
      font-weight: 500;
    }

    & form {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.8rem;

      & input {
        width: 4rem;
        height: 4rem;
        padding: 0.5rem;
        font-size: 1.8rem;
        border-radius: 0.5rem;
        border: 2px solid #f3f4f6;
        font-weight: 400;
        color: #9ca3af;
        text-align: center;
      }

      & svg {
        height: 2rem;
        width: 2rem;
        color: #9ca3af;
        font-weight: 300;
      }
    }
  }
`;

const ShowComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.8rem;

  & p {
    font-weight: 500;
  }
`;

const ShowBoxes = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

const ShowBox = styled.li<{ active: boolean }>`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.active ? "var(--color-green-primary)" : "#fff"};
  font-weight: 500;
  color: ${(props) => (props.active ? "#000" : "#9ca3af")};
  cursor: ${(props) => (props.active ? "default" : "pointer")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--color-green-primary)" : "#d1d5db"};
    color: #000;
  }
`;

function FooterPaginationButtonsComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeButton, setActiveButton] = useState<number | null>(25);
  const [inputValue, setInputValue] = useState("1");
  const { totalPages } = useAppContext();

  // const show = searchParams.get("show");
  function handleClick(value: number) {
    setActiveButton(value);
    searchParams.set("show", value.toString());
    setSearchParams(searchParams);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }

  // const page = searchParams.get("page");
  const currentPage = searchParams.get("page");

  // const totalPages = searchParams.get("totalPages");
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      inputValue === "" ||
      +inputValue > totalPages ||
      +inputValue <= 0 ||
      inputValue === currentPage
    )
      return;

    searchParams.set("page", inputValue);
    setSearchParams(searchParams);
    setInputValue("");
  }

  return (
    <StyledComponent>
      <div>
        <p>Jump to:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ArrowIcon>
            <MdOutlineSubdirectoryArrowLeft />
          </ArrowIcon>
        </form>
      </div>

      <ShowComponent>
        <p>Show: </p>
        <ShowBoxes>
          {SHOW_VALUES.map((value) => (
            <ShowBox
              active={activeButton === value}
              key={value}
              onClick={() => handleClick(value)}
            >
              {value}
            </ShowBox>
          ))}
        </ShowBoxes>
      </ShowComponent>
    </StyledComponent>
  );
}

export default FooterPaginationButtonsComponent;
