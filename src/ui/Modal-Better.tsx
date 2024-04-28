import styled from "styled-components";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import React, {
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const ForwardedStyledModal = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren
>((props, ref) => <StyledModal ref={ref} {...props} />);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: 5px;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: #f3f4f6;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #6b7280;
  }
`;

type ModalContextType = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
};

type ModalProps = {
  children: ReactNode;
};

type OpenProps = {
  children: ReactElement;
  opens: string;
};

type WindowProps = {
  children: ReactElement;
  name: string;
};

const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useContext(ModalContext)!;

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext)!;

  const ref = useOutsideClick<HTMLDivElement>(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <ForwardedStyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </ForwardedStyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
