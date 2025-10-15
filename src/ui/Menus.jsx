import { createContext, useContext, useRef, useState } from "react";
import { createPortal } from "react-dom";

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;
  const ref = useRef(null);
  return (
    <MenuContext.Provider
      value={{ openId, close, open, setPosition, position, ref }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Wrapper({ id, children }) {
  const { openId, open, close } = useContext(MenuContext);

  function handleEnter() {
    if (openId !== id) open(id);
  }

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={close}>
      {children}
    </div>
  );
}

function Toggle({ children }) {
  const { setPosition, ref } = useContext(MenuContext);
  console.log(ref.current);

  function handleOver() {
    const rect = ref.current.getBoundingClientRect();
    if (rect)
      setPosition({
        x: rect.x,
        y: rect.bottom,
        width: rect.width,
      });

    console.log(rect);
  }
  return (
    <div ref={ref} onMouseEnter={handleOver}>
      {children}
    </div>
  );
}

function List({ id, children }) {
  const { openId, position } = useContext(MenuContext);

  // if (openId !== id) return null;
  if (!position) return null;
  const { x, y, width } = position;
  return (
    <div
      className={`fixed  transition-all duration-150 z-50
        ${
          openId === id
            ? "opacity-100  pointer-events-auto aria"
            : "opacity-0  pointer-events-none aria-hidden:true"
        }`}
      style={{
        left: `${x + width / 2}px`,
        top: `${y - 5}px`,
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </div>
  );
}
Menus.Wrapper = Wrapper;
Menus.Toggle = Toggle;
Menus.List = List;

export default Menus;
