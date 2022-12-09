import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <li>
      <h2>{article.title}</h2>
      <h3>{article.article_id}</h3>
      <h4>Written by {article.author}</h4>
      <Link to={`/articles/${article.article_id}`}>View Article</Link>
    </li>
  );
};

export default ArticleCard;
