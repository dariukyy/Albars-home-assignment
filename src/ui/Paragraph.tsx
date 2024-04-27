import { ReactNode } from "react";
import styled from "styled-components";

type ParagraphProps = {
  children: ReactNode;
};

const StyledParagraph = styled.p`
  color: #4b5563;
  font-size: 1.25rem;
`;

function Paragraph({ children }: ParagraphProps) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export default Paragraph;
