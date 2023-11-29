import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pessoas from "./pages/Pessoas.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Contato from "./pages/Contato.jsx";
import PageLayout from "./components/PageLayout.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route index element={<Pessoas />} />
            <Route path="/pessoas" element={<Pessoas />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
};
export default App;
