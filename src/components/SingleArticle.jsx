import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const routeParams = useParams();

  useEffect(() => {
    getArticleById(routeParams.article_id).then(
      (oneArticle) => {
        setSingleArticle(oneArticle);
        setIsLoading(false);
      },
      () => {
        console.log("error");
      }
    );
  }, [routeParams]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <SingleArticleCard article={singleArticle} key={singleArticle.article_id} />
  );
};

export default SingleArticle;
