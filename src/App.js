import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/news" element={<AllArticles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
