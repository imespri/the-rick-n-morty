import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Shadow } from "../Shadow/Shadow";

export function AppLayout() {
  const [isShadowActive, setIsShadowActive] = useState(false);

  const toggleShadow = () => setIsShadowActive(!isShadowActive);

  return (
    <>
      <Header toggleShadow={toggleShadow} />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
      {isShadowActive && <Shadow />}
    </>
  );
}
