import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./Footer";
import { HomePage } from "../../pages/home";
import { NotFoundPage } from "../../pages/not-found/NotFoundPage";
import { Shadow } from "../../shared/components/shadow";

export const Layout = () => {
  const [visibilityModal, setVisibilityModal] = useState(false);

  const openModal = () => setVisibilityModal(true);
  const closeModal = () => setVisibilityModal(false);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                visibilityModal={visibilityModal}
                openModal={openModal}
                closeModal={closeModal}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      {visibilityModal && <Shadow closeModal={closeModal} />}
    </>
  );
};
