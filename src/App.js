import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllArticles from "./components/AllArticles";
import SingleArticle from "./components/SingleArticle.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/news" element={<AllArticles />} />
          <Route
            path="/news/articles/:article_id"
            element={<SingleArticle />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
