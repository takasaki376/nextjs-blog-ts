import type { ReactNode, VFC } from "react";
import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  children?: ReactNode;
};

export const Modal: VFC<Props> = (props) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  if (!props.open) {
    return null;
  }
  useEffect(() => {
    ref.current = document.querySelector("#modal");
    setMounted(true);
  }, []);

  return mounted ? createPortal(props.children, ref.current) : null;
};
