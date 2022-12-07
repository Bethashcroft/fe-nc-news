import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllArticles from "./components/AllArticles";
import SingleArticle from "./components/SingleArticle.jsx";
// import Comments from "./components/Comments";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AllArticles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          {/* <Route path="/articles/:article_id/comments" element={<Comments />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
