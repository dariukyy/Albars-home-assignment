import styled from "styled-components";
import Paragraph from "./Paragraph";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { ArrowIcon } from "./DropDownBox";
import { useAppContext } from "../context/AppContext";
import { useSearchParams } from "react-router-dom";

const StyledPageCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  font-size: 1.5rem;
  width: 30%;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    & svg {
      height: 2.1rem;
      width: 2.1rem;
      color: #9ca3af;
      font-weight: 300;
    }
  }
`;

function PageCount() {
  const { totalPages } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();

  // Set the page number in the URL
  function setUrl(pageName: string) {
    searchParams.set("page", pageName);
    setSearchParams(searchParams);
  }

  // Get the current page number from the URL
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  // Handle the left arrow click event
  function handleClickLedt() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    setUrl(prev.toString());
  }

  // Handle the right arrow click event
  function handleClickRight() {
    const next = currentPage === totalPages ? currentPage : currentPage + 1;

    // Set the page number in the URL
    setUrl(next.toString());
  }

  return (
    <StyledPageCount>
      <Paragraph>
        Page {currentPage} / {totalPages}
      </Paragraph>
      <div>
        <ArrowIcon disabled={currentPage === 1} onClick={handleClickLedt}>
          <GoArrowLeft />
        </ArrowIcon>
        <ArrowIcon disabled={currentPage === totalPages}>
          <GoArrowRight onClick={handleClickRight} />
        </ArrowIcon>
      </div>
    </StyledPageCount>
  );
}

export default PageCount;
