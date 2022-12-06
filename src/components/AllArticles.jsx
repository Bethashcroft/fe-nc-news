import { useState, useEffect } from "react";
import { getArticles } from "../utils/api.js";
import ArticleCard from "./ArticleCard";

const DisplayAllArticles = () => {
  const [everyArticle, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((apiData) => {
      setAllArticles(apiData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {everyArticle.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default DisplayAllArticles;
