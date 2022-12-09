import React from "react";
import Comments from "./Comments";
import Voting from "./Votes";

const SingleArticleCard = ({ article }) => {
  return (
    <li>
      <h2>{article.title}</h2>
      <h3>{article.article_id}</h3>
      <h4>Written by {article.author}</h4>
      <p>{article.body}</p>
      <Voting votes={article.votes} article_id={article.article_id} />
      <Comments article_id={article.article_id} />
    </li>
  );
};

export default SingleArticleCard;
