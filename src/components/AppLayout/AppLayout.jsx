import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Shadow } from "../Shadow/Shadow";

const ShadowContext = createContext();

export function AppLayout() {
  const [isShadowActive, setIsShadowActive] = useState(false);

  const openShadow = () => {
    setIsShadowActive(true);
    document.body.style.overflow = "hidden";
  };
  const hideShadow = () => {
    setIsShadowActive(false);
    document.body.style.overflow = "";
  };

  return (
    <ShadowContext.Provider value={{ isShadowActive, openShadow, hideShadow }}>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
      {isShadowActive && <Shadow />}
    </ShadowContext.Provider>
  );
}

export const useShadow = () => useContext(ShadowContext);
