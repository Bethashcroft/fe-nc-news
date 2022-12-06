import React from "react";

const SingleArticleCard = ({ article }) => {
  return (
    <ul>
      <h2>{article.title}</h2>
      <h3>{article.article_id}</h3>
      <h4>Written by {article.author}</h4>
      <h4>Votes: {article.votes}</h4>
      <p>{article.body}</p>
    </ul>
  );
};

export default SingleArticleCard;
