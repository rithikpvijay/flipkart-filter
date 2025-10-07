import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <MenuContext.Provider
      value={{ openId, close, open, setPosition, position }}
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
  const { setPosition } = useContext(MenuContext);

  function handleOver(e) {
    const rect = e.target.closest("a")?.getBoundingClientRect();
    if (rect)
      setPosition({
        x: window.innerWidth - rect.width - rect.x,
        y: rect.y + rect.height + 8,
      });
  }
  return <div onMouseEnter={handleOver}>{children}</div>;
}

function List({ id, children }) {
  const { openId, position } = useContext(MenuContext);
  if (openId !== id) return null;
  if (!position) return null;
  const { x, y } = position;
  return (
    <div
      className={`fixed  transition-all duration-1000 ease-out
        ${
          openId === id
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      style={{ right: `${x - 70}px`, top: `${y - 10}38px` }}
    >
      {children}
    </div>
  );
}
Menus.Wrapper = Wrapper;
Menus.Toggle = Toggle;
Menus.List = List;

export default Menus;
