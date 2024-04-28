import { useEffect, useRef, MutableRefObject } from "react";

export function useOutsideClick(
  handler: () => void,
  listenCapturing: boolean = true
): MutableRefObject<null | HTMLUListElement> {
  // Create a ref that stores the reference to the element
  const ref = useRef<null | HTMLUListElement>(null);

  // Handle the outside click event
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Check if the click was outside the element
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }
    // Handle the escape key press event
    function handleEscPress(e: KeyboardEvent) {
      if (e.code === "Escape") handler();
    }
    // Add the event listeners
    document.addEventListener("click", handleClick, listenCapturing);
    document.addEventListener("keydown", handleEscPress, listenCapturing);

    return () => {
      // Remove the event listeners
      document.removeEventListener("click", handleClick, listenCapturing);
      document.removeEventListener("keydown", handleEscPress, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
