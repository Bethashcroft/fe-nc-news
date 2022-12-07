import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <ul>
      <h2>{article.title}</h2>
      <h3>{article.article_id}</h3>
      <h4>Written by {article.author}</h4>
      <h4>Votes: {article.votes}</h4>
      <Link to={`/articles/${article.article_id}`}>View Article</Link>
    </ul>
  );
};

export default ArticleCard;
