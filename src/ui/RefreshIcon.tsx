import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { REFRESH_DATA_TIMEOUT } from "../utils/constants";

const StyledIcon = styled.button<{ disabled: boolean }>`
  width: 4rem;
  height: 4rem;
  border: none;
  background-color: inherit;
  border-radius: 0.5rem;
  ${(props) => (props.disabled ? "cursor: not-allowed;" : "cursor: pointer;")}

  &:hover {
    background-color: #f3f4f6;
  }

  & svg {
    height: 2.3rem;
    width: 2.3rem;
    ${(props) => (props.disabled ? "cursor: not-allowed;" : "cursor: pointer;")}
  }
`;

type RefreshIconProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  isLoading: boolean;
  onClick: () => void;
};

function RefreshIcon({ children, onClick, isLoading }: RefreshIconProps) {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setRotate((prevRotate) => prevRotate + 720);
    }
  }, [isLoading]);

  return (
    <StyledIcon disabled={isLoading} onClick={onClick}>
      <motion.div
        animate={{
          rotate: rotate,
        }}
        transition={{
          ease: "linear",
          duration: REFRESH_DATA_TIMEOUT / 1000,
        }}
        style={{ transformOrigin: "center" }}
      >
        {children}
      </motion.div>
    </StyledIcon>
  );
}

export default RefreshIcon;
