import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { motion } from "framer-motion";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ButtonIcon = styled.button<{ id: boolean }>`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  background-color: ${(props) => (props.id ? "#d1d5db" : "transparent")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #d1d5db;
  }

  & svg {
    height: 2.1rem;
    width: 2.1rem;
    color: #6b7280;
    font-weight: 300;
  }
`;

const StyledList = styled(motion.ul)<{ position: Position }>`
  position: fixed;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  overflow: hidden;

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s ease 0s;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }
  &:hover {
    background-color: #d1d5db;
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: #6b7280;
    transition: all 0.3s;
  }
`;

type Position = {
  x: number;
  y: number;
};

type MenusContextProps = {
  openId: string;
  close: () => void;
  open: (id: string) => void;
  position: { x: number; y: number } | null;
  setPosition: (position: Position) => void;
};
type MenusProps = {
  children: ReactNode;
};

type ToggleProps = {
  id: string;
};

type ButtonProps = {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
};

// Create a context to store the state of the menus
const MenusContext = createContext<MenusContextProps | null>(null);

function Menus({ children }: MenusProps) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState<Position | null>(null);

  // Close the menu when the user clicks outside of it
  const close = () => setOpenId("");

  // Open the menu with the given id
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{
        openId,
        close,
        open,
        position,
        setPosition,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }: ToggleProps) {
  const { open, openId, close, setPosition } = useContext(MenusContext)!;

  // Close the menu when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      close();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [close]);

  // Handle the click event on the button
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    const target = e.target as HTMLElement;
    const button = target.closest("button");

    if (!button) return;

    const rect = button.getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    // If the menu is already open, close it
    openId === "" || openId !== id ? open(id) : close();
  }

  // Check if the menu is open
  const isClicked = openId === id;
  return (
    <ButtonIcon id={isClicked} onClick={handleClick}>
      {<HiOutlineDotsHorizontal />}
    </ButtonIcon>
  );
}
type ListProps = {
  id: string;
  children: ReactNode;
};

function List({ id, children }: ListProps) {
  const { openId, position, close } = useContext(MenusContext)!;
  // Close the menu when the user clicks outside of it
  const ref = useOutsideClick(close, false);

  // Check if the menu is open and the position is set
  if (openId !== id || position === null) return null;

  // Create a portal to render the menu
  return createPortal(
    <StyledList
      initial={{ scale: 0, opacity: 0, x: "50%", y: "-70%" }}
      animate={{ scale: 1, opacity: 1, x: "0%", y: "0%" }}
      exit={{ scale: 0, opacity: 0, x: "50%", y: "-70%" }}
      transition={{ type: "tween", stiffness: 260, damping: 20 }}
      onClick={close}
      ref={ref}
      position={position}
    >
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }: ButtonProps) {
  // Handle the click event on the button
  function handleClick() {
    onClick?.();
    alert("Do something");
  }
  return (
    <StyledButton onClick={handleClick}>
      {icon}
      <span>{children}</span>
    </StyledButton>
  );
}

// Export the components
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
