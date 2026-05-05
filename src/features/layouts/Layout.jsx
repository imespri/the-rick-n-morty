import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./Footer";
import { HomePage } from "../../pages/home";
import { NotFoundPage } from "../../pages/not-found/NotFoundPage";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
