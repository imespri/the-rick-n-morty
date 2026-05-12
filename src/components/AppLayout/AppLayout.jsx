import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { Header } from "../features/layouts/header";
// import { HomePage } from "../pages/home";
// import { Shadow } from "../shared/components/shadow";

// export const AppLayout = () => {
//   const [visibilityModal, setVisibilityModal] = useState(false);

//   const openModal = () => setVisibilityModal(true);
//   const closeModal = () => setVisibilityModal(false);

//   return (
//     <>
//       <Header />
//       <main>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <HomePage
//                 visibilityModal={visibilityModal}
//                 openModal={openModal}
//                 closeModal={closeModal}
//               />
//             }
//           />
//         </Routes>
//       </main>
//       {visibilityModal && <Shadow closeModal={closeModal} />}
//     </>
//   );
// };
